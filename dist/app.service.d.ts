import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private readonly httpService;
    private readonly GRAPHQL_API;
    constructor(httpService: HttpService);
    getPosts(): Promise<any>;
    getPostBySlug(slug: string): Promise<any>;
}
