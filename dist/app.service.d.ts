export declare class AppService {
    getPortfolioData(): {
        profile: {
            name: string;
            role: string;
            description: string;
            avatar: string;
            email: string;
            phone: string;
            socials: {
                name: string;
                url: string;
            }[];
        };
        stats: {
            label: string;
            value: string;
        }[];
        services: {
            title: string;
            desc: string;
        }[];
        projects: {
            title: string;
            category: string;
            year: string;
            image: string;
        }[];
    };
}
