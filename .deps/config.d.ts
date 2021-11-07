interface Site {
    title: string;
    url: string;
    language: string;
    description: string;
    keywords: string[];
}
interface Author {
    name: string;
    comment: string;
    avatar: string;
    email: string;
    github: string;
    location: string;
}
interface Menu {
    name: string;
    path: string;
}
interface Metadata {
    google_analytics: string;
    google_search_console: string;
    google_adsense_slot: string;
    google_analytics_client: string;
}
interface Configure {
    directory: string;
    site: Site;
    author: Author;
    metadata: Metadata;
    menus: {
        [id in string]: Menu;
    };
    parse: {
        ignore_dirs: string[];
    };
    pagination: {
        limit: number;
    };
}
export declare const config: Configure;
export {};
