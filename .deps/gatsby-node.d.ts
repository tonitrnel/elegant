import { CreateNodeArgs, GatsbyNode, Node } from 'gatsby';
export declare const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'];
interface MarkdownRemarkFrontmatter extends Node {
    frontmatter: {
        title: string;
        template: string;
        date: Date | string;
        status: 'PUBLISH' | 'DRAFT' | 'INVALID' | 'publish' | 'draft' | 'invalid';
        tags: string[] | string;
        excerpt: string;
        update: Date | string;
        keywords: string[];
        category: string;
        permalink: string;
        thumbnail: string;
        modified: Date | string;
        id: string;
    };
}
export declare const onCreateNode: ({ node, actions, getNode, reporter, }: CreateNodeArgs<MarkdownRemarkFrontmatter>) => undefined;
export declare const onCreatePage: GatsbyNode['onCreatePage'];
export declare const createPages: GatsbyNode['createPages'];
export declare const createSchemaCustomization: GatsbyNode['createSchemaCustomization'];
export {};
