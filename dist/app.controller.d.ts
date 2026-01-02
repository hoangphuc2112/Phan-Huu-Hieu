import { HttpService } from '@nestjs/axios';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly httpService;
    constructor(appService: AppService, httpService: HttpService);
    root(): {
        pageTitle: string;
        socials: {
            name: string;
            url: string;
            icon: string;
            color: string;
        }[];
    };
    news(): Promise<{
        pageTitle: string;
        featuredArticle: any;
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
    } | {
        pageTitle: string;
        articles: any[];
        featuredArticle?: undefined;
        categories?: undefined;
    }>;
    media(): Promise<{
        pageTitle: string;
        featuredVideo: any;
        recentVideos: any;
        categories: string[];
    } | {
        pageTitle: string;
        recentVideos: any[];
        featuredVideo?: undefined;
        categories?: undefined;
    }>;
    singleBlog(slug: string): Promise<{
        post: {
            title: string;
            content: string;
            category?: undefined;
            date?: undefined;
            readTime?: undefined;
            author?: undefined;
            authorAvatar?: undefined;
            image?: undefined;
        };
    } | {
        post: {
            title: any;
            category: string;
            date: string;
            readTime: string;
            author: any;
            authorAvatar: any;
            image: any;
            content: any;
        };
    }>;
}
