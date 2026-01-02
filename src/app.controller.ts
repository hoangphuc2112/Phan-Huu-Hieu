import { Controller, Get, Render, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'; // Import HttpService để gọi API
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs'; // Import rxjs để xử lý dữ liệu

// --- CẤU HÌNH API TỪ WEBSITE CỦA BẠN ---
const WP_API = {
  posts: 'https://phanhuuhieu.com/wp-json/wp/v2/posts',
  pages: 'https://phanhuuhieu.com/wp-json/wp/v2/pages',
  media: 'https://phanhuuhieu.com/wp-json/wp/v2/media',
  blocks: 'https://phanhuuhieu.com/wp-json/wp/v2/blocks',
  globalStyles: 'https://phanhuuhieu.com/wp-json/wp/v2/global-styles',
  menus: 'https://phanhuuhieu.com/wp-json/wp/v2/navigation',
};

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService // Inject HttpService
  ) {}

  // --- TRANG CHỦ (HOME) ---
  @Get()
  @Render('index')
  root() {
    // Trang chủ giữ nguyên dữ liệu tĩnh profile (hoặc gọi API Page nếu muốn)
    return {
      pageTitle: 'Phan Hữu Hiếu',
      socials: [
        { name: "Facebook", url: "https://facebook.com/your-profile", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", color: "hover:text-[#1877F2]" },
        { name: "X (Twitter)", url: "https://x.com/your-profile", icon: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z", color: "hover:text-white" },
        // ... (Giữ nguyên các social khác)
      ]
    };
  }

  // --- TRANG TIN TỨC (NEWS) - ĐÃ TÍCH HỢP API ---
  @Get('news')
  @Render('news')
  async news() {
    try {
      // Gọi API lấy 10 bài viết mới nhất (kèm tham số _embed để lấy ảnh)
      const { data } = await firstValueFrom(
        this.httpService.get(`${WP_API.posts}?_embed&per_page=10`)
      );

      // Chuyển đổi dữ liệu WordPress sang format giao diện
      const articles = data.map((post: any) => ({
        title: post.title.rendered,
        slug: post.slug, // Link bài viết
        summary: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...', // Lọc thẻ HTML
        category: 'Tin Tức', 
        timeAgo: new Date(post.date).toLocaleDateString('vi-VN'),
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/800x400',
        author: post._embedded?.author?.[0]?.name || 'Admin',
        isLarge: false // Tùy chỉnh layout
      }));

      return {
        pageTitle: 'Tin Tức',
        featuredArticle: articles[0] || {}, // Bài đầu tiên là featured
        categories: [
           { name: "All Stories", icon: "check", active: true },
           { name: "Technology", icon: "computer" }
        ],
        articles: articles.slice(1) // Các bài còn lại
      };

    } catch (error) {
      console.error('Lỗi lấy API News:', error.message);
      return { pageTitle: 'Tin Tức (Lỗi tải)', articles: [] };
    }
  }

  // --- TRANG MEDIA - ĐÃ TÍCH HỢP API ---
  @Get('media')
  @Render('media')
  async media() {
    try {
      // Gọi API lấy danh sách Media (Ảnh/Video upload lên WP)
      const { data } = await firstValueFrom(
        this.httpService.get(`${WP_API.media}?per_page=12`)
      );

      const recentVideos = data.map((item: any) => ({
        title: item.title.rendered,
        description: item.alt_text || "No description",
        thumbnail: item.source_url, // Lấy link file gốc
        duration: "Image",
        link: item.link
      }));

      return {
        pageTitle: 'Báo Chí Phỏng Vấn - Phan Hữu Hiếu',
        featuredVideo: recentVideos[0] || {},
        recentVideos: recentVideos,
        categories: ["All", "Music Video", "Commercial", "Vlog", "Documentary"]
      };
    } catch (error) {
      console.error('Lỗi lấy API Media:', error.message);
      return { pageTitle: 'Media (Lỗi tải)', recentVideos: [] };
    }
  }

  // --- TRANG CHI TIẾT BÀI VIẾT (SINGLE BLOG) - ĐÃ TÍCH HỢP API ---
  @Get('news/:slug')
  @Render('single-blog')
  async singleBlog(@Param('slug') slug: string) {
    try {
      // Gọi API tìm bài viết theo Slug
      const { data } = await firstValueFrom(
        this.httpService.get(`${WP_API.posts}?slug=${slug}&_embed`)
      );

      if (!data || data.length === 0) {
        return { post: { title: "404 - Không tìm thấy", content: "Bài viết không tồn tại." } };
      }

      const wpPost = data[0];

      return {
        post: {
          title: wpPost.title.rendered,
          category: "Blog",
          date: new Date(wpPost.date).toLocaleDateString('vi-VN'),
          readTime: "5 min read",
          author: wpPost._embedded?.author?.[0]?.name || 'Admin',
          authorAvatar: wpPost._embedded?.author?.[0]?.avatar_urls?.['96'],
          image: wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/1200x600',
          content: wpPost.content.rendered, // Nội dung HTML thật từ WP
        }
      };
    } catch (error) {
      console.error('Lỗi lấy bài viết:', error.message);
      return { post: { title: "Lỗi kết nối", content: "Vui lòng thử lại sau." } };
    }
  } 
}