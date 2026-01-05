import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  // Đổi sang endpoint GraphQL
  private readonly GRAPHQL_API = 'https://phanhuuhieu.com/wordpress/graphql';

  constructor(private readonly httpService: HttpService) {}

  // ======================================================
  // 1. QUERY LẤY DANH SÁCH BÀI VIẾT (Cho trang News)
  // ======================================================
  async getPosts() {
    // ĐÂY LÀ CHỖ BẠN THÊM QUERY
    const query = `
      query GetPosts {
        posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            title
            slug
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      }
    `;

    try {
      // GraphQL bắt buộc dùng method POST
      const { data } = await firstValueFrom(
        this.httpService.post(this.GRAPHQL_API, { query })
      );
      // Trả về danh sách bài viết (nodes)
      return data.data?.posts?.nodes || [];
    } catch (error) {
      console.error('Lỗi lấy danh sách bài viết:', error.message);
      return [];
    }
  }

  // ======================================================
  // 2. QUERY LẤY CHI TIẾT 1 BÀI (Cho trang Single Blog)
  // ======================================================
  async getPostBySlug(slug: string) {
    // ĐÂY LÀ QUERY LẤY BÀI VIẾT THEO SLUG
    const query = `
      query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          date
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    `;

    try {
      const variables = { slug }; // Truyền biến slug vào query
      const { data } = await firstValueFrom(
        this.httpService.post(this.GRAPHQL_API, { query, variables })
      );
      return data.data?.post || null;
    } catch (error) {
      console.error(`Lỗi lấy bài viết ${slug}:`, error.message);
      return null;
    }
  }
}