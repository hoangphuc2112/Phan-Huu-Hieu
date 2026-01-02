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
    news(): {
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
            color?: undefined;
        } | {
            name: string;
            icon: string;
            active?: undefined;
            color?: undefined;
        } | {
            name: string;
            icon: string;
            color: string;
            active?: undefined;
        })[];
        articles: ({
            title: string;
            slug: string;
            summary: string;
            category: string;
            author: string;
            timeAgo: string;
            image: string;
            isLarge: boolean;
            categoryColor?: undefined;
            isQuote?: undefined;
            content?: undefined;
        } | {
            title: string;
            slug: string;
            summary: string;
            category: string;
            categoryColor: string;
            timeAgo: string;
            image: string;
            author?: undefined;
            isLarge?: undefined;
            isQuote?: undefined;
            content?: undefined;
        } | {
            isQuote: boolean;
            content: string;
            author: string;
            title?: undefined;
            slug?: undefined;
            summary?: undefined;
            category?: undefined;
            timeAgo?: undefined;
            image?: undefined;
            isLarge?: undefined;
            categoryColor?: undefined;
        })[];
    };
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
    singleBlog(slug: string): {
        post: {
            title: string;
            category: string;
            date: string;
            readTime: string;
            author: string;
            authorAvatar: string;
            image: string;
            content: string;
            tags: string[];
        };
    };
}
