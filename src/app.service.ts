import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  // Đường dẫn API của bạn
  private readonly WP_API = 'https://phanhuuhieu.com/wordpress/wp-json/wp/v2';

  constructor(private readonly httpService: HttpService) {}

  // Hàm lấy danh sách bài viết (Chỉ dùng khi vào trang News)
  async getPosts() {
    try {
      const url = `${this.WP_API}/posts?_embed&per_page=10`;
      const { data } = await firstValueFrom(this.httpService.get(url));
      return data;
    } catch (error) {
      console.log('Lỗi API:', error.message); 
      return []; // Nếu lỗi thì trả về rỗng để web không bị sập
    }
  }

  // Hàm lấy bài viết chi tiết
  async getPostBySlug(slug: string) {
    try {
      const url = `${this.WP_API}/posts?slug=${slug}&_embed`;
      const { data } = await firstValueFrom(this.httpService.get(url));
      return data.length > 0 ? data[0] : null;
    } catch (error) {
      return null;
    }
  }
}