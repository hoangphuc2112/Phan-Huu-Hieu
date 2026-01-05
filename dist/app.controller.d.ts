import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    root(): {
        pageTitle: string;
        socials: {
            name: string;
            url: string;
            icon: string;
            color: string;
        }[];
        videos: {
            title: string;
            category: string;
            duration: string;
            thumbnail: string;
            link: string;
        }[];
        mediaPartners: {
            name: string;
            logo: string;
        }[];
    };
    news(): Promise<{
        pageTitle: string;
        featuredArticle: {
            title: string;
            summary: string;
            author: string;
            date: string;
            readTime: string;
            image: string;
            authorAvatar: string;
        };
        categories: ({
            name: string;
            icon: string;
            active: boolean;
        } | {
            name: string;
            icon: string;
            active?: undefined;
        })[];
        articles: any;
    }>;
    media(): {
        pageTitle: string;
        featuredVideo: {
            title: string;
            description: string;
            thumbnail: string;
            duration: string;
            quality: string;
            views: string;
            date: string;
        };
        recentVideos: {
            title: string;
            description: string;
            thumbnail: string;
            duration: string;
        }[];
        trendingVideos: {
            title: string;
            meta: string;
            thumbnail: string;
        }[];
        categories: string[];
    };
    singleBlog(slug: string): Promise<{
        post: {
            title: any;
            category: any;
            date: string;
            readTime: string;
            author: any;
            authorAvatar: any;
            image: any;
            content: any;
            tags: string[];
        };
    }>;
}
