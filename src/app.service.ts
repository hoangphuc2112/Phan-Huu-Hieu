import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  // Đường dẫn GraphQL của bạn
  private readonly GRAPHQL_API = 'https://phanhuuhieu.com/wordpress/graphql';

  constructor(private readonly httpService: HttpService) {}

  // 1. Hàm lấy danh sách bài viết bằng GraphQL
  async getPosts() {
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
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    `;

    try {
      // GraphQL luôn dùng method POST
      const { data } = await firstValueFrom(
        this.httpService.post(this.GRAPHQL_API, { query })
      );
      // Cấu trúc trả về của GraphQL là: data.data.posts.nodes
      return data.data?.posts?.nodes || [];
    } catch (error) {
      console.error('Lỗi GraphQL:', error.message);
      return [];
    }
  }

  // 2. Hàm lấy chi tiết 1 bài viết theo Slug
  async getPostBySlug(slug: string) {
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
      const variables = { slug };
      const { data } = await firstValueFrom(
        this.httpService.post(this.GRAPHQL_API, { query, variables })
      );
      return data.data?.post || null;
    } catch (error) {
      console.error(`Lỗi tìm bài viết ${slug}:`, error.message);
      return null;
    }
  }
}