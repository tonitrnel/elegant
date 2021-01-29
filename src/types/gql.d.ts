/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Bio
// ====================================================

export interface Bio_site_metadata_config_site {
  __typename: "SiteSiteMetadataConfigSite";
  url: string | null;
}

export interface Bio_site_metadata_config_author {
  __typename: "SiteSiteMetadataConfigAuthor";
  location: string | null;
  email: string | null;
  github: string | null;
  comment: string | null;
}

export interface Bio_site_metadata_config {
  __typename: "SiteSiteMetadataConfig";
  site: Bio_site_metadata_config_site | null;
  author: Bio_site_metadata_config_author | null;
}

export interface Bio_site_metadata {
  __typename: "SiteSiteMetadata";
  config: Bio_site_metadata_config | null;
}

export interface Bio_site {
  __typename: "Site";
  metadata: Bio_site_metadata | null;
}

export interface Bio {
  site: Bio_site | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteMetadata
// ====================================================

export interface SiteMetadata_site_metadata_config_metadata {
  __typename: "SiteSiteMetadataConfigMetadata";
  google_search_console: string | null;
}

export interface SiteMetadata_site_metadata_config {
  __typename: "SiteSiteMetadataConfig";
  metadata: SiteMetadata_site_metadata_config_metadata | null;
}

export interface SiteMetadata_site_metadata {
  __typename: "SiteSiteMetadata";
  author: string | null;
  title: string | null;
  language: string | null;
  config: SiteMetadata_site_metadata_config | null;
}

export interface SiteMetadata_site {
  __typename: "Site";
  metadata: SiteMetadata_site_metadata | null;
}

export interface SiteMetadata {
  site: SiteMetadata_site | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEO
// ====================================================

export interface SEO_site_metadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
  description: string | null;
  author: string | null;
  language: string | null;
}

export interface SEO_site {
  __typename: "Site";
  metadata: SEO_site_metadata | null;
}

export interface SEO {
  site: SEO_site | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: List
// ====================================================

export interface List_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface List_site {
  __typename: "Site";
  siteMetadata: List_site_siteMetadata | null;
}

export interface List_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface List_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  date: any | null;
  update: any | null;
  title: string | null;
  tags: (string | null)[] | null;
}

export interface List_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: List_allMarkdownRemark_edges_node_fields | null;
  frontmatter: List_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface List_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: List_allMarkdownRemark_edges_node;
}

export interface List_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: List_allMarkdownRemark_edges[];
}

export interface List {
  site: List_site | null;
  allMarkdownRemark: List_allMarkdownRemark;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Post
// ====================================================

export interface Post_markdownRemark_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
  tags: (string | null)[] | null;
  category: string | null;
  date: any | null;
  update: any | null;
  excerpt: string | null;
}

export interface Post_markdownRemark {
  __typename: "MarkdownRemark";
  id: string;
  html: string | null;
  excerpt: string | null;
  frontmatter: Post_markdownRemark_frontmatter | null;
}

export interface Post {
  markdownRemark: Post_markdownRemark | null;
}

export interface PostVariables {
  slug: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
