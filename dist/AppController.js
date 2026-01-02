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
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    root() {
        return {
            pageTitle: 'Phan Hữu Hiếu',
            socials: [
                {
                    name: "Facebook",
                    url: "https://facebook.com/your-profile",
                    icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                    color: "hover:text-[#1877F2]"
                },
                {
                    name: "X (Twitter)",
                    url: "https://x.com/your-profile",
                    icon: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z",
                    color: "hover:text-white"
                },
                {
                    name: "Instagram",
                    url: "https://instagram.com/your-profile",
                    icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M16 2H8C4.69 2 2 4.69 2 8v8c0 3.31 2.69 6 6 6h8c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6z",
                    color: "hover:text-[#E4405F]"
                },
                {
                    name: "LinkedIn",
                    url: "https://linkedin.com/in/your-profile",
                    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
                    color: "hover:text-[#0A66C2]"
                },
                {
                    name: "YouTube",
                    url: "https://youtube.com/@your-channel",
                    icon: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27z",
                    color: "hover:text-[#FF0000]"
                }
            ],
            videos: [
                {
                    title: "Behind the Scenes: OMedia Studio",
                    category: "Production",
                    duration: "3:45",
                    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
                    link: "#"
                },
                {
                    title: "Bullet Time Technology Explained",
                    category: "Tech Demo",
                    duration: "2:10",
                    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
                    link: "#"
                },
                {
                    title: "Highlight: Miss Grand Vietnam",
                    category: "Event",
                    duration: "5:00",
                    thumbnail: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop",
                    link: "#"
                },
                {
                    title: "Enterise System Overview",
                    category: "Software",
                    duration: "4:20",
                    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
                    link: "#"
                },
                {
                    title: "Digital Transformation Journey",
                    category: "Talkshow",
                    duration: "15:00",
                    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
                    link: "#"
                },
                {
                    title: "Creative Coding with NestJS",
                    category: "Tutorial",
                    duration: "10:30",
                    thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop",
                    link: "#"
                }
            ],
            mediaPartners: [
                { name: "Afamily", logo: "/image/afamily.png" },
                { name: "Thanh Niên", logo: "/image/bao-chi-thanh-nien.png" },
                { name: "CafeF", logo: "/image/cafef-plf.png" },
                { name: "Báo Mới", logo: "/image/Logo_baomoi.png" },
                { name: "Tiền Phong", logo: "/image/tienphong-logo-2025.png" },
                { name: "VietNam Net", logo: "/image/viet-nam-net.png" },
                { name: "Znews", logo: "/image/znews.png" },
            ]
        };
    }
    news() {
        return {
            pageTitle: 'Tin Tức',
            featuredArticle: {
                title: "The Evolution of Truth in the Age of Artificial Intelligence",
                summary: "As generative models reshape content creation, journalists face a new frontier of verification, ethics, and storytelling authenticity.",
                author: "Sarah Jenkins",
                date: "May 15, 2024",
                readTime: "8 min read",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
                authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
            },
            categories: [
                { name: "All Stories", icon: "check", active: true },
                { name: "Technology", icon: "computer" },
                { name: "Environment", icon: "eco", color: "text-accent-green" },
                { name: "Art & Culture", icon: "palette" },
                { name: "Politics", icon: "public" },
                { name: "Opinion", icon: "forum" }
            ],
            articles: [
                {
                    title: "Is Web3 Still Relevant? A 2024 Retrospective",
                    slug: "is-web3-still-relevant",
                    summary: "Examining the rise, fall, and stabilization of decentralized technologies after the hype cycle has cooled down.",
                    category: "Technology",
                    author: "Alex River",
                    timeAgo: "2 hours ago",
                    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
                    isLarge: true
                },
                {
                    title: "Urban Jungles: Bringing Nature Back to the City",
                    slug: "urban-jungles",
                    summary: "How architecture is evolving to incorporate green spaces into high-density living areas.",
                    category: "Environment",
                    categoryColor: "text-accent-green",
                    timeAgo: "Yesterday",
                    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    title: "The Death of the DSLR",
                    slug: "death-of-dslr",
                    summary: "Mirrorless cameras have officially taken over the professional market. What does this mean for purists?",
                    category: "Photography",
                    categoryColor: "text-purple-400",
                    timeAgo: "2 days ago",
                    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    title: "Social Media is Broken",
                    slug: "social-media-broken",
                    summary: "Why algorithm-driven feeds are destroying genuine human connection and how we can fix it.",
                    category: "Opinion",
                    categoryColor: "text-orange-400",
                    timeAgo: "3 days ago",
                    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    isQuote: true,
                    content: "Journalism can never be silent: that is its greatest virtue and its greatest fault.",
                    author: "Henry Grunwald"
                }
            ]
        };
    }
    media() {
        return {
            pageTitle: 'Báo Chí Phỏng Vấn - Phan Hữu Hiếu',
            featuredVideo: {
                title: "The Art of Silence in Cinema",
                description: "Exploring how the absence of sound creates tension and atmosphere in modern filmmaking. A deep dive into the visual language of quiet moments.",
                thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
                duration: "12:45",
                quality: "4K HDR",
                views: "2.4k Views",
                date: "Oct 24, 2023"
            },
            recentVideos: [
                {
                    title: "Project Alpha",
                    description: "A study in light and motion.",
                    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
                    duration: "03:20"
                },
                {
                    title: "Neon Nights",
                    description: "Urban exploration in 4K.",
                    thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop",
                    duration: "01:15"
                },
                {
                    title: "Fluid Dynamics",
                    description: "Experimental CGI visuals.",
                    thumbnail: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1000&auto=format&fit=crop",
                    duration: "05:42"
                },
                {
                    title: "Cyber City",
                    description: "Future concepts and rendering.",
                    thumbnail: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop",
                    duration: "08:10"
                }
            ],
            trendingVideos: [
                {
                    title: "Mastering Color Grading",
                    meta: "Tutorial • 12k views",
                    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop"
                },
                {
                    title: "Behind The Scenes: Echo",
                    meta: "BTS • 8k views",
                    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop"
                },
                {
                    title: "Lighting Setup Guide",
                    meta: "Education • 5k views",
                    thumbnail: "https://images.unsplash.com/photo-1524713696483-21660318cd61?q=80&w=500&auto=format&fit=crop"
                }
            ],
            categories: ["All", "Music Video", "Commercial", "Vlog", "Documentary"]
        };
    }
    singleBlog(slug) {
        return {
            post: {
                title: "The Future of Digital Art & Experience",
                category: "Design Trends",
                date: "Oct 24, 2023",
                readTime: "5 min read",
                author: "Sarah Jenkins",
                authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
                content: `
          <p>Digital art has transcended traditional boundaries, merging technology with raw creativity to form immersive experiences. In this era of rapid technological advancement, the tools available to artists have expanded exponentially, allowing for the creation of works that were previously unimaginable.</p>
          
          <h2 class="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary rounded-full inline-block"></span>
              The Rise of Glassmorphism
          </h2>
          
          <p class="text-base text-gray-400 leading-loose mb-6">The aesthetic of frosted glass, known as glassmorphism, has taken the digital design world by storm. It creates a sense of depth and hierarchy, allowing users to focus on what matters while maintaining context of what's behind.</p>
          
          <blockquote class="relative my-10 pl-8 border-l-4 border-primary italic">
              <p class="text-xl md:text-2xl font-medium text-white leading-relaxed">"Design is not just what it looks like and feels like. Design is how it works."</p>
              <footer class="mt-4 text-primary font-bold not-italic">— Steve Jobs</footer>
          </blockquote>
          
          <h3 class="text-xl font-bold text-white mt-8 mb-4">Embracing the Dark Mode</h3>
          <p class="text-base text-gray-400 leading-loose mb-0">Dark interfaces are no longer just an option; they are a standard. They save battery, reduce eye strain, and frankly, they look cool.</p>
        `,
                tags: ["DigitalArt", "UI/UX", "WebDesign"]
            }
        };
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
    __metadata("design:returntype", void 0)
], AppController.prototype, "news", null);
__decorate([
    (0, common_1.Get)('media'),
    (0, common_1.Render)('media'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "media", null);
__decorate([
    (0, common_1.Get)('news/:slug'),
    (0, common_1.Render)('single-blog'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "singleBlog", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=AppController.js.map