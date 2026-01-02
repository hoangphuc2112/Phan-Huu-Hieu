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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const app_service_1 = require("./app.service");
const rxjs_1 = require("rxjs");
const WP_API = {
    posts: 'https://phanhuuhieu.com/wp-json/wp/v2/posts',
    pages: 'https://phanhuuhieu.com/wp-json/wp/v2/pages',
    media: 'https://phanhuuhieu.com/wp-json/wp/v2/media',
    blocks: 'https://phanhuuhieu.com/wp-json/wp/v2/blocks',
    globalStyles: 'https://phanhuuhieu.com/wp-json/wp/v2/global-styles',
    menus: 'https://phanhuuhieu.com/wp-json/wp/v2/navigation',
};
let AppController = class AppController {
    constructor(appService, httpService) {
        this.appService = appService;
        this.httpService = httpService;
    }
    root() {
        return {
            pageTitle: 'Phan Hữu Hiếu',
            socials: [
                { name: "Facebook", url: "https://facebook.com/your-profile", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", color: "hover:text-[#1877F2]" },
                { name: "X (Twitter)", url: "https://x.com/your-profile", icon: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z", color: "hover:text-white" },
            ]
        };
    }
    async news() {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${WP_API.posts}?_embed&per_page=10`));
            const articles = data.map((post) => ({
                title: post.title.rendered,
                slug: post.slug,
                summary: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...',
                category: 'Tin Tức',
                timeAgo: new Date(post.date).toLocaleDateString('vi-VN'),
                image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/800x400',
                author: post._embedded?.author?.[0]?.name || 'Admin',
                isLarge: false
            }));
            return {
                pageTitle: 'Tin Tức',
                featuredArticle: articles[0] || {},
                categories: [
                    { name: "All Stories", icon: "check", active: true },
                    { name: "Technology", icon: "computer" }
                ],
                articles: articles.slice(1)
            };
        }
        catch (error) {
            console.error('Lỗi lấy API News:', error.message);
            return { pageTitle: 'Tin Tức (Lỗi tải)', articles: [] };
        }
    }
    async media() {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${WP_API.media}?per_page=12`));
            const recentVideos = data.map((item) => ({
                title: item.title.rendered,
                description: item.alt_text || "No description",
                thumbnail: item.source_url,
                duration: "Image",
                link: item.link
            }));
            return {
                pageTitle: 'Báo Chí Phỏng Vấn - Phan Hữu Hiếu',
                featuredVideo: recentVideos[0] || {},
                recentVideos: recentVideos,
                categories: ["All", "Music Video", "Commercial", "Vlog", "Documentary"]
            };
        }
        catch (error) {
            console.error('Lỗi lấy API Media:', error.message);
            return { pageTitle: 'Media (Lỗi tải)', recentVideos: [] };
        }
    }
    async singleBlog(slug) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${WP_API.posts}?slug=${slug}&_embed`));
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
                    content: wpPost.content.rendered,
                }
            };
        }
        catch (error) {
            console.error('Lỗi lấy bài viết:', error.message);
            return { post: { title: "Lỗi kết nối", content: "Vui lòng thử lại sau." } };
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('news'),
    (0, common_1.Render)('news'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "news", null);
__decorate([
    (0, common_1.Get)('media'),
    (0, common_1.Render)('media'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "media", null);
__decorate([
    (0, common_1.Get)('news/:slug'),
    (0, common_1.Render)('single-blog'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "singleBlog", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        axios_1.HttpService])
], AppController);
//# sourceMappingURL=app.controller.js.map