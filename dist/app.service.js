"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
        this.GRAPHQL_API = 'https://phanhuuhieu.com/wordpress/graphql';
    }
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
              }
            }
          }
        }
      }
    `;
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(this.GRAPHQL_API, { query }));
            return data.data?.posts?.nodes || [];
        }
        catch (error) {
            console.error('Lỗi lấy danh sách bài viết:', error.message);
            return [];
        }
    }
    async getPostBySlug(slug) {
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
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(this.GRAPHQL_API, { query, variables }));
            return data.data?.post || null;
        }
        catch (error) {
            console.error(`Lỗi lấy bài viết ${slug}:`, error.message);
            return null;
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
//# sourceMappingURL=app.service.js.map