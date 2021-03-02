export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata: SiteSiteMetadata;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = Node & {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  siteUrl: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  navs: Array<SiteNavigationMap>;
  config: RawConfigData;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
  lastmod?: Maybe<Scalars['Date']>;
  prev?: Maybe<SitePageContextPrev>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
};

export type SitePageContextPrev = {
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED',
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE',
}

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
}

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFields = Node & {
  ready: Scalars['Boolean'];
  slug: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteNavigationMap = {
  path: Scalars['String'];
  name: Scalars['String'];
};

export type RawSiteConfig = {
  title: Scalars['String'];
  url: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Scalars['String']>>;
  pagination_limit: Scalars['Int'];
  parse_ignore_dirs?: Maybe<Array<Scalars['String']>>;
  main_color?: Maybe<Scalars['String']>;
};

export type RawAuthorConfig = {
  name: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
};

export type RawMetadataConfig = {
  google_analytics?: Maybe<Scalars['String']>;
  google_search_console?: Maybe<Scalars['String']>;
  google_adsense_slot?: Maybe<Scalars['String']>;
  google_adsense_client?: Maybe<Scalars['String']>;
};

export type RawConfigData = {
  site: RawSiteConfig;
  author: RawAuthorConfig;
  navs: Array<SiteNavigationMap>;
  metadata: RawMetadataConfig;
};

export enum PublishStatus {
  Publish = 'PUBLISH',
  Draft = 'DRAFT',
  Invalid = 'INVALID',
}

export type MarkdownRemarkFrontmatter = Node & {
  title: Scalars['String'];
  template: Scalars['String'];
  date: Scalars['Date'];
  status: PublishStatus;
  tags: Array<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  update: Scalars['Date'];
  category: Scalars['String'];
  permalink?: Maybe<Scalars['String']>;
  _0?: Maybe<Scalars['String']>;
  _1?: Maybe<Scalars['String']>;
  _2?: Maybe<Scalars['String']>;
  _3?: Maybe<Scalars['String']>;
  _4?: Maybe<Scalars['String']>;
  _5?: Maybe<Scalars['String']>;
  _6?: Maybe<Scalars['String']>;
  _7?: Maybe<Scalars['String']>;
  _8?: Maybe<Scalars['String']>;
  _9?: Maybe<Scalars['String']>;
  _10?: Maybe<Scalars['String']>;
  _11?: Maybe<Scalars['String']>;
  _12?: Maybe<Scalars['String']>;
  _13?: Maybe<Scalars['String']>;
  _14?: Maybe<Scalars['String']>;
  _15?: Maybe<Scalars['String']>;
  _16?: Maybe<Scalars['String']>;
  _17?: Maybe<Scalars['String']>;
  _18?: Maybe<Scalars['String']>;
  _19?: Maybe<Scalars['String']>;
  _20?: Maybe<Scalars['String']>;
  _21?: Maybe<Scalars['String']>;
  _22?: Maybe<Scalars['String']>;
  _23?: Maybe<Scalars['String']>;
  _24?: Maybe<Scalars['String']>;
  _25?: Maybe<Scalars['String']>;
  _26?: Maybe<Scalars['String']>;
  _27?: Maybe<Scalars['String']>;
  _28?: Maybe<Scalars['String']>;
  _29?: Maybe<Scalars['String']>;
  _30?: Maybe<Scalars['String']>;
  _31?: Maybe<Scalars['String']>;
  _32?: Maybe<Scalars['String']>;
  _33?: Maybe<Scalars['String']>;
  _34?: Maybe<Scalars['String']>;
  _35?: Maybe<Scalars['String']>;
  _36?: Maybe<Scalars['String']>;
  _37?: Maybe<Scalars['String']>;
  _38?: Maybe<Scalars['String']>;
  _39?: Maybe<Scalars['String']>;
  _40?: Maybe<Scalars['String']>;
  _41?: Maybe<Scalars['String']>;
  _42?: Maybe<Scalars['String']>;
  _43?: Maybe<Scalars['String']>;
  _44?: Maybe<Scalars['String']>;
  _45?: Maybe<Scalars['String']>;
  _46?: Maybe<Scalars['String']>;
  _47?: Maybe<Scalars['String']>;
  _48?: Maybe<Scalars['String']>;
  _49?: Maybe<Scalars['String']>;
  _50?: Maybe<Scalars['String']>;
  _51?: Maybe<Scalars['String']>;
  _52?: Maybe<Scalars['String']>;
  _53?: Maybe<Scalars['String']>;
  _54?: Maybe<Scalars['String']>;
  _55?: Maybe<Scalars['String']>;
  _56?: Maybe<Scalars['String']>;
  _57?: Maybe<Scalars['String']>;
  _58?: Maybe<Scalars['String']>;
  _59?: Maybe<Scalars['String']>;
  _60?: Maybe<Scalars['String']>;
  _61?: Maybe<Scalars['String']>;
  _62?: Maybe<Scalars['String']>;
  _63?: Maybe<Scalars['String']>;
  _64?: Maybe<Scalars['String']>;
  _65?: Maybe<Scalars['String']>;
  _66?: Maybe<Scalars['String']>;
  _67?: Maybe<Scalars['String']>;
  _68?: Maybe<Scalars['String']>;
  _69?: Maybe<Scalars['String']>;
  _70?: Maybe<Scalars['String']>;
  _71?: Maybe<Scalars['String']>;
  _72?: Maybe<Scalars['String']>;
  _73?: Maybe<Scalars['String']>;
  _74?: Maybe<Scalars['String']>;
  _75?: Maybe<Scalars['String']>;
  _76?: Maybe<Scalars['String']>;
  _77?: Maybe<Scalars['String']>;
  _78?: Maybe<Scalars['String']>;
  _79?: Maybe<Scalars['String']>;
  _80?: Maybe<Scalars['String']>;
  _81?: Maybe<Scalars['String']>;
  _82?: Maybe<Scalars['String']>;
  _83?: Maybe<Scalars['String']>;
  _84?: Maybe<Scalars['String']>;
  _85?: Maybe<Scalars['String']>;
  _86?: Maybe<Scalars['String']>;
  _87?: Maybe<Scalars['String']>;
  _88?: Maybe<Scalars['String']>;
  _89?: Maybe<Scalars['String']>;
  _90?: Maybe<Scalars['String']>;
  _91?: Maybe<Scalars['String']>;
  _92?: Maybe<Scalars['String']>;
  _93?: Maybe<Scalars['String']>;
  _94?: Maybe<Scalars['String']>;
  _95?: Maybe<Scalars['String']>;
  _96?: Maybe<Scalars['String']>;
  _97?: Maybe<Scalars['String']>;
  _98?: Maybe<Scalars['String']>;
  _99?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<File>;
  _?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterUpdateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  pageTransitionDelay?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  ignore?: Maybe<Array<Maybe<Scalars['String']>>>;
  maxWidth?: Maybe<Scalars['Int']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  classPrefix?: Maybe<Scalars['String']>;
  showLineNumbers?: Maybe<Scalars['Boolean']>;
  aliases?: Maybe<SitePluginPluginOptionsAliases>;
  strict?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  display?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  crossOrigin?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  cacheDigest?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
  host?: Maybe<Scalars['String']>;
  sitemap?: Maybe<Scalars['String']>;
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsPolicy>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  classPrefix?: Maybe<Scalars['String']>;
  showLineNumbers?: Maybe<Scalars['Boolean']>;
  aliases?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsAliases>;
  strict?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsAliases = {
  react?: Maybe<Scalars['String']>;
  javascriptreact?: Maybe<Scalars['String']>;
  javascript_react?: Maybe<Scalars['String']>;
  typescriptreact?: Maybe<Scalars['String']>;
  typescript_react?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAliases = {
  react?: Maybe<Scalars['String']>;
  javascriptreact?: Maybe<Scalars['String']>;
  javascript_react?: Maybe<Scalars['String']>;
  typescriptreact?: Maybe<Scalars['String']>;
  typescript_react?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFeeds = {
  query?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  allow?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteSiteMetadata?: Maybe<SiteSiteMetadata>;
  allSiteSiteMetadata: SiteSiteMetadataConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  markdownRemarkFields?: Maybe<MarkdownRemarkFields>;
  allMarkdownRemarkFields: MarkdownRemarkFieldsConnection;
  markdownRemarkFrontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  allMarkdownRemarkFrontmatter: MarkdownRemarkFrontmatterConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteSiteMetadataArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  navs?: Maybe<SiteNavigationMapFilterListInput>;
  config?: Maybe<RawConfigDataFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteSiteMetadataArgs = {
  filter?: Maybe<SiteSiteMetadataFilterInput>;
  sort?: Maybe<SiteSiteMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkFieldsArgs = {
  ready?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkFieldsArgs = {
  filter?: Maybe<MarkdownRemarkFieldsFilterInput>;
  sort?: Maybe<MarkdownRemarkFieldsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkFrontmatterArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<PublishStatusQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  update?: Maybe<DateQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  permalink?: Maybe<StringQueryOperatorInput>;
  _0?: Maybe<StringQueryOperatorInput>;
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  _7?: Maybe<StringQueryOperatorInput>;
  _8?: Maybe<StringQueryOperatorInput>;
  _9?: Maybe<StringQueryOperatorInput>;
  _10?: Maybe<StringQueryOperatorInput>;
  _11?: Maybe<StringQueryOperatorInput>;
  _12?: Maybe<StringQueryOperatorInput>;
  _13?: Maybe<StringQueryOperatorInput>;
  _14?: Maybe<StringQueryOperatorInput>;
  _15?: Maybe<StringQueryOperatorInput>;
  _16?: Maybe<StringQueryOperatorInput>;
  _17?: Maybe<StringQueryOperatorInput>;
  _18?: Maybe<StringQueryOperatorInput>;
  _19?: Maybe<StringQueryOperatorInput>;
  _20?: Maybe<StringQueryOperatorInput>;
  _21?: Maybe<StringQueryOperatorInput>;
  _22?: Maybe<StringQueryOperatorInput>;
  _23?: Maybe<StringQueryOperatorInput>;
  _24?: Maybe<StringQueryOperatorInput>;
  _25?: Maybe<StringQueryOperatorInput>;
  _26?: Maybe<StringQueryOperatorInput>;
  _27?: Maybe<StringQueryOperatorInput>;
  _28?: Maybe<StringQueryOperatorInput>;
  _29?: Maybe<StringQueryOperatorInput>;
  _30?: Maybe<StringQueryOperatorInput>;
  _31?: Maybe<StringQueryOperatorInput>;
  _32?: Maybe<StringQueryOperatorInput>;
  _33?: Maybe<StringQueryOperatorInput>;
  _34?: Maybe<StringQueryOperatorInput>;
  _35?: Maybe<StringQueryOperatorInput>;
  _36?: Maybe<StringQueryOperatorInput>;
  _37?: Maybe<StringQueryOperatorInput>;
  _38?: Maybe<StringQueryOperatorInput>;
  _39?: Maybe<StringQueryOperatorInput>;
  _40?: Maybe<StringQueryOperatorInput>;
  _41?: Maybe<StringQueryOperatorInput>;
  _42?: Maybe<StringQueryOperatorInput>;
  _43?: Maybe<StringQueryOperatorInput>;
  _44?: Maybe<StringQueryOperatorInput>;
  _45?: Maybe<StringQueryOperatorInput>;
  _46?: Maybe<StringQueryOperatorInput>;
  _47?: Maybe<StringQueryOperatorInput>;
  _48?: Maybe<StringQueryOperatorInput>;
  _49?: Maybe<StringQueryOperatorInput>;
  _50?: Maybe<StringQueryOperatorInput>;
  _51?: Maybe<StringQueryOperatorInput>;
  _52?: Maybe<StringQueryOperatorInput>;
  _53?: Maybe<StringQueryOperatorInput>;
  _54?: Maybe<StringQueryOperatorInput>;
  _55?: Maybe<StringQueryOperatorInput>;
  _56?: Maybe<StringQueryOperatorInput>;
  _57?: Maybe<StringQueryOperatorInput>;
  _58?: Maybe<StringQueryOperatorInput>;
  _59?: Maybe<StringQueryOperatorInput>;
  _60?: Maybe<StringQueryOperatorInput>;
  _61?: Maybe<StringQueryOperatorInput>;
  _62?: Maybe<StringQueryOperatorInput>;
  _63?: Maybe<StringQueryOperatorInput>;
  _64?: Maybe<StringQueryOperatorInput>;
  _65?: Maybe<StringQueryOperatorInput>;
  _66?: Maybe<StringQueryOperatorInput>;
  _67?: Maybe<StringQueryOperatorInput>;
  _68?: Maybe<StringQueryOperatorInput>;
  _69?: Maybe<StringQueryOperatorInput>;
  _70?: Maybe<StringQueryOperatorInput>;
  _71?: Maybe<StringQueryOperatorInput>;
  _72?: Maybe<StringQueryOperatorInput>;
  _73?: Maybe<StringQueryOperatorInput>;
  _74?: Maybe<StringQueryOperatorInput>;
  _75?: Maybe<StringQueryOperatorInput>;
  _76?: Maybe<StringQueryOperatorInput>;
  _77?: Maybe<StringQueryOperatorInput>;
  _78?: Maybe<StringQueryOperatorInput>;
  _79?: Maybe<StringQueryOperatorInput>;
  _80?: Maybe<StringQueryOperatorInput>;
  _81?: Maybe<StringQueryOperatorInput>;
  _82?: Maybe<StringQueryOperatorInput>;
  _83?: Maybe<StringQueryOperatorInput>;
  _84?: Maybe<StringQueryOperatorInput>;
  _85?: Maybe<StringQueryOperatorInput>;
  _86?: Maybe<StringQueryOperatorInput>;
  _87?: Maybe<StringQueryOperatorInput>;
  _88?: Maybe<StringQueryOperatorInput>;
  _89?: Maybe<StringQueryOperatorInput>;
  _90?: Maybe<StringQueryOperatorInput>;
  _91?: Maybe<StringQueryOperatorInput>;
  _92?: Maybe<StringQueryOperatorInput>;
  _93?: Maybe<StringQueryOperatorInput>;
  _94?: Maybe<StringQueryOperatorInput>;
  _95?: Maybe<StringQueryOperatorInput>;
  _96?: Maybe<StringQueryOperatorInput>;
  _97?: Maybe<StringQueryOperatorInput>;
  _98?: Maybe<StringQueryOperatorInput>;
  _99?: Maybe<StringQueryOperatorInput>;
  thumbnail?: Maybe<FileFilterInput>;
  _?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkFrontmatterArgs = {
  filter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  sort?: Maybe<MarkdownRemarkFrontmatterSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<PublishStatusQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  update?: Maybe<DateQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  permalink?: Maybe<StringQueryOperatorInput>;
  _0?: Maybe<StringQueryOperatorInput>;
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  _7?: Maybe<StringQueryOperatorInput>;
  _8?: Maybe<StringQueryOperatorInput>;
  _9?: Maybe<StringQueryOperatorInput>;
  _10?: Maybe<StringQueryOperatorInput>;
  _11?: Maybe<StringQueryOperatorInput>;
  _12?: Maybe<StringQueryOperatorInput>;
  _13?: Maybe<StringQueryOperatorInput>;
  _14?: Maybe<StringQueryOperatorInput>;
  _15?: Maybe<StringQueryOperatorInput>;
  _16?: Maybe<StringQueryOperatorInput>;
  _17?: Maybe<StringQueryOperatorInput>;
  _18?: Maybe<StringQueryOperatorInput>;
  _19?: Maybe<StringQueryOperatorInput>;
  _20?: Maybe<StringQueryOperatorInput>;
  _21?: Maybe<StringQueryOperatorInput>;
  _22?: Maybe<StringQueryOperatorInput>;
  _23?: Maybe<StringQueryOperatorInput>;
  _24?: Maybe<StringQueryOperatorInput>;
  _25?: Maybe<StringQueryOperatorInput>;
  _26?: Maybe<StringQueryOperatorInput>;
  _27?: Maybe<StringQueryOperatorInput>;
  _28?: Maybe<StringQueryOperatorInput>;
  _29?: Maybe<StringQueryOperatorInput>;
  _30?: Maybe<StringQueryOperatorInput>;
  _31?: Maybe<StringQueryOperatorInput>;
  _32?: Maybe<StringQueryOperatorInput>;
  _33?: Maybe<StringQueryOperatorInput>;
  _34?: Maybe<StringQueryOperatorInput>;
  _35?: Maybe<StringQueryOperatorInput>;
  _36?: Maybe<StringQueryOperatorInput>;
  _37?: Maybe<StringQueryOperatorInput>;
  _38?: Maybe<StringQueryOperatorInput>;
  _39?: Maybe<StringQueryOperatorInput>;
  _40?: Maybe<StringQueryOperatorInput>;
  _41?: Maybe<StringQueryOperatorInput>;
  _42?: Maybe<StringQueryOperatorInput>;
  _43?: Maybe<StringQueryOperatorInput>;
  _44?: Maybe<StringQueryOperatorInput>;
  _45?: Maybe<StringQueryOperatorInput>;
  _46?: Maybe<StringQueryOperatorInput>;
  _47?: Maybe<StringQueryOperatorInput>;
  _48?: Maybe<StringQueryOperatorInput>;
  _49?: Maybe<StringQueryOperatorInput>;
  _50?: Maybe<StringQueryOperatorInput>;
  _51?: Maybe<StringQueryOperatorInput>;
  _52?: Maybe<StringQueryOperatorInput>;
  _53?: Maybe<StringQueryOperatorInput>;
  _54?: Maybe<StringQueryOperatorInput>;
  _55?: Maybe<StringQueryOperatorInput>;
  _56?: Maybe<StringQueryOperatorInput>;
  _57?: Maybe<StringQueryOperatorInput>;
  _58?: Maybe<StringQueryOperatorInput>;
  _59?: Maybe<StringQueryOperatorInput>;
  _60?: Maybe<StringQueryOperatorInput>;
  _61?: Maybe<StringQueryOperatorInput>;
  _62?: Maybe<StringQueryOperatorInput>;
  _63?: Maybe<StringQueryOperatorInput>;
  _64?: Maybe<StringQueryOperatorInput>;
  _65?: Maybe<StringQueryOperatorInput>;
  _66?: Maybe<StringQueryOperatorInput>;
  _67?: Maybe<StringQueryOperatorInput>;
  _68?: Maybe<StringQueryOperatorInput>;
  _69?: Maybe<StringQueryOperatorInput>;
  _70?: Maybe<StringQueryOperatorInput>;
  _71?: Maybe<StringQueryOperatorInput>;
  _72?: Maybe<StringQueryOperatorInput>;
  _73?: Maybe<StringQueryOperatorInput>;
  _74?: Maybe<StringQueryOperatorInput>;
  _75?: Maybe<StringQueryOperatorInput>;
  _76?: Maybe<StringQueryOperatorInput>;
  _77?: Maybe<StringQueryOperatorInput>;
  _78?: Maybe<StringQueryOperatorInput>;
  _79?: Maybe<StringQueryOperatorInput>;
  _80?: Maybe<StringQueryOperatorInput>;
  _81?: Maybe<StringQueryOperatorInput>;
  _82?: Maybe<StringQueryOperatorInput>;
  _83?: Maybe<StringQueryOperatorInput>;
  _84?: Maybe<StringQueryOperatorInput>;
  _85?: Maybe<StringQueryOperatorInput>;
  _86?: Maybe<StringQueryOperatorInput>;
  _87?: Maybe<StringQueryOperatorInput>;
  _88?: Maybe<StringQueryOperatorInput>;
  _89?: Maybe<StringQueryOperatorInput>;
  _90?: Maybe<StringQueryOperatorInput>;
  _91?: Maybe<StringQueryOperatorInput>;
  _92?: Maybe<StringQueryOperatorInput>;
  _93?: Maybe<StringQueryOperatorInput>;
  _94?: Maybe<StringQueryOperatorInput>;
  _95?: Maybe<StringQueryOperatorInput>;
  _96?: Maybe<StringQueryOperatorInput>;
  _97?: Maybe<StringQueryOperatorInput>;
  _98?: Maybe<StringQueryOperatorInput>;
  _99?: Maybe<StringQueryOperatorInput>;
  thumbnail?: Maybe<FileFilterInput>;
  _?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PublishStatusQueryOperatorInput = {
  eq?: Maybe<PublishStatus>;
  ne?: Maybe<PublishStatus>;
  in?: Maybe<Array<Maybe<PublishStatus>>>;
  nin?: Maybe<Array<Maybe<PublishStatus>>>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFieldsFilterInput = {
  ready?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkFrontmatterTemplate = 'childrenMarkdownRemark___frontmatter___template',
  ChildrenMarkdownRemarkFrontmatterDate = 'childrenMarkdownRemark___frontmatter___date',
  ChildrenMarkdownRemarkFrontmatterStatus = 'childrenMarkdownRemark___frontmatter___status',
  ChildrenMarkdownRemarkFrontmatterTags = 'childrenMarkdownRemark___frontmatter___tags',
  ChildrenMarkdownRemarkFrontmatterExcerpt = 'childrenMarkdownRemark___frontmatter___excerpt',
  ChildrenMarkdownRemarkFrontmatterUpdate = 'childrenMarkdownRemark___frontmatter___update',
  ChildrenMarkdownRemarkFrontmatterCategory = 'childrenMarkdownRemark___frontmatter___category',
  ChildrenMarkdownRemarkFrontmatterPermalink = 'childrenMarkdownRemark___frontmatter___permalink',
  ChildrenMarkdownRemarkFrontmatter_0 = 'childrenMarkdownRemark___frontmatter____0',
  ChildrenMarkdownRemarkFrontmatter_1 = 'childrenMarkdownRemark___frontmatter____1',
  ChildrenMarkdownRemarkFrontmatter_2 = 'childrenMarkdownRemark___frontmatter____2',
  ChildrenMarkdownRemarkFrontmatter_3 = 'childrenMarkdownRemark___frontmatter____3',
  ChildrenMarkdownRemarkFrontmatter_4 = 'childrenMarkdownRemark___frontmatter____4',
  ChildrenMarkdownRemarkFrontmatter_5 = 'childrenMarkdownRemark___frontmatter____5',
  ChildrenMarkdownRemarkFrontmatter_6 = 'childrenMarkdownRemark___frontmatter____6',
  ChildrenMarkdownRemarkFrontmatter_7 = 'childrenMarkdownRemark___frontmatter____7',
  ChildrenMarkdownRemarkFrontmatter_8 = 'childrenMarkdownRemark___frontmatter____8',
  ChildrenMarkdownRemarkFrontmatter_9 = 'childrenMarkdownRemark___frontmatter____9',
  ChildrenMarkdownRemarkFrontmatter_10 = 'childrenMarkdownRemark___frontmatter____10',
  ChildrenMarkdownRemarkFrontmatter_11 = 'childrenMarkdownRemark___frontmatter____11',
  ChildrenMarkdownRemarkFrontmatter_12 = 'childrenMarkdownRemark___frontmatter____12',
  ChildrenMarkdownRemarkFrontmatter_13 = 'childrenMarkdownRemark___frontmatter____13',
  ChildrenMarkdownRemarkFrontmatter_14 = 'childrenMarkdownRemark___frontmatter____14',
  ChildrenMarkdownRemarkFrontmatter_15 = 'childrenMarkdownRemark___frontmatter____15',
  ChildrenMarkdownRemarkFrontmatter_16 = 'childrenMarkdownRemark___frontmatter____16',
  ChildrenMarkdownRemarkFrontmatter_17 = 'childrenMarkdownRemark___frontmatter____17',
  ChildrenMarkdownRemarkFrontmatter_18 = 'childrenMarkdownRemark___frontmatter____18',
  ChildrenMarkdownRemarkFrontmatter_19 = 'childrenMarkdownRemark___frontmatter____19',
  ChildrenMarkdownRemarkFrontmatter_20 = 'childrenMarkdownRemark___frontmatter____20',
  ChildrenMarkdownRemarkFrontmatter_21 = 'childrenMarkdownRemark___frontmatter____21',
  ChildrenMarkdownRemarkFrontmatter_22 = 'childrenMarkdownRemark___frontmatter____22',
  ChildrenMarkdownRemarkFrontmatter_23 = 'childrenMarkdownRemark___frontmatter____23',
  ChildrenMarkdownRemarkFrontmatter_24 = 'childrenMarkdownRemark___frontmatter____24',
  ChildrenMarkdownRemarkFrontmatter_25 = 'childrenMarkdownRemark___frontmatter____25',
  ChildrenMarkdownRemarkFrontmatter_26 = 'childrenMarkdownRemark___frontmatter____26',
  ChildrenMarkdownRemarkFrontmatter_27 = 'childrenMarkdownRemark___frontmatter____27',
  ChildrenMarkdownRemarkFrontmatter_28 = 'childrenMarkdownRemark___frontmatter____28',
  ChildrenMarkdownRemarkFrontmatter_29 = 'childrenMarkdownRemark___frontmatter____29',
  ChildrenMarkdownRemarkFrontmatter_30 = 'childrenMarkdownRemark___frontmatter____30',
  ChildrenMarkdownRemarkFrontmatter_31 = 'childrenMarkdownRemark___frontmatter____31',
  ChildrenMarkdownRemarkFrontmatter_32 = 'childrenMarkdownRemark___frontmatter____32',
  ChildrenMarkdownRemarkFrontmatter_33 = 'childrenMarkdownRemark___frontmatter____33',
  ChildrenMarkdownRemarkFrontmatter_34 = 'childrenMarkdownRemark___frontmatter____34',
  ChildrenMarkdownRemarkFrontmatter_35 = 'childrenMarkdownRemark___frontmatter____35',
  ChildrenMarkdownRemarkFrontmatter_36 = 'childrenMarkdownRemark___frontmatter____36',
  ChildrenMarkdownRemarkFrontmatter_37 = 'childrenMarkdownRemark___frontmatter____37',
  ChildrenMarkdownRemarkFrontmatter_38 = 'childrenMarkdownRemark___frontmatter____38',
  ChildrenMarkdownRemarkFrontmatter_39 = 'childrenMarkdownRemark___frontmatter____39',
  ChildrenMarkdownRemarkFrontmatter_40 = 'childrenMarkdownRemark___frontmatter____40',
  ChildrenMarkdownRemarkFrontmatter_41 = 'childrenMarkdownRemark___frontmatter____41',
  ChildrenMarkdownRemarkFrontmatter_42 = 'childrenMarkdownRemark___frontmatter____42',
  ChildrenMarkdownRemarkFrontmatter_43 = 'childrenMarkdownRemark___frontmatter____43',
  ChildrenMarkdownRemarkFrontmatter_44 = 'childrenMarkdownRemark___frontmatter____44',
  ChildrenMarkdownRemarkFrontmatter_45 = 'childrenMarkdownRemark___frontmatter____45',
  ChildrenMarkdownRemarkFrontmatter_46 = 'childrenMarkdownRemark___frontmatter____46',
  ChildrenMarkdownRemarkFrontmatter_47 = 'childrenMarkdownRemark___frontmatter____47',
  ChildrenMarkdownRemarkFrontmatter_48 = 'childrenMarkdownRemark___frontmatter____48',
  ChildrenMarkdownRemarkFrontmatter_49 = 'childrenMarkdownRemark___frontmatter____49',
  ChildrenMarkdownRemarkFrontmatter_50 = 'childrenMarkdownRemark___frontmatter____50',
  ChildrenMarkdownRemarkFrontmatter_51 = 'childrenMarkdownRemark___frontmatter____51',
  ChildrenMarkdownRemarkFrontmatter_52 = 'childrenMarkdownRemark___frontmatter____52',
  ChildrenMarkdownRemarkFrontmatter_53 = 'childrenMarkdownRemark___frontmatter____53',
  ChildrenMarkdownRemarkFrontmatter_54 = 'childrenMarkdownRemark___frontmatter____54',
  ChildrenMarkdownRemarkFrontmatter_55 = 'childrenMarkdownRemark___frontmatter____55',
  ChildrenMarkdownRemarkFrontmatter_56 = 'childrenMarkdownRemark___frontmatter____56',
  ChildrenMarkdownRemarkFrontmatter_57 = 'childrenMarkdownRemark___frontmatter____57',
  ChildrenMarkdownRemarkFrontmatter_58 = 'childrenMarkdownRemark___frontmatter____58',
  ChildrenMarkdownRemarkFrontmatter_59 = 'childrenMarkdownRemark___frontmatter____59',
  ChildrenMarkdownRemarkFrontmatter_60 = 'childrenMarkdownRemark___frontmatter____60',
  ChildrenMarkdownRemarkFrontmatter_61 = 'childrenMarkdownRemark___frontmatter____61',
  ChildrenMarkdownRemarkFrontmatter_62 = 'childrenMarkdownRemark___frontmatter____62',
  ChildrenMarkdownRemarkFrontmatter_63 = 'childrenMarkdownRemark___frontmatter____63',
  ChildrenMarkdownRemarkFrontmatter_64 = 'childrenMarkdownRemark___frontmatter____64',
  ChildrenMarkdownRemarkFrontmatter_65 = 'childrenMarkdownRemark___frontmatter____65',
  ChildrenMarkdownRemarkFrontmatter_66 = 'childrenMarkdownRemark___frontmatter____66',
  ChildrenMarkdownRemarkFrontmatter_67 = 'childrenMarkdownRemark___frontmatter____67',
  ChildrenMarkdownRemarkFrontmatter_68 = 'childrenMarkdownRemark___frontmatter____68',
  ChildrenMarkdownRemarkFrontmatter_69 = 'childrenMarkdownRemark___frontmatter____69',
  ChildrenMarkdownRemarkFrontmatter_70 = 'childrenMarkdownRemark___frontmatter____70',
  ChildrenMarkdownRemarkFrontmatter_71 = 'childrenMarkdownRemark___frontmatter____71',
  ChildrenMarkdownRemarkFrontmatter_72 = 'childrenMarkdownRemark___frontmatter____72',
  ChildrenMarkdownRemarkFrontmatter_73 = 'childrenMarkdownRemark___frontmatter____73',
  ChildrenMarkdownRemarkFrontmatter_74 = 'childrenMarkdownRemark___frontmatter____74',
  ChildrenMarkdownRemarkFrontmatter_75 = 'childrenMarkdownRemark___frontmatter____75',
  ChildrenMarkdownRemarkFrontmatter_76 = 'childrenMarkdownRemark___frontmatter____76',
  ChildrenMarkdownRemarkFrontmatter_77 = 'childrenMarkdownRemark___frontmatter____77',
  ChildrenMarkdownRemarkFrontmatter_78 = 'childrenMarkdownRemark___frontmatter____78',
  ChildrenMarkdownRemarkFrontmatter_79 = 'childrenMarkdownRemark___frontmatter____79',
  ChildrenMarkdownRemarkFrontmatter_80 = 'childrenMarkdownRemark___frontmatter____80',
  ChildrenMarkdownRemarkFrontmatter_81 = 'childrenMarkdownRemark___frontmatter____81',
  ChildrenMarkdownRemarkFrontmatter_82 = 'childrenMarkdownRemark___frontmatter____82',
  ChildrenMarkdownRemarkFrontmatter_83 = 'childrenMarkdownRemark___frontmatter____83',
  ChildrenMarkdownRemarkFrontmatter_84 = 'childrenMarkdownRemark___frontmatter____84',
  ChildrenMarkdownRemarkFrontmatter_85 = 'childrenMarkdownRemark___frontmatter____85',
  ChildrenMarkdownRemarkFrontmatter_86 = 'childrenMarkdownRemark___frontmatter____86',
  ChildrenMarkdownRemarkFrontmatter_87 = 'childrenMarkdownRemark___frontmatter____87',
  ChildrenMarkdownRemarkFrontmatter_88 = 'childrenMarkdownRemark___frontmatter____88',
  ChildrenMarkdownRemarkFrontmatter_89 = 'childrenMarkdownRemark___frontmatter____89',
  ChildrenMarkdownRemarkFrontmatter_90 = 'childrenMarkdownRemark___frontmatter____90',
  ChildrenMarkdownRemarkFrontmatter_91 = 'childrenMarkdownRemark___frontmatter____91',
  ChildrenMarkdownRemarkFrontmatter_92 = 'childrenMarkdownRemark___frontmatter____92',
  ChildrenMarkdownRemarkFrontmatter_93 = 'childrenMarkdownRemark___frontmatter____93',
  ChildrenMarkdownRemarkFrontmatter_94 = 'childrenMarkdownRemark___frontmatter____94',
  ChildrenMarkdownRemarkFrontmatter_95 = 'childrenMarkdownRemark___frontmatter____95',
  ChildrenMarkdownRemarkFrontmatter_96 = 'childrenMarkdownRemark___frontmatter____96',
  ChildrenMarkdownRemarkFrontmatter_97 = 'childrenMarkdownRemark___frontmatter____97',
  ChildrenMarkdownRemarkFrontmatter_98 = 'childrenMarkdownRemark___frontmatter____98',
  ChildrenMarkdownRemarkFrontmatter_99 = 'childrenMarkdownRemark___frontmatter____99',
  ChildrenMarkdownRemarkFrontmatterThumbnailSourceInstanceName = 'childrenMarkdownRemark___frontmatter___thumbnail___sourceInstanceName',
  ChildrenMarkdownRemarkFrontmatterThumbnailAbsolutePath = 'childrenMarkdownRemark___frontmatter___thumbnail___absolutePath',
  ChildrenMarkdownRemarkFrontmatterThumbnailRelativePath = 'childrenMarkdownRemark___frontmatter___thumbnail___relativePath',
  ChildrenMarkdownRemarkFrontmatterThumbnailExtension = 'childrenMarkdownRemark___frontmatter___thumbnail___extension',
  ChildrenMarkdownRemarkFrontmatterThumbnailSize = 'childrenMarkdownRemark___frontmatter___thumbnail___size',
  ChildrenMarkdownRemarkFrontmatterThumbnailPrettySize = 'childrenMarkdownRemark___frontmatter___thumbnail___prettySize',
  ChildrenMarkdownRemarkFrontmatterThumbnailModifiedTime = 'childrenMarkdownRemark___frontmatter___thumbnail___modifiedTime',
  ChildrenMarkdownRemarkFrontmatterThumbnailAccessTime = 'childrenMarkdownRemark___frontmatter___thumbnail___accessTime',
  ChildrenMarkdownRemarkFrontmatterThumbnailChangeTime = 'childrenMarkdownRemark___frontmatter___thumbnail___changeTime',
  ChildrenMarkdownRemarkFrontmatterThumbnailBirthTime = 'childrenMarkdownRemark___frontmatter___thumbnail___birthTime',
  ChildrenMarkdownRemarkFrontmatterThumbnailRoot = 'childrenMarkdownRemark___frontmatter___thumbnail___root',
  ChildrenMarkdownRemarkFrontmatterThumbnailDir = 'childrenMarkdownRemark___frontmatter___thumbnail___dir',
  ChildrenMarkdownRemarkFrontmatterThumbnailBase = 'childrenMarkdownRemark___frontmatter___thumbnail___base',
  ChildrenMarkdownRemarkFrontmatterThumbnailExt = 'childrenMarkdownRemark___frontmatter___thumbnail___ext',
  ChildrenMarkdownRemarkFrontmatterThumbnailName = 'childrenMarkdownRemark___frontmatter___thumbnail___name',
  ChildrenMarkdownRemarkFrontmatterThumbnailRelativeDirectory = 'childrenMarkdownRemark___frontmatter___thumbnail___relativeDirectory',
  ChildrenMarkdownRemarkFrontmatterThumbnailDev = 'childrenMarkdownRemark___frontmatter___thumbnail___dev',
  ChildrenMarkdownRemarkFrontmatterThumbnailMode = 'childrenMarkdownRemark___frontmatter___thumbnail___mode',
  ChildrenMarkdownRemarkFrontmatterThumbnailNlink = 'childrenMarkdownRemark___frontmatter___thumbnail___nlink',
  ChildrenMarkdownRemarkFrontmatterThumbnailUid = 'childrenMarkdownRemark___frontmatter___thumbnail___uid',
  ChildrenMarkdownRemarkFrontmatterThumbnailGid = 'childrenMarkdownRemark___frontmatter___thumbnail___gid',
  ChildrenMarkdownRemarkFrontmatterThumbnailRdev = 'childrenMarkdownRemark___frontmatter___thumbnail___rdev',
  ChildrenMarkdownRemarkFrontmatterThumbnailIno = 'childrenMarkdownRemark___frontmatter___thumbnail___ino',
  ChildrenMarkdownRemarkFrontmatterThumbnailAtimeMs = 'childrenMarkdownRemark___frontmatter___thumbnail___atimeMs',
  ChildrenMarkdownRemarkFrontmatterThumbnailMtimeMs = 'childrenMarkdownRemark___frontmatter___thumbnail___mtimeMs',
  ChildrenMarkdownRemarkFrontmatterThumbnailCtimeMs = 'childrenMarkdownRemark___frontmatter___thumbnail___ctimeMs',
  ChildrenMarkdownRemarkFrontmatterThumbnailAtime = 'childrenMarkdownRemark___frontmatter___thumbnail___atime',
  ChildrenMarkdownRemarkFrontmatterThumbnailMtime = 'childrenMarkdownRemark___frontmatter___thumbnail___mtime',
  ChildrenMarkdownRemarkFrontmatterThumbnailCtime = 'childrenMarkdownRemark___frontmatter___thumbnail___ctime',
  ChildrenMarkdownRemarkFrontmatterThumbnailBirthtime = 'childrenMarkdownRemark___frontmatter___thumbnail___birthtime',
  ChildrenMarkdownRemarkFrontmatterThumbnailBirthtimeMs = 'childrenMarkdownRemark___frontmatter___thumbnail___birthtimeMs',
  ChildrenMarkdownRemarkFrontmatterThumbnailBlksize = 'childrenMarkdownRemark___frontmatter___thumbnail___blksize',
  ChildrenMarkdownRemarkFrontmatterThumbnailBlocks = 'childrenMarkdownRemark___frontmatter___thumbnail___blocks',
  ChildrenMarkdownRemarkFrontmatterThumbnailPublicUrl = 'childrenMarkdownRemark___frontmatter___thumbnail___publicURL',
  ChildrenMarkdownRemarkFrontmatterThumbnailChildrenImageSharp = 'childrenMarkdownRemark___frontmatter___thumbnail___childrenImageSharp',
  ChildrenMarkdownRemarkFrontmatterThumbnailChildrenMarkdownRemark = 'childrenMarkdownRemark___frontmatter___thumbnail___childrenMarkdownRemark',
  ChildrenMarkdownRemarkFrontmatterThumbnailId = 'childrenMarkdownRemark___frontmatter___thumbnail___id',
  ChildrenMarkdownRemarkFrontmatterThumbnailChildren = 'childrenMarkdownRemark___frontmatter___thumbnail___children',
  ChildrenMarkdownRemarkFrontmatter = 'childrenMarkdownRemark___frontmatter____',
  ChildrenMarkdownRemarkFrontmatterModified = 'childrenMarkdownRemark___frontmatter___modified',
  ChildrenMarkdownRemarkFrontmatterId = 'childrenMarkdownRemark___frontmatter___id',
  ChildrenMarkdownRemarkFrontmatterParentId = 'childrenMarkdownRemark___frontmatter___parent___id',
  ChildrenMarkdownRemarkFrontmatterParentChildren = 'childrenMarkdownRemark___frontmatter___parent___children',
  ChildrenMarkdownRemarkFrontmatterChildren = 'childrenMarkdownRemark___frontmatter___children',
  ChildrenMarkdownRemarkFrontmatterChildrenId = 'childrenMarkdownRemark___frontmatter___children___id',
  ChildrenMarkdownRemarkFrontmatterChildrenChildren = 'childrenMarkdownRemark___frontmatter___children___children',
  ChildrenMarkdownRemarkFrontmatterInternalContent = 'childrenMarkdownRemark___frontmatter___internal___content',
  ChildrenMarkdownRemarkFrontmatterInternalContentDigest = 'childrenMarkdownRemark___frontmatter___internal___contentDigest',
  ChildrenMarkdownRemarkFrontmatterInternalDescription = 'childrenMarkdownRemark___frontmatter___internal___description',
  ChildrenMarkdownRemarkFrontmatterInternalFieldOwners = 'childrenMarkdownRemark___frontmatter___internal___fieldOwners',
  ChildrenMarkdownRemarkFrontmatterInternalIgnoreType = 'childrenMarkdownRemark___frontmatter___internal___ignoreType',
  ChildrenMarkdownRemarkFrontmatterInternalMediaType = 'childrenMarkdownRemark___frontmatter___internal___mediaType',
  ChildrenMarkdownRemarkFrontmatterInternalOwner = 'childrenMarkdownRemark___frontmatter___internal___owner',
  ChildrenMarkdownRemarkFrontmatterInternalType = 'childrenMarkdownRemark___frontmatter___internal___type',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkFileAbsolutePath = 'childrenMarkdownRemark___fileAbsolutePath',
  ChildrenMarkdownRemarkFieldsReady = 'childrenMarkdownRemark___fields___ready',
  ChildrenMarkdownRemarkFieldsSlug = 'childrenMarkdownRemark___fields___slug',
  ChildrenMarkdownRemarkFieldsId = 'childrenMarkdownRemark___fields___id',
  ChildrenMarkdownRemarkFieldsParentId = 'childrenMarkdownRemark___fields___parent___id',
  ChildrenMarkdownRemarkFieldsParentChildren = 'childrenMarkdownRemark___fields___parent___children',
  ChildrenMarkdownRemarkFieldsChildren = 'childrenMarkdownRemark___fields___children',
  ChildrenMarkdownRemarkFieldsChildrenId = 'childrenMarkdownRemark___fields___children___id',
  ChildrenMarkdownRemarkFieldsChildrenChildren = 'childrenMarkdownRemark___fields___children___children',
  ChildrenMarkdownRemarkFieldsInternalContent = 'childrenMarkdownRemark___fields___internal___content',
  ChildrenMarkdownRemarkFieldsInternalContentDigest = 'childrenMarkdownRemark___fields___internal___contentDigest',
  ChildrenMarkdownRemarkFieldsInternalDescription = 'childrenMarkdownRemark___fields___internal___description',
  ChildrenMarkdownRemarkFieldsInternalFieldOwners = 'childrenMarkdownRemark___fields___internal___fieldOwners',
  ChildrenMarkdownRemarkFieldsInternalIgnoreType = 'childrenMarkdownRemark___fields___internal___ignoreType',
  ChildrenMarkdownRemarkFieldsInternalMediaType = 'childrenMarkdownRemark___fields___internal___mediaType',
  ChildrenMarkdownRemarkFieldsInternalOwner = 'childrenMarkdownRemark___fields___internal___owner',
  ChildrenMarkdownRemarkFieldsInternalType = 'childrenMarkdownRemark___fields___internal___type',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterTemplate = 'childMarkdownRemark___frontmatter___template',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterStatus = 'childMarkdownRemark___frontmatter___status',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterExcerpt = 'childMarkdownRemark___frontmatter___excerpt',
  ChildMarkdownRemarkFrontmatterUpdate = 'childMarkdownRemark___frontmatter___update',
  ChildMarkdownRemarkFrontmatterCategory = 'childMarkdownRemark___frontmatter___category',
  ChildMarkdownRemarkFrontmatterPermalink = 'childMarkdownRemark___frontmatter___permalink',
  ChildMarkdownRemarkFrontmatter_0 = 'childMarkdownRemark___frontmatter____0',
  ChildMarkdownRemarkFrontmatter_1 = 'childMarkdownRemark___frontmatter____1',
  ChildMarkdownRemarkFrontmatter_2 = 'childMarkdownRemark___frontmatter____2',
  ChildMarkdownRemarkFrontmatter_3 = 'childMarkdownRemark___frontmatter____3',
  ChildMarkdownRemarkFrontmatter_4 = 'childMarkdownRemark___frontmatter____4',
  ChildMarkdownRemarkFrontmatter_5 = 'childMarkdownRemark___frontmatter____5',
  ChildMarkdownRemarkFrontmatter_6 = 'childMarkdownRemark___frontmatter____6',
  ChildMarkdownRemarkFrontmatter_7 = 'childMarkdownRemark___frontmatter____7',
  ChildMarkdownRemarkFrontmatter_8 = 'childMarkdownRemark___frontmatter____8',
  ChildMarkdownRemarkFrontmatter_9 = 'childMarkdownRemark___frontmatter____9',
  ChildMarkdownRemarkFrontmatter_10 = 'childMarkdownRemark___frontmatter____10',
  ChildMarkdownRemarkFrontmatter_11 = 'childMarkdownRemark___frontmatter____11',
  ChildMarkdownRemarkFrontmatter_12 = 'childMarkdownRemark___frontmatter____12',
  ChildMarkdownRemarkFrontmatter_13 = 'childMarkdownRemark___frontmatter____13',
  ChildMarkdownRemarkFrontmatter_14 = 'childMarkdownRemark___frontmatter____14',
  ChildMarkdownRemarkFrontmatter_15 = 'childMarkdownRemark___frontmatter____15',
  ChildMarkdownRemarkFrontmatter_16 = 'childMarkdownRemark___frontmatter____16',
  ChildMarkdownRemarkFrontmatter_17 = 'childMarkdownRemark___frontmatter____17',
  ChildMarkdownRemarkFrontmatter_18 = 'childMarkdownRemark___frontmatter____18',
  ChildMarkdownRemarkFrontmatter_19 = 'childMarkdownRemark___frontmatter____19',
  ChildMarkdownRemarkFrontmatter_20 = 'childMarkdownRemark___frontmatter____20',
  ChildMarkdownRemarkFrontmatter_21 = 'childMarkdownRemark___frontmatter____21',
  ChildMarkdownRemarkFrontmatter_22 = 'childMarkdownRemark___frontmatter____22',
  ChildMarkdownRemarkFrontmatter_23 = 'childMarkdownRemark___frontmatter____23',
  ChildMarkdownRemarkFrontmatter_24 = 'childMarkdownRemark___frontmatter____24',
  ChildMarkdownRemarkFrontmatter_25 = 'childMarkdownRemark___frontmatter____25',
  ChildMarkdownRemarkFrontmatter_26 = 'childMarkdownRemark___frontmatter____26',
  ChildMarkdownRemarkFrontmatter_27 = 'childMarkdownRemark___frontmatter____27',
  ChildMarkdownRemarkFrontmatter_28 = 'childMarkdownRemark___frontmatter____28',
  ChildMarkdownRemarkFrontmatter_29 = 'childMarkdownRemark___frontmatter____29',
  ChildMarkdownRemarkFrontmatter_30 = 'childMarkdownRemark___frontmatter____30',
  ChildMarkdownRemarkFrontmatter_31 = 'childMarkdownRemark___frontmatter____31',
  ChildMarkdownRemarkFrontmatter_32 = 'childMarkdownRemark___frontmatter____32',
  ChildMarkdownRemarkFrontmatter_33 = 'childMarkdownRemark___frontmatter____33',
  ChildMarkdownRemarkFrontmatter_34 = 'childMarkdownRemark___frontmatter____34',
  ChildMarkdownRemarkFrontmatter_35 = 'childMarkdownRemark___frontmatter____35',
  ChildMarkdownRemarkFrontmatter_36 = 'childMarkdownRemark___frontmatter____36',
  ChildMarkdownRemarkFrontmatter_37 = 'childMarkdownRemark___frontmatter____37',
  ChildMarkdownRemarkFrontmatter_38 = 'childMarkdownRemark___frontmatter____38',
  ChildMarkdownRemarkFrontmatter_39 = 'childMarkdownRemark___frontmatter____39',
  ChildMarkdownRemarkFrontmatter_40 = 'childMarkdownRemark___frontmatter____40',
  ChildMarkdownRemarkFrontmatter_41 = 'childMarkdownRemark___frontmatter____41',
  ChildMarkdownRemarkFrontmatter_42 = 'childMarkdownRemark___frontmatter____42',
  ChildMarkdownRemarkFrontmatter_43 = 'childMarkdownRemark___frontmatter____43',
  ChildMarkdownRemarkFrontmatter_44 = 'childMarkdownRemark___frontmatter____44',
  ChildMarkdownRemarkFrontmatter_45 = 'childMarkdownRemark___frontmatter____45',
  ChildMarkdownRemarkFrontmatter_46 = 'childMarkdownRemark___frontmatter____46',
  ChildMarkdownRemarkFrontmatter_47 = 'childMarkdownRemark___frontmatter____47',
  ChildMarkdownRemarkFrontmatter_48 = 'childMarkdownRemark___frontmatter____48',
  ChildMarkdownRemarkFrontmatter_49 = 'childMarkdownRemark___frontmatter____49',
  ChildMarkdownRemarkFrontmatter_50 = 'childMarkdownRemark___frontmatter____50',
  ChildMarkdownRemarkFrontmatter_51 = 'childMarkdownRemark___frontmatter____51',
  ChildMarkdownRemarkFrontmatter_52 = 'childMarkdownRemark___frontmatter____52',
  ChildMarkdownRemarkFrontmatter_53 = 'childMarkdownRemark___frontmatter____53',
  ChildMarkdownRemarkFrontmatter_54 = 'childMarkdownRemark___frontmatter____54',
  ChildMarkdownRemarkFrontmatter_55 = 'childMarkdownRemark___frontmatter____55',
  ChildMarkdownRemarkFrontmatter_56 = 'childMarkdownRemark___frontmatter____56',
  ChildMarkdownRemarkFrontmatter_57 = 'childMarkdownRemark___frontmatter____57',
  ChildMarkdownRemarkFrontmatter_58 = 'childMarkdownRemark___frontmatter____58',
  ChildMarkdownRemarkFrontmatter_59 = 'childMarkdownRemark___frontmatter____59',
  ChildMarkdownRemarkFrontmatter_60 = 'childMarkdownRemark___frontmatter____60',
  ChildMarkdownRemarkFrontmatter_61 = 'childMarkdownRemark___frontmatter____61',
  ChildMarkdownRemarkFrontmatter_62 = 'childMarkdownRemark___frontmatter____62',
  ChildMarkdownRemarkFrontmatter_63 = 'childMarkdownRemark___frontmatter____63',
  ChildMarkdownRemarkFrontmatter_64 = 'childMarkdownRemark___frontmatter____64',
  ChildMarkdownRemarkFrontmatter_65 = 'childMarkdownRemark___frontmatter____65',
  ChildMarkdownRemarkFrontmatter_66 = 'childMarkdownRemark___frontmatter____66',
  ChildMarkdownRemarkFrontmatter_67 = 'childMarkdownRemark___frontmatter____67',
  ChildMarkdownRemarkFrontmatter_68 = 'childMarkdownRemark___frontmatter____68',
  ChildMarkdownRemarkFrontmatter_69 = 'childMarkdownRemark___frontmatter____69',
  ChildMarkdownRemarkFrontmatter_70 = 'childMarkdownRemark___frontmatter____70',
  ChildMarkdownRemarkFrontmatter_71 = 'childMarkdownRemark___frontmatter____71',
  ChildMarkdownRemarkFrontmatter_72 = 'childMarkdownRemark___frontmatter____72',
  ChildMarkdownRemarkFrontmatter_73 = 'childMarkdownRemark___frontmatter____73',
  ChildMarkdownRemarkFrontmatter_74 = 'childMarkdownRemark___frontmatter____74',
  ChildMarkdownRemarkFrontmatter_75 = 'childMarkdownRemark___frontmatter____75',
  ChildMarkdownRemarkFrontmatter_76 = 'childMarkdownRemark___frontmatter____76',
  ChildMarkdownRemarkFrontmatter_77 = 'childMarkdownRemark___frontmatter____77',
  ChildMarkdownRemarkFrontmatter_78 = 'childMarkdownRemark___frontmatter____78',
  ChildMarkdownRemarkFrontmatter_79 = 'childMarkdownRemark___frontmatter____79',
  ChildMarkdownRemarkFrontmatter_80 = 'childMarkdownRemark___frontmatter____80',
  ChildMarkdownRemarkFrontmatter_81 = 'childMarkdownRemark___frontmatter____81',
  ChildMarkdownRemarkFrontmatter_82 = 'childMarkdownRemark___frontmatter____82',
  ChildMarkdownRemarkFrontmatter_83 = 'childMarkdownRemark___frontmatter____83',
  ChildMarkdownRemarkFrontmatter_84 = 'childMarkdownRemark___frontmatter____84',
  ChildMarkdownRemarkFrontmatter_85 = 'childMarkdownRemark___frontmatter____85',
  ChildMarkdownRemarkFrontmatter_86 = 'childMarkdownRemark___frontmatter____86',
  ChildMarkdownRemarkFrontmatter_87 = 'childMarkdownRemark___frontmatter____87',
  ChildMarkdownRemarkFrontmatter_88 = 'childMarkdownRemark___frontmatter____88',
  ChildMarkdownRemarkFrontmatter_89 = 'childMarkdownRemark___frontmatter____89',
  ChildMarkdownRemarkFrontmatter_90 = 'childMarkdownRemark___frontmatter____90',
  ChildMarkdownRemarkFrontmatter_91 = 'childMarkdownRemark___frontmatter____91',
  ChildMarkdownRemarkFrontmatter_92 = 'childMarkdownRemark___frontmatter____92',
  ChildMarkdownRemarkFrontmatter_93 = 'childMarkdownRemark___frontmatter____93',
  ChildMarkdownRemarkFrontmatter_94 = 'childMarkdownRemark___frontmatter____94',
  ChildMarkdownRemarkFrontmatter_95 = 'childMarkdownRemark___frontmatter____95',
  ChildMarkdownRemarkFrontmatter_96 = 'childMarkdownRemark___frontmatter____96',
  ChildMarkdownRemarkFrontmatter_97 = 'childMarkdownRemark___frontmatter____97',
  ChildMarkdownRemarkFrontmatter_98 = 'childMarkdownRemark___frontmatter____98',
  ChildMarkdownRemarkFrontmatter_99 = 'childMarkdownRemark___frontmatter____99',
  ChildMarkdownRemarkFrontmatterThumbnailSourceInstanceName = 'childMarkdownRemark___frontmatter___thumbnail___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterThumbnailAbsolutePath = 'childMarkdownRemark___frontmatter___thumbnail___absolutePath',
  ChildMarkdownRemarkFrontmatterThumbnailRelativePath = 'childMarkdownRemark___frontmatter___thumbnail___relativePath',
  ChildMarkdownRemarkFrontmatterThumbnailExtension = 'childMarkdownRemark___frontmatter___thumbnail___extension',
  ChildMarkdownRemarkFrontmatterThumbnailSize = 'childMarkdownRemark___frontmatter___thumbnail___size',
  ChildMarkdownRemarkFrontmatterThumbnailPrettySize = 'childMarkdownRemark___frontmatter___thumbnail___prettySize',
  ChildMarkdownRemarkFrontmatterThumbnailModifiedTime = 'childMarkdownRemark___frontmatter___thumbnail___modifiedTime',
  ChildMarkdownRemarkFrontmatterThumbnailAccessTime = 'childMarkdownRemark___frontmatter___thumbnail___accessTime',
  ChildMarkdownRemarkFrontmatterThumbnailChangeTime = 'childMarkdownRemark___frontmatter___thumbnail___changeTime',
  ChildMarkdownRemarkFrontmatterThumbnailBirthTime = 'childMarkdownRemark___frontmatter___thumbnail___birthTime',
  ChildMarkdownRemarkFrontmatterThumbnailRoot = 'childMarkdownRemark___frontmatter___thumbnail___root',
  ChildMarkdownRemarkFrontmatterThumbnailDir = 'childMarkdownRemark___frontmatter___thumbnail___dir',
  ChildMarkdownRemarkFrontmatterThumbnailBase = 'childMarkdownRemark___frontmatter___thumbnail___base',
  ChildMarkdownRemarkFrontmatterThumbnailExt = 'childMarkdownRemark___frontmatter___thumbnail___ext',
  ChildMarkdownRemarkFrontmatterThumbnailName = 'childMarkdownRemark___frontmatter___thumbnail___name',
  ChildMarkdownRemarkFrontmatterThumbnailRelativeDirectory = 'childMarkdownRemark___frontmatter___thumbnail___relativeDirectory',
  ChildMarkdownRemarkFrontmatterThumbnailDev = 'childMarkdownRemark___frontmatter___thumbnail___dev',
  ChildMarkdownRemarkFrontmatterThumbnailMode = 'childMarkdownRemark___frontmatter___thumbnail___mode',
  ChildMarkdownRemarkFrontmatterThumbnailNlink = 'childMarkdownRemark___frontmatter___thumbnail___nlink',
  ChildMarkdownRemarkFrontmatterThumbnailUid = 'childMarkdownRemark___frontmatter___thumbnail___uid',
  ChildMarkdownRemarkFrontmatterThumbnailGid = 'childMarkdownRemark___frontmatter___thumbnail___gid',
  ChildMarkdownRemarkFrontmatterThumbnailRdev = 'childMarkdownRemark___frontmatter___thumbnail___rdev',
  ChildMarkdownRemarkFrontmatterThumbnailIno = 'childMarkdownRemark___frontmatter___thumbnail___ino',
  ChildMarkdownRemarkFrontmatterThumbnailAtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___atimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailMtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___mtimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailCtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___ctimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailAtime = 'childMarkdownRemark___frontmatter___thumbnail___atime',
  ChildMarkdownRemarkFrontmatterThumbnailMtime = 'childMarkdownRemark___frontmatter___thumbnail___mtime',
  ChildMarkdownRemarkFrontmatterThumbnailCtime = 'childMarkdownRemark___frontmatter___thumbnail___ctime',
  ChildMarkdownRemarkFrontmatterThumbnailBirthtime = 'childMarkdownRemark___frontmatter___thumbnail___birthtime',
  ChildMarkdownRemarkFrontmatterThumbnailBirthtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___birthtimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailBlksize = 'childMarkdownRemark___frontmatter___thumbnail___blksize',
  ChildMarkdownRemarkFrontmatterThumbnailBlocks = 'childMarkdownRemark___frontmatter___thumbnail___blocks',
  ChildMarkdownRemarkFrontmatterThumbnailPublicUrl = 'childMarkdownRemark___frontmatter___thumbnail___publicURL',
  ChildMarkdownRemarkFrontmatterThumbnailChildrenImageSharp = 'childMarkdownRemark___frontmatter___thumbnail___childrenImageSharp',
  ChildMarkdownRemarkFrontmatterThumbnailChildrenMarkdownRemark = 'childMarkdownRemark___frontmatter___thumbnail___childrenMarkdownRemark',
  ChildMarkdownRemarkFrontmatterThumbnailId = 'childMarkdownRemark___frontmatter___thumbnail___id',
  ChildMarkdownRemarkFrontmatterThumbnailChildren = 'childMarkdownRemark___frontmatter___thumbnail___children',
  ChildMarkdownRemarkFrontmatter = 'childMarkdownRemark___frontmatter____',
  ChildMarkdownRemarkFrontmatterModified = 'childMarkdownRemark___frontmatter___modified',
  ChildMarkdownRemarkFrontmatterId = 'childMarkdownRemark___frontmatter___id',
  ChildMarkdownRemarkFrontmatterParentId = 'childMarkdownRemark___frontmatter___parent___id',
  ChildMarkdownRemarkFrontmatterParentChildren = 'childMarkdownRemark___frontmatter___parent___children',
  ChildMarkdownRemarkFrontmatterChildren = 'childMarkdownRemark___frontmatter___children',
  ChildMarkdownRemarkFrontmatterChildrenId = 'childMarkdownRemark___frontmatter___children___id',
  ChildMarkdownRemarkFrontmatterChildrenChildren = 'childMarkdownRemark___frontmatter___children___children',
  ChildMarkdownRemarkFrontmatterInternalContent = 'childMarkdownRemark___frontmatter___internal___content',
  ChildMarkdownRemarkFrontmatterInternalContentDigest = 'childMarkdownRemark___frontmatter___internal___contentDigest',
  ChildMarkdownRemarkFrontmatterInternalDescription = 'childMarkdownRemark___frontmatter___internal___description',
  ChildMarkdownRemarkFrontmatterInternalFieldOwners = 'childMarkdownRemark___frontmatter___internal___fieldOwners',
  ChildMarkdownRemarkFrontmatterInternalIgnoreType = 'childMarkdownRemark___frontmatter___internal___ignoreType',
  ChildMarkdownRemarkFrontmatterInternalMediaType = 'childMarkdownRemark___frontmatter___internal___mediaType',
  ChildMarkdownRemarkFrontmatterInternalOwner = 'childMarkdownRemark___frontmatter___internal___owner',
  ChildMarkdownRemarkFrontmatterInternalType = 'childMarkdownRemark___frontmatter___internal___type',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsReady = 'childMarkdownRemark___fields___ready',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFieldsId = 'childMarkdownRemark___fields___id',
  ChildMarkdownRemarkFieldsParentId = 'childMarkdownRemark___fields___parent___id',
  ChildMarkdownRemarkFieldsParentChildren = 'childMarkdownRemark___fields___parent___children',
  ChildMarkdownRemarkFieldsChildren = 'childMarkdownRemark___fields___children',
  ChildMarkdownRemarkFieldsChildrenId = 'childMarkdownRemark___fields___children___id',
  ChildMarkdownRemarkFieldsChildrenChildren = 'childMarkdownRemark___fields___children___children',
  ChildMarkdownRemarkFieldsInternalContent = 'childMarkdownRemark___fields___internal___content',
  ChildMarkdownRemarkFieldsInternalContentDigest = 'childMarkdownRemark___fields___internal___contentDigest',
  ChildMarkdownRemarkFieldsInternalDescription = 'childMarkdownRemark___fields___internal___description',
  ChildMarkdownRemarkFieldsInternalFieldOwners = 'childMarkdownRemark___fields___internal___fieldOwners',
  ChildMarkdownRemarkFieldsInternalIgnoreType = 'childMarkdownRemark___fields___internal___ignoreType',
  ChildMarkdownRemarkFieldsInternalMediaType = 'childMarkdownRemark___fields___internal___mediaType',
  ChildMarkdownRemarkFieldsInternalOwner = 'childMarkdownRemark___fields___internal___owner',
  ChildMarkdownRemarkFieldsInternalType = 'childMarkdownRemark___fields___internal___type',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  navs?: Maybe<SiteNavigationMapFilterListInput>;
  config?: Maybe<RawConfigDataFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteNavigationMapFilterListInput = {
  elemMatch?: Maybe<SiteNavigationMapFilterInput>;
};

export type SiteNavigationMapFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type RawConfigDataFilterInput = {
  site?: Maybe<RawSiteConfigFilterInput>;
  author?: Maybe<RawAuthorConfigFilterInput>;
  navs?: Maybe<SiteNavigationMapFilterListInput>;
  metadata?: Maybe<RawMetadataConfigFilterInput>;
};

export type RawSiteConfigFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  pagination_limit?: Maybe<IntQueryOperatorInput>;
  parse_ignore_dirs?: Maybe<StringQueryOperatorInput>;
  main_color?: Maybe<StringQueryOperatorInput>;
};

export type RawAuthorConfigFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  avatar?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
};

export type RawMetadataConfigFilterInput = {
  google_analytics?: Maybe<StringQueryOperatorInput>;
  google_search_console?: Maybe<StringQueryOperatorInput>;
  google_adsense_slot?: Maybe<StringQueryOperatorInput>;
  google_adsense_client?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataLanguage = 'siteMetadata___language',
  SiteMetadataNavs = 'siteMetadata___navs',
  SiteMetadataNavsPath = 'siteMetadata___navs___path',
  SiteMetadataNavsName = 'siteMetadata___navs___name',
  SiteMetadataConfigSiteTitle = 'siteMetadata___config___site___title',
  SiteMetadataConfigSiteUrl = 'siteMetadata___config___site___url',
  SiteMetadataConfigSiteLanguage = 'siteMetadata___config___site___language',
  SiteMetadataConfigSiteDescription = 'siteMetadata___config___site___description',
  SiteMetadataConfigSiteKeywords = 'siteMetadata___config___site___keywords',
  SiteMetadataConfigSitePaginationLimit = 'siteMetadata___config___site___pagination_limit',
  SiteMetadataConfigSiteParseIgnoreDirs = 'siteMetadata___config___site___parse_ignore_dirs',
  SiteMetadataConfigSiteMainColor = 'siteMetadata___config___site___main_color',
  SiteMetadataConfigAuthorName = 'siteMetadata___config___author___name',
  SiteMetadataConfigAuthorComment = 'siteMetadata___config___author___comment',
  SiteMetadataConfigAuthorAvatar = 'siteMetadata___config___author___avatar',
  SiteMetadataConfigAuthorEmail = 'siteMetadata___config___author___email',
  SiteMetadataConfigAuthorGithub = 'siteMetadata___config___author___github',
  SiteMetadataConfigAuthorLocation = 'siteMetadata___config___author___location',
  SiteMetadataConfigNavs = 'siteMetadata___config___navs',
  SiteMetadataConfigNavsPath = 'siteMetadata___config___navs___path',
  SiteMetadataConfigNavsName = 'siteMetadata___config___navs___name',
  SiteMetadataConfigMetadataGoogleAnalytics = 'siteMetadata___config___metadata___google_analytics',
  SiteMetadataConfigMetadataGoogleSearchConsole = 'siteMetadata___config___metadata___google_search_console',
  SiteMetadataConfigMetadataGoogleAdsenseSlot = 'siteMetadata___config___metadata___google_adsense_slot',
  SiteMetadataConfigMetadataGoogleAdsenseClient = 'siteMetadata___config___metadata___google_adsense_client',
  SiteMetadataId = 'siteMetadata___id',
  SiteMetadataParentId = 'siteMetadata___parent___id',
  SiteMetadataParentParentId = 'siteMetadata___parent___parent___id',
  SiteMetadataParentParentChildren = 'siteMetadata___parent___parent___children',
  SiteMetadataParentChildren = 'siteMetadata___parent___children',
  SiteMetadataParentChildrenId = 'siteMetadata___parent___children___id',
  SiteMetadataParentChildrenChildren = 'siteMetadata___parent___children___children',
  SiteMetadataParentInternalContent = 'siteMetadata___parent___internal___content',
  SiteMetadataParentInternalContentDigest = 'siteMetadata___parent___internal___contentDigest',
  SiteMetadataParentInternalDescription = 'siteMetadata___parent___internal___description',
  SiteMetadataParentInternalFieldOwners = 'siteMetadata___parent___internal___fieldOwners',
  SiteMetadataParentInternalIgnoreType = 'siteMetadata___parent___internal___ignoreType',
  SiteMetadataParentInternalMediaType = 'siteMetadata___parent___internal___mediaType',
  SiteMetadataParentInternalOwner = 'siteMetadata___parent___internal___owner',
  SiteMetadataParentInternalType = 'siteMetadata___parent___internal___type',
  SiteMetadataChildren = 'siteMetadata___children',
  SiteMetadataChildrenId = 'siteMetadata___children___id',
  SiteMetadataChildrenParentId = 'siteMetadata___children___parent___id',
  SiteMetadataChildrenParentChildren = 'siteMetadata___children___parent___children',
  SiteMetadataChildrenChildren = 'siteMetadata___children___children',
  SiteMetadataChildrenChildrenId = 'siteMetadata___children___children___id',
  SiteMetadataChildrenChildrenChildren = 'siteMetadata___children___children___children',
  SiteMetadataChildrenInternalContent = 'siteMetadata___children___internal___content',
  SiteMetadataChildrenInternalContentDigest = 'siteMetadata___children___internal___contentDigest',
  SiteMetadataChildrenInternalDescription = 'siteMetadata___children___internal___description',
  SiteMetadataChildrenInternalFieldOwners = 'siteMetadata___children___internal___fieldOwners',
  SiteMetadataChildrenInternalIgnoreType = 'siteMetadata___children___internal___ignoreType',
  SiteMetadataChildrenInternalMediaType = 'siteMetadata___children___internal___mediaType',
  SiteMetadataChildrenInternalOwner = 'siteMetadata___children___internal___owner',
  SiteMetadataChildrenInternalType = 'siteMetadata___children___internal___type',
  SiteMetadataInternalContent = 'siteMetadata___internal___content',
  SiteMetadataInternalContentDigest = 'siteMetadata___internal___contentDigest',
  SiteMetadataInternalDescription = 'siteMetadata___internal___description',
  SiteMetadataInternalFieldOwners = 'siteMetadata___internal___fieldOwners',
  SiteMetadataInternalIgnoreType = 'siteMetadata___internal___ignoreType',
  SiteMetadataInternalMediaType = 'siteMetadata___internal___mediaType',
  SiteMetadataInternalOwner = 'siteMetadata___internal___owner',
  SiteMetadataInternalType = 'siteMetadata___internal___type',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteSiteMetadataEdge>;
  nodes: Array<SiteSiteMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteSiteMetadataGroupConnection>;
};

export type SiteSiteMetadataConnectionDistinctArgs = {
  field: SiteSiteMetadataFieldsEnum;
};

export type SiteSiteMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteSiteMetadataFieldsEnum;
};

export type SiteSiteMetadataEdge = {
  next?: Maybe<SiteSiteMetadata>;
  node: SiteSiteMetadata;
  previous?: Maybe<SiteSiteMetadata>;
};

export enum SiteSiteMetadataFieldsEnum {
  Title = 'title',
  Description = 'description',
  Author = 'author',
  SiteUrl = 'siteUrl',
  Language = 'language',
  Navs = 'navs',
  NavsPath = 'navs___path',
  NavsName = 'navs___name',
  ConfigSiteTitle = 'config___site___title',
  ConfigSiteUrl = 'config___site___url',
  ConfigSiteLanguage = 'config___site___language',
  ConfigSiteDescription = 'config___site___description',
  ConfigSiteKeywords = 'config___site___keywords',
  ConfigSitePaginationLimit = 'config___site___pagination_limit',
  ConfigSiteParseIgnoreDirs = 'config___site___parse_ignore_dirs',
  ConfigSiteMainColor = 'config___site___main_color',
  ConfigAuthorName = 'config___author___name',
  ConfigAuthorComment = 'config___author___comment',
  ConfigAuthorAvatar = 'config___author___avatar',
  ConfigAuthorEmail = 'config___author___email',
  ConfigAuthorGithub = 'config___author___github',
  ConfigAuthorLocation = 'config___author___location',
  ConfigNavs = 'config___navs',
  ConfigNavsPath = 'config___navs___path',
  ConfigNavsName = 'config___navs___name',
  ConfigMetadataGoogleAnalytics = 'config___metadata___google_analytics',
  ConfigMetadataGoogleSearchConsole = 'config___metadata___google_search_console',
  ConfigMetadataGoogleAdsenseSlot = 'config___metadata___google_adsense_slot',
  ConfigMetadataGoogleAdsenseClient = 'config___metadata___google_adsense_client',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteSiteMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteSiteMetadataEdge>;
  nodes: Array<SiteSiteMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteSiteMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterTemplate = 'frontmatter___template',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterStatus = 'frontmatter___status',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterExcerpt = 'frontmatter___excerpt',
  FrontmatterUpdate = 'frontmatter___update',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterPermalink = 'frontmatter___permalink',
  Frontmatter_0 = 'frontmatter____0',
  Frontmatter_1 = 'frontmatter____1',
  Frontmatter_2 = 'frontmatter____2',
  Frontmatter_3 = 'frontmatter____3',
  Frontmatter_4 = 'frontmatter____4',
  Frontmatter_5 = 'frontmatter____5',
  Frontmatter_6 = 'frontmatter____6',
  Frontmatter_7 = 'frontmatter____7',
  Frontmatter_8 = 'frontmatter____8',
  Frontmatter_9 = 'frontmatter____9',
  Frontmatter_10 = 'frontmatter____10',
  Frontmatter_11 = 'frontmatter____11',
  Frontmatter_12 = 'frontmatter____12',
  Frontmatter_13 = 'frontmatter____13',
  Frontmatter_14 = 'frontmatter____14',
  Frontmatter_15 = 'frontmatter____15',
  Frontmatter_16 = 'frontmatter____16',
  Frontmatter_17 = 'frontmatter____17',
  Frontmatter_18 = 'frontmatter____18',
  Frontmatter_19 = 'frontmatter____19',
  Frontmatter_20 = 'frontmatter____20',
  Frontmatter_21 = 'frontmatter____21',
  Frontmatter_22 = 'frontmatter____22',
  Frontmatter_23 = 'frontmatter____23',
  Frontmatter_24 = 'frontmatter____24',
  Frontmatter_25 = 'frontmatter____25',
  Frontmatter_26 = 'frontmatter____26',
  Frontmatter_27 = 'frontmatter____27',
  Frontmatter_28 = 'frontmatter____28',
  Frontmatter_29 = 'frontmatter____29',
  Frontmatter_30 = 'frontmatter____30',
  Frontmatter_31 = 'frontmatter____31',
  Frontmatter_32 = 'frontmatter____32',
  Frontmatter_33 = 'frontmatter____33',
  Frontmatter_34 = 'frontmatter____34',
  Frontmatter_35 = 'frontmatter____35',
  Frontmatter_36 = 'frontmatter____36',
  Frontmatter_37 = 'frontmatter____37',
  Frontmatter_38 = 'frontmatter____38',
  Frontmatter_39 = 'frontmatter____39',
  Frontmatter_40 = 'frontmatter____40',
  Frontmatter_41 = 'frontmatter____41',
  Frontmatter_42 = 'frontmatter____42',
  Frontmatter_43 = 'frontmatter____43',
  Frontmatter_44 = 'frontmatter____44',
  Frontmatter_45 = 'frontmatter____45',
  Frontmatter_46 = 'frontmatter____46',
  Frontmatter_47 = 'frontmatter____47',
  Frontmatter_48 = 'frontmatter____48',
  Frontmatter_49 = 'frontmatter____49',
  Frontmatter_50 = 'frontmatter____50',
  Frontmatter_51 = 'frontmatter____51',
  Frontmatter_52 = 'frontmatter____52',
  Frontmatter_53 = 'frontmatter____53',
  Frontmatter_54 = 'frontmatter____54',
  Frontmatter_55 = 'frontmatter____55',
  Frontmatter_56 = 'frontmatter____56',
  Frontmatter_57 = 'frontmatter____57',
  Frontmatter_58 = 'frontmatter____58',
  Frontmatter_59 = 'frontmatter____59',
  Frontmatter_60 = 'frontmatter____60',
  Frontmatter_61 = 'frontmatter____61',
  Frontmatter_62 = 'frontmatter____62',
  Frontmatter_63 = 'frontmatter____63',
  Frontmatter_64 = 'frontmatter____64',
  Frontmatter_65 = 'frontmatter____65',
  Frontmatter_66 = 'frontmatter____66',
  Frontmatter_67 = 'frontmatter____67',
  Frontmatter_68 = 'frontmatter____68',
  Frontmatter_69 = 'frontmatter____69',
  Frontmatter_70 = 'frontmatter____70',
  Frontmatter_71 = 'frontmatter____71',
  Frontmatter_72 = 'frontmatter____72',
  Frontmatter_73 = 'frontmatter____73',
  Frontmatter_74 = 'frontmatter____74',
  Frontmatter_75 = 'frontmatter____75',
  Frontmatter_76 = 'frontmatter____76',
  Frontmatter_77 = 'frontmatter____77',
  Frontmatter_78 = 'frontmatter____78',
  Frontmatter_79 = 'frontmatter____79',
  Frontmatter_80 = 'frontmatter____80',
  Frontmatter_81 = 'frontmatter____81',
  Frontmatter_82 = 'frontmatter____82',
  Frontmatter_83 = 'frontmatter____83',
  Frontmatter_84 = 'frontmatter____84',
  Frontmatter_85 = 'frontmatter____85',
  Frontmatter_86 = 'frontmatter____86',
  Frontmatter_87 = 'frontmatter____87',
  Frontmatter_88 = 'frontmatter____88',
  Frontmatter_89 = 'frontmatter____89',
  Frontmatter_90 = 'frontmatter____90',
  Frontmatter_91 = 'frontmatter____91',
  Frontmatter_92 = 'frontmatter____92',
  Frontmatter_93 = 'frontmatter____93',
  Frontmatter_94 = 'frontmatter____94',
  Frontmatter_95 = 'frontmatter____95',
  Frontmatter_96 = 'frontmatter____96',
  Frontmatter_97 = 'frontmatter____97',
  Frontmatter_98 = 'frontmatter____98',
  Frontmatter_99 = 'frontmatter____99',
  FrontmatterThumbnailSourceInstanceName = 'frontmatter___thumbnail___sourceInstanceName',
  FrontmatterThumbnailAbsolutePath = 'frontmatter___thumbnail___absolutePath',
  FrontmatterThumbnailRelativePath = 'frontmatter___thumbnail___relativePath',
  FrontmatterThumbnailExtension = 'frontmatter___thumbnail___extension',
  FrontmatterThumbnailSize = 'frontmatter___thumbnail___size',
  FrontmatterThumbnailPrettySize = 'frontmatter___thumbnail___prettySize',
  FrontmatterThumbnailModifiedTime = 'frontmatter___thumbnail___modifiedTime',
  FrontmatterThumbnailAccessTime = 'frontmatter___thumbnail___accessTime',
  FrontmatterThumbnailChangeTime = 'frontmatter___thumbnail___changeTime',
  FrontmatterThumbnailBirthTime = 'frontmatter___thumbnail___birthTime',
  FrontmatterThumbnailRoot = 'frontmatter___thumbnail___root',
  FrontmatterThumbnailDir = 'frontmatter___thumbnail___dir',
  FrontmatterThumbnailBase = 'frontmatter___thumbnail___base',
  FrontmatterThumbnailExt = 'frontmatter___thumbnail___ext',
  FrontmatterThumbnailName = 'frontmatter___thumbnail___name',
  FrontmatterThumbnailRelativeDirectory = 'frontmatter___thumbnail___relativeDirectory',
  FrontmatterThumbnailDev = 'frontmatter___thumbnail___dev',
  FrontmatterThumbnailMode = 'frontmatter___thumbnail___mode',
  FrontmatterThumbnailNlink = 'frontmatter___thumbnail___nlink',
  FrontmatterThumbnailUid = 'frontmatter___thumbnail___uid',
  FrontmatterThumbnailGid = 'frontmatter___thumbnail___gid',
  FrontmatterThumbnailRdev = 'frontmatter___thumbnail___rdev',
  FrontmatterThumbnailIno = 'frontmatter___thumbnail___ino',
  FrontmatterThumbnailAtimeMs = 'frontmatter___thumbnail___atimeMs',
  FrontmatterThumbnailMtimeMs = 'frontmatter___thumbnail___mtimeMs',
  FrontmatterThumbnailCtimeMs = 'frontmatter___thumbnail___ctimeMs',
  FrontmatterThumbnailAtime = 'frontmatter___thumbnail___atime',
  FrontmatterThumbnailMtime = 'frontmatter___thumbnail___mtime',
  FrontmatterThumbnailCtime = 'frontmatter___thumbnail___ctime',
  FrontmatterThumbnailBirthtime = 'frontmatter___thumbnail___birthtime',
  FrontmatterThumbnailBirthtimeMs = 'frontmatter___thumbnail___birthtimeMs',
  FrontmatterThumbnailBlksize = 'frontmatter___thumbnail___blksize',
  FrontmatterThumbnailBlocks = 'frontmatter___thumbnail___blocks',
  FrontmatterThumbnailPublicUrl = 'frontmatter___thumbnail___publicURL',
  FrontmatterThumbnailChildrenImageSharp = 'frontmatter___thumbnail___childrenImageSharp',
  FrontmatterThumbnailChildrenImageSharpGatsbyImageData = 'frontmatter___thumbnail___childrenImageSharp___gatsbyImageData',
  FrontmatterThumbnailChildrenImageSharpId = 'frontmatter___thumbnail___childrenImageSharp___id',
  FrontmatterThumbnailChildrenImageSharpChildren = 'frontmatter___thumbnail___childrenImageSharp___children',
  FrontmatterThumbnailChildImageSharpGatsbyImageData = 'frontmatter___thumbnail___childImageSharp___gatsbyImageData',
  FrontmatterThumbnailChildImageSharpId = 'frontmatter___thumbnail___childImageSharp___id',
  FrontmatterThumbnailChildImageSharpChildren = 'frontmatter___thumbnail___childImageSharp___children',
  FrontmatterThumbnailChildrenMarkdownRemark = 'frontmatter___thumbnail___childrenMarkdownRemark',
  FrontmatterThumbnailChildrenMarkdownRemarkId = 'frontmatter___thumbnail___childrenMarkdownRemark___id',
  FrontmatterThumbnailChildrenMarkdownRemarkExcerpt = 'frontmatter___thumbnail___childrenMarkdownRemark___excerpt',
  FrontmatterThumbnailChildrenMarkdownRemarkRawMarkdownBody = 'frontmatter___thumbnail___childrenMarkdownRemark___rawMarkdownBody',
  FrontmatterThumbnailChildrenMarkdownRemarkFileAbsolutePath = 'frontmatter___thumbnail___childrenMarkdownRemark___fileAbsolutePath',
  FrontmatterThumbnailChildrenMarkdownRemarkHtml = 'frontmatter___thumbnail___childrenMarkdownRemark___html',
  FrontmatterThumbnailChildrenMarkdownRemarkHtmlAst = 'frontmatter___thumbnail___childrenMarkdownRemark___htmlAst',
  FrontmatterThumbnailChildrenMarkdownRemarkExcerptAst = 'frontmatter___thumbnail___childrenMarkdownRemark___excerptAst',
  FrontmatterThumbnailChildrenMarkdownRemarkHeadings = 'frontmatter___thumbnail___childrenMarkdownRemark___headings',
  FrontmatterThumbnailChildrenMarkdownRemarkTimeToRead = 'frontmatter___thumbnail___childrenMarkdownRemark___timeToRead',
  FrontmatterThumbnailChildrenMarkdownRemarkTableOfContents = 'frontmatter___thumbnail___childrenMarkdownRemark___tableOfContents',
  FrontmatterThumbnailChildrenMarkdownRemarkChildren = 'frontmatter___thumbnail___childrenMarkdownRemark___children',
  FrontmatterThumbnailChildMarkdownRemarkId = 'frontmatter___thumbnail___childMarkdownRemark___id',
  FrontmatterThumbnailChildMarkdownRemarkExcerpt = 'frontmatter___thumbnail___childMarkdownRemark___excerpt',
  FrontmatterThumbnailChildMarkdownRemarkRawMarkdownBody = 'frontmatter___thumbnail___childMarkdownRemark___rawMarkdownBody',
  FrontmatterThumbnailChildMarkdownRemarkFileAbsolutePath = 'frontmatter___thumbnail___childMarkdownRemark___fileAbsolutePath',
  FrontmatterThumbnailChildMarkdownRemarkHtml = 'frontmatter___thumbnail___childMarkdownRemark___html',
  FrontmatterThumbnailChildMarkdownRemarkHtmlAst = 'frontmatter___thumbnail___childMarkdownRemark___htmlAst',
  FrontmatterThumbnailChildMarkdownRemarkExcerptAst = 'frontmatter___thumbnail___childMarkdownRemark___excerptAst',
  FrontmatterThumbnailChildMarkdownRemarkHeadings = 'frontmatter___thumbnail___childMarkdownRemark___headings',
  FrontmatterThumbnailChildMarkdownRemarkTimeToRead = 'frontmatter___thumbnail___childMarkdownRemark___timeToRead',
  FrontmatterThumbnailChildMarkdownRemarkTableOfContents = 'frontmatter___thumbnail___childMarkdownRemark___tableOfContents',
  FrontmatterThumbnailChildMarkdownRemarkChildren = 'frontmatter___thumbnail___childMarkdownRemark___children',
  FrontmatterThumbnailId = 'frontmatter___thumbnail___id',
  FrontmatterThumbnailParentId = 'frontmatter___thumbnail___parent___id',
  FrontmatterThumbnailParentChildren = 'frontmatter___thumbnail___parent___children',
  FrontmatterThumbnailChildren = 'frontmatter___thumbnail___children',
  FrontmatterThumbnailChildrenId = 'frontmatter___thumbnail___children___id',
  FrontmatterThumbnailChildrenChildren = 'frontmatter___thumbnail___children___children',
  FrontmatterThumbnailInternalContent = 'frontmatter___thumbnail___internal___content',
  FrontmatterThumbnailInternalContentDigest = 'frontmatter___thumbnail___internal___contentDigest',
  FrontmatterThumbnailInternalDescription = 'frontmatter___thumbnail___internal___description',
  FrontmatterThumbnailInternalFieldOwners = 'frontmatter___thumbnail___internal___fieldOwners',
  FrontmatterThumbnailInternalIgnoreType = 'frontmatter___thumbnail___internal___ignoreType',
  FrontmatterThumbnailInternalMediaType = 'frontmatter___thumbnail___internal___mediaType',
  FrontmatterThumbnailInternalOwner = 'frontmatter___thumbnail___internal___owner',
  FrontmatterThumbnailInternalType = 'frontmatter___thumbnail___internal___type',
  Frontmatter = 'frontmatter____',
  FrontmatterModified = 'frontmatter___modified',
  FrontmatterId = 'frontmatter___id',
  FrontmatterParentId = 'frontmatter___parent___id',
  FrontmatterParentParentId = 'frontmatter___parent___parent___id',
  FrontmatterParentParentChildren = 'frontmatter___parent___parent___children',
  FrontmatterParentChildren = 'frontmatter___parent___children',
  FrontmatterParentChildrenId = 'frontmatter___parent___children___id',
  FrontmatterParentChildrenChildren = 'frontmatter___parent___children___children',
  FrontmatterParentInternalContent = 'frontmatter___parent___internal___content',
  FrontmatterParentInternalContentDigest = 'frontmatter___parent___internal___contentDigest',
  FrontmatterParentInternalDescription = 'frontmatter___parent___internal___description',
  FrontmatterParentInternalFieldOwners = 'frontmatter___parent___internal___fieldOwners',
  FrontmatterParentInternalIgnoreType = 'frontmatter___parent___internal___ignoreType',
  FrontmatterParentInternalMediaType = 'frontmatter___parent___internal___mediaType',
  FrontmatterParentInternalOwner = 'frontmatter___parent___internal___owner',
  FrontmatterParentInternalType = 'frontmatter___parent___internal___type',
  FrontmatterChildren = 'frontmatter___children',
  FrontmatterChildrenId = 'frontmatter___children___id',
  FrontmatterChildrenParentId = 'frontmatter___children___parent___id',
  FrontmatterChildrenParentChildren = 'frontmatter___children___parent___children',
  FrontmatterChildrenChildren = 'frontmatter___children___children',
  FrontmatterChildrenChildrenId = 'frontmatter___children___children___id',
  FrontmatterChildrenChildrenChildren = 'frontmatter___children___children___children',
  FrontmatterChildrenInternalContent = 'frontmatter___children___internal___content',
  FrontmatterChildrenInternalContentDigest = 'frontmatter___children___internal___contentDigest',
  FrontmatterChildrenInternalDescription = 'frontmatter___children___internal___description',
  FrontmatterChildrenInternalFieldOwners = 'frontmatter___children___internal___fieldOwners',
  FrontmatterChildrenInternalIgnoreType = 'frontmatter___children___internal___ignoreType',
  FrontmatterChildrenInternalMediaType = 'frontmatter___children___internal___mediaType',
  FrontmatterChildrenInternalOwner = 'frontmatter___children___internal___owner',
  FrontmatterChildrenInternalType = 'frontmatter___children___internal___type',
  FrontmatterInternalContent = 'frontmatter___internal___content',
  FrontmatterInternalContentDigest = 'frontmatter___internal___contentDigest',
  FrontmatterInternalDescription = 'frontmatter___internal___description',
  FrontmatterInternalFieldOwners = 'frontmatter___internal___fieldOwners',
  FrontmatterInternalIgnoreType = 'frontmatter___internal___ignoreType',
  FrontmatterInternalMediaType = 'frontmatter___internal___mediaType',
  FrontmatterInternalOwner = 'frontmatter___internal___owner',
  FrontmatterInternalType = 'frontmatter___internal___type',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsReady = 'fields___ready',
  FieldsSlug = 'fields___slug',
  FieldsId = 'fields___id',
  FieldsParentId = 'fields___parent___id',
  FieldsParentParentId = 'fields___parent___parent___id',
  FieldsParentParentChildren = 'fields___parent___parent___children',
  FieldsParentChildren = 'fields___parent___children',
  FieldsParentChildrenId = 'fields___parent___children___id',
  FieldsParentChildrenChildren = 'fields___parent___children___children',
  FieldsParentInternalContent = 'fields___parent___internal___content',
  FieldsParentInternalContentDigest = 'fields___parent___internal___contentDigest',
  FieldsParentInternalDescription = 'fields___parent___internal___description',
  FieldsParentInternalFieldOwners = 'fields___parent___internal___fieldOwners',
  FieldsParentInternalIgnoreType = 'fields___parent___internal___ignoreType',
  FieldsParentInternalMediaType = 'fields___parent___internal___mediaType',
  FieldsParentInternalOwner = 'fields___parent___internal___owner',
  FieldsParentInternalType = 'fields___parent___internal___type',
  FieldsChildren = 'fields___children',
  FieldsChildrenId = 'fields___children___id',
  FieldsChildrenParentId = 'fields___children___parent___id',
  FieldsChildrenParentChildren = 'fields___children___parent___children',
  FieldsChildrenChildren = 'fields___children___children',
  FieldsChildrenChildrenId = 'fields___children___children___id',
  FieldsChildrenChildrenChildren = 'fields___children___children___children',
  FieldsChildrenInternalContent = 'fields___children___internal___content',
  FieldsChildrenInternalContentDigest = 'fields___children___internal___contentDigest',
  FieldsChildrenInternalDescription = 'fields___children___internal___description',
  FieldsChildrenInternalFieldOwners = 'fields___children___internal___fieldOwners',
  FieldsChildrenInternalIgnoreType = 'fields___children___internal___ignoreType',
  FieldsChildrenInternalMediaType = 'fields___children___internal___mediaType',
  FieldsChildrenInternalOwner = 'fields___children___internal___owner',
  FieldsChildrenInternalType = 'fields___children___internal___type',
  FieldsInternalContent = 'fields___internal___content',
  FieldsInternalContentDigest = 'fields___internal___contentDigest',
  FieldsInternalDescription = 'fields___internal___description',
  FieldsInternalFieldOwners = 'fields___internal___fieldOwners',
  FieldsInternalIgnoreType = 'fields___internal___ignoreType',
  FieldsInternalMediaType = 'fields___internal___mediaType',
  FieldsInternalOwner = 'fields___internal___owner',
  FieldsInternalType = 'fields___internal___type',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownRemarkFieldsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkFieldsEdge>;
  nodes: Array<MarkdownRemarkFields>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkFieldsGroupConnection>;
};

export type MarkdownRemarkFieldsConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsFieldsEnum;
};

export type MarkdownRemarkFieldsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsFieldsEnum;
};

export type MarkdownRemarkFieldsEdge = {
  next?: Maybe<MarkdownRemarkFields>;
  node: MarkdownRemarkFields;
  previous?: Maybe<MarkdownRemarkFields>;
};

export enum MarkdownRemarkFieldsFieldsEnum {
  Ready = 'ready',
  Slug = 'slug',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type MarkdownRemarkFieldsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkFieldsEdge>;
  nodes: Array<MarkdownRemarkFields>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownRemarkFrontmatterConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkFrontmatterEdge>;
  nodes: Array<MarkdownRemarkFrontmatter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkFrontmatterGroupConnection>;
};

export type MarkdownRemarkFrontmatterConnectionDistinctArgs = {
  field: MarkdownRemarkFrontmatterFieldsEnum;
};

export type MarkdownRemarkFrontmatterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFrontmatterFieldsEnum;
};

export type MarkdownRemarkFrontmatterEdge = {
  next?: Maybe<MarkdownRemarkFrontmatter>;
  node: MarkdownRemarkFrontmatter;
  previous?: Maybe<MarkdownRemarkFrontmatter>;
};

export enum MarkdownRemarkFrontmatterFieldsEnum {
  Title = 'title',
  Template = 'template',
  Date = 'date',
  Status = 'status',
  Tags = 'tags',
  Excerpt = 'excerpt',
  Update = 'update',
  Category = 'category',
  Permalink = 'permalink',
  '0' = '_0',
  '1' = '_1',
  '2' = '_2',
  '3' = '_3',
  '4' = '_4',
  '5' = '_5',
  '6' = '_6',
  '7' = '_7',
  '8' = '_8',
  '9' = '_9',
  '10' = '_10',
  '11' = '_11',
  '12' = '_12',
  '13' = '_13',
  '14' = '_14',
  '15' = '_15',
  '16' = '_16',
  '17' = '_17',
  '18' = '_18',
  '19' = '_19',
  '20' = '_20',
  '21' = '_21',
  '22' = '_22',
  '23' = '_23',
  '24' = '_24',
  '25' = '_25',
  '26' = '_26',
  '27' = '_27',
  '28' = '_28',
  '29' = '_29',
  '30' = '_30',
  '31' = '_31',
  '32' = '_32',
  '33' = '_33',
  '34' = '_34',
  '35' = '_35',
  '36' = '_36',
  '37' = '_37',
  '38' = '_38',
  '39' = '_39',
  '40' = '_40',
  '41' = '_41',
  '42' = '_42',
  '43' = '_43',
  '44' = '_44',
  '45' = '_45',
  '46' = '_46',
  '47' = '_47',
  '48' = '_48',
  '49' = '_49',
  '50' = '_50',
  '51' = '_51',
  '52' = '_52',
  '53' = '_53',
  '54' = '_54',
  '55' = '_55',
  '56' = '_56',
  '57' = '_57',
  '58' = '_58',
  '59' = '_59',
  '60' = '_60',
  '61' = '_61',
  '62' = '_62',
  '63' = '_63',
  '64' = '_64',
  '65' = '_65',
  '66' = '_66',
  '67' = '_67',
  '68' = '_68',
  '69' = '_69',
  '70' = '_70',
  '71' = '_71',
  '72' = '_72',
  '73' = '_73',
  '74' = '_74',
  '75' = '_75',
  '76' = '_76',
  '77' = '_77',
  '78' = '_78',
  '79' = '_79',
  '80' = '_80',
  '81' = '_81',
  '82' = '_82',
  '83' = '_83',
  '84' = '_84',
  '85' = '_85',
  '86' = '_86',
  '87' = '_87',
  '88' = '_88',
  '89' = '_89',
  '90' = '_90',
  '91' = '_91',
  '92' = '_92',
  '93' = '_93',
  '94' = '_94',
  '95' = '_95',
  '96' = '_96',
  '97' = '_97',
  '98' = '_98',
  '99' = '_99',
  ThumbnailSourceInstanceName = 'thumbnail___sourceInstanceName',
  ThumbnailAbsolutePath = 'thumbnail___absolutePath',
  ThumbnailRelativePath = 'thumbnail___relativePath',
  ThumbnailExtension = 'thumbnail___extension',
  ThumbnailSize = 'thumbnail___size',
  ThumbnailPrettySize = 'thumbnail___prettySize',
  ThumbnailModifiedTime = 'thumbnail___modifiedTime',
  ThumbnailAccessTime = 'thumbnail___accessTime',
  ThumbnailChangeTime = 'thumbnail___changeTime',
  ThumbnailBirthTime = 'thumbnail___birthTime',
  ThumbnailRoot = 'thumbnail___root',
  ThumbnailDir = 'thumbnail___dir',
  ThumbnailBase = 'thumbnail___base',
  ThumbnailExt = 'thumbnail___ext',
  ThumbnailName = 'thumbnail___name',
  ThumbnailRelativeDirectory = 'thumbnail___relativeDirectory',
  ThumbnailDev = 'thumbnail___dev',
  ThumbnailMode = 'thumbnail___mode',
  ThumbnailNlink = 'thumbnail___nlink',
  ThumbnailUid = 'thumbnail___uid',
  ThumbnailGid = 'thumbnail___gid',
  ThumbnailRdev = 'thumbnail___rdev',
  ThumbnailIno = 'thumbnail___ino',
  ThumbnailAtimeMs = 'thumbnail___atimeMs',
  ThumbnailMtimeMs = 'thumbnail___mtimeMs',
  ThumbnailCtimeMs = 'thumbnail___ctimeMs',
  ThumbnailAtime = 'thumbnail___atime',
  ThumbnailMtime = 'thumbnail___mtime',
  ThumbnailCtime = 'thumbnail___ctime',
  ThumbnailBirthtime = 'thumbnail___birthtime',
  ThumbnailBirthtimeMs = 'thumbnail___birthtimeMs',
  ThumbnailBlksize = 'thumbnail___blksize',
  ThumbnailBlocks = 'thumbnail___blocks',
  ThumbnailPublicUrl = 'thumbnail___publicURL',
  ThumbnailChildrenImageSharp = 'thumbnail___childrenImageSharp',
  ThumbnailChildrenImageSharpFixedBase64 = 'thumbnail___childrenImageSharp___fixed___base64',
  ThumbnailChildrenImageSharpFixedTracedSvg = 'thumbnail___childrenImageSharp___fixed___tracedSVG',
  ThumbnailChildrenImageSharpFixedAspectRatio = 'thumbnail___childrenImageSharp___fixed___aspectRatio',
  ThumbnailChildrenImageSharpFixedWidth = 'thumbnail___childrenImageSharp___fixed___width',
  ThumbnailChildrenImageSharpFixedHeight = 'thumbnail___childrenImageSharp___fixed___height',
  ThumbnailChildrenImageSharpFixedSrc = 'thumbnail___childrenImageSharp___fixed___src',
  ThumbnailChildrenImageSharpFixedSrcSet = 'thumbnail___childrenImageSharp___fixed___srcSet',
  ThumbnailChildrenImageSharpFixedSrcWebp = 'thumbnail___childrenImageSharp___fixed___srcWebp',
  ThumbnailChildrenImageSharpFixedSrcSetWebp = 'thumbnail___childrenImageSharp___fixed___srcSetWebp',
  ThumbnailChildrenImageSharpFixedOriginalName = 'thumbnail___childrenImageSharp___fixed___originalName',
  ThumbnailChildrenImageSharpFluidBase64 = 'thumbnail___childrenImageSharp___fluid___base64',
  ThumbnailChildrenImageSharpFluidTracedSvg = 'thumbnail___childrenImageSharp___fluid___tracedSVG',
  ThumbnailChildrenImageSharpFluidAspectRatio = 'thumbnail___childrenImageSharp___fluid___aspectRatio',
  ThumbnailChildrenImageSharpFluidSrc = 'thumbnail___childrenImageSharp___fluid___src',
  ThumbnailChildrenImageSharpFluidSrcSet = 'thumbnail___childrenImageSharp___fluid___srcSet',
  ThumbnailChildrenImageSharpFluidSrcWebp = 'thumbnail___childrenImageSharp___fluid___srcWebp',
  ThumbnailChildrenImageSharpFluidSrcSetWebp = 'thumbnail___childrenImageSharp___fluid___srcSetWebp',
  ThumbnailChildrenImageSharpFluidSizes = 'thumbnail___childrenImageSharp___fluid___sizes',
  ThumbnailChildrenImageSharpFluidOriginalImg = 'thumbnail___childrenImageSharp___fluid___originalImg',
  ThumbnailChildrenImageSharpFluidOriginalName = 'thumbnail___childrenImageSharp___fluid___originalName',
  ThumbnailChildrenImageSharpFluidPresentationWidth = 'thumbnail___childrenImageSharp___fluid___presentationWidth',
  ThumbnailChildrenImageSharpFluidPresentationHeight = 'thumbnail___childrenImageSharp___fluid___presentationHeight',
  ThumbnailChildrenImageSharpGatsbyImageData = 'thumbnail___childrenImageSharp___gatsbyImageData',
  ThumbnailChildrenImageSharpOriginalWidth = 'thumbnail___childrenImageSharp___original___width',
  ThumbnailChildrenImageSharpOriginalHeight = 'thumbnail___childrenImageSharp___original___height',
  ThumbnailChildrenImageSharpOriginalSrc = 'thumbnail___childrenImageSharp___original___src',
  ThumbnailChildrenImageSharpResizeSrc = 'thumbnail___childrenImageSharp___resize___src',
  ThumbnailChildrenImageSharpResizeTracedSvg = 'thumbnail___childrenImageSharp___resize___tracedSVG',
  ThumbnailChildrenImageSharpResizeWidth = 'thumbnail___childrenImageSharp___resize___width',
  ThumbnailChildrenImageSharpResizeHeight = 'thumbnail___childrenImageSharp___resize___height',
  ThumbnailChildrenImageSharpResizeAspectRatio = 'thumbnail___childrenImageSharp___resize___aspectRatio',
  ThumbnailChildrenImageSharpResizeOriginalName = 'thumbnail___childrenImageSharp___resize___originalName',
  ThumbnailChildrenImageSharpId = 'thumbnail___childrenImageSharp___id',
  ThumbnailChildrenImageSharpParentId = 'thumbnail___childrenImageSharp___parent___id',
  ThumbnailChildrenImageSharpParentChildren = 'thumbnail___childrenImageSharp___parent___children',
  ThumbnailChildrenImageSharpChildren = 'thumbnail___childrenImageSharp___children',
  ThumbnailChildrenImageSharpChildrenId = 'thumbnail___childrenImageSharp___children___id',
  ThumbnailChildrenImageSharpChildrenChildren = 'thumbnail___childrenImageSharp___children___children',
  ThumbnailChildrenImageSharpInternalContent = 'thumbnail___childrenImageSharp___internal___content',
  ThumbnailChildrenImageSharpInternalContentDigest = 'thumbnail___childrenImageSharp___internal___contentDigest',
  ThumbnailChildrenImageSharpInternalDescription = 'thumbnail___childrenImageSharp___internal___description',
  ThumbnailChildrenImageSharpInternalFieldOwners = 'thumbnail___childrenImageSharp___internal___fieldOwners',
  ThumbnailChildrenImageSharpInternalIgnoreType = 'thumbnail___childrenImageSharp___internal___ignoreType',
  ThumbnailChildrenImageSharpInternalMediaType = 'thumbnail___childrenImageSharp___internal___mediaType',
  ThumbnailChildrenImageSharpInternalOwner = 'thumbnail___childrenImageSharp___internal___owner',
  ThumbnailChildrenImageSharpInternalType = 'thumbnail___childrenImageSharp___internal___type',
  ThumbnailChildImageSharpFixedBase64 = 'thumbnail___childImageSharp___fixed___base64',
  ThumbnailChildImageSharpFixedTracedSvg = 'thumbnail___childImageSharp___fixed___tracedSVG',
  ThumbnailChildImageSharpFixedAspectRatio = 'thumbnail___childImageSharp___fixed___aspectRatio',
  ThumbnailChildImageSharpFixedWidth = 'thumbnail___childImageSharp___fixed___width',
  ThumbnailChildImageSharpFixedHeight = 'thumbnail___childImageSharp___fixed___height',
  ThumbnailChildImageSharpFixedSrc = 'thumbnail___childImageSharp___fixed___src',
  ThumbnailChildImageSharpFixedSrcSet = 'thumbnail___childImageSharp___fixed___srcSet',
  ThumbnailChildImageSharpFixedSrcWebp = 'thumbnail___childImageSharp___fixed___srcWebp',
  ThumbnailChildImageSharpFixedSrcSetWebp = 'thumbnail___childImageSharp___fixed___srcSetWebp',
  ThumbnailChildImageSharpFixedOriginalName = 'thumbnail___childImageSharp___fixed___originalName',
  ThumbnailChildImageSharpFluidBase64 = 'thumbnail___childImageSharp___fluid___base64',
  ThumbnailChildImageSharpFluidTracedSvg = 'thumbnail___childImageSharp___fluid___tracedSVG',
  ThumbnailChildImageSharpFluidAspectRatio = 'thumbnail___childImageSharp___fluid___aspectRatio',
  ThumbnailChildImageSharpFluidSrc = 'thumbnail___childImageSharp___fluid___src',
  ThumbnailChildImageSharpFluidSrcSet = 'thumbnail___childImageSharp___fluid___srcSet',
  ThumbnailChildImageSharpFluidSrcWebp = 'thumbnail___childImageSharp___fluid___srcWebp',
  ThumbnailChildImageSharpFluidSrcSetWebp = 'thumbnail___childImageSharp___fluid___srcSetWebp',
  ThumbnailChildImageSharpFluidSizes = 'thumbnail___childImageSharp___fluid___sizes',
  ThumbnailChildImageSharpFluidOriginalImg = 'thumbnail___childImageSharp___fluid___originalImg',
  ThumbnailChildImageSharpFluidOriginalName = 'thumbnail___childImageSharp___fluid___originalName',
  ThumbnailChildImageSharpFluidPresentationWidth = 'thumbnail___childImageSharp___fluid___presentationWidth',
  ThumbnailChildImageSharpFluidPresentationHeight = 'thumbnail___childImageSharp___fluid___presentationHeight',
  ThumbnailChildImageSharpGatsbyImageData = 'thumbnail___childImageSharp___gatsbyImageData',
  ThumbnailChildImageSharpOriginalWidth = 'thumbnail___childImageSharp___original___width',
  ThumbnailChildImageSharpOriginalHeight = 'thumbnail___childImageSharp___original___height',
  ThumbnailChildImageSharpOriginalSrc = 'thumbnail___childImageSharp___original___src',
  ThumbnailChildImageSharpResizeSrc = 'thumbnail___childImageSharp___resize___src',
  ThumbnailChildImageSharpResizeTracedSvg = 'thumbnail___childImageSharp___resize___tracedSVG',
  ThumbnailChildImageSharpResizeWidth = 'thumbnail___childImageSharp___resize___width',
  ThumbnailChildImageSharpResizeHeight = 'thumbnail___childImageSharp___resize___height',
  ThumbnailChildImageSharpResizeAspectRatio = 'thumbnail___childImageSharp___resize___aspectRatio',
  ThumbnailChildImageSharpResizeOriginalName = 'thumbnail___childImageSharp___resize___originalName',
  ThumbnailChildImageSharpId = 'thumbnail___childImageSharp___id',
  ThumbnailChildImageSharpParentId = 'thumbnail___childImageSharp___parent___id',
  ThumbnailChildImageSharpParentChildren = 'thumbnail___childImageSharp___parent___children',
  ThumbnailChildImageSharpChildren = 'thumbnail___childImageSharp___children',
  ThumbnailChildImageSharpChildrenId = 'thumbnail___childImageSharp___children___id',
  ThumbnailChildImageSharpChildrenChildren = 'thumbnail___childImageSharp___children___children',
  ThumbnailChildImageSharpInternalContent = 'thumbnail___childImageSharp___internal___content',
  ThumbnailChildImageSharpInternalContentDigest = 'thumbnail___childImageSharp___internal___contentDigest',
  ThumbnailChildImageSharpInternalDescription = 'thumbnail___childImageSharp___internal___description',
  ThumbnailChildImageSharpInternalFieldOwners = 'thumbnail___childImageSharp___internal___fieldOwners',
  ThumbnailChildImageSharpInternalIgnoreType = 'thumbnail___childImageSharp___internal___ignoreType',
  ThumbnailChildImageSharpInternalMediaType = 'thumbnail___childImageSharp___internal___mediaType',
  ThumbnailChildImageSharpInternalOwner = 'thumbnail___childImageSharp___internal___owner',
  ThumbnailChildImageSharpInternalType = 'thumbnail___childImageSharp___internal___type',
  ThumbnailChildrenMarkdownRemark = 'thumbnail___childrenMarkdownRemark',
  ThumbnailChildrenMarkdownRemarkId = 'thumbnail___childrenMarkdownRemark___id',
  ThumbnailChildrenMarkdownRemarkFrontmatterTitle = 'thumbnail___childrenMarkdownRemark___frontmatter___title',
  ThumbnailChildrenMarkdownRemarkFrontmatterTemplate = 'thumbnail___childrenMarkdownRemark___frontmatter___template',
  ThumbnailChildrenMarkdownRemarkFrontmatterDate = 'thumbnail___childrenMarkdownRemark___frontmatter___date',
  ThumbnailChildrenMarkdownRemarkFrontmatterStatus = 'thumbnail___childrenMarkdownRemark___frontmatter___status',
  ThumbnailChildrenMarkdownRemarkFrontmatterTags = 'thumbnail___childrenMarkdownRemark___frontmatter___tags',
  ThumbnailChildrenMarkdownRemarkFrontmatterExcerpt = 'thumbnail___childrenMarkdownRemark___frontmatter___excerpt',
  ThumbnailChildrenMarkdownRemarkFrontmatterUpdate = 'thumbnail___childrenMarkdownRemark___frontmatter___update',
  ThumbnailChildrenMarkdownRemarkFrontmatterCategory = 'thumbnail___childrenMarkdownRemark___frontmatter___category',
  ThumbnailChildrenMarkdownRemarkFrontmatterPermalink = 'thumbnail___childrenMarkdownRemark___frontmatter___permalink',
  ThumbnailChildrenMarkdownRemarkFrontmatter_0 = 'thumbnail___childrenMarkdownRemark___frontmatter____0',
  ThumbnailChildrenMarkdownRemarkFrontmatter_1 = 'thumbnail___childrenMarkdownRemark___frontmatter____1',
  ThumbnailChildrenMarkdownRemarkFrontmatter_2 = 'thumbnail___childrenMarkdownRemark___frontmatter____2',
  ThumbnailChildrenMarkdownRemarkFrontmatter_3 = 'thumbnail___childrenMarkdownRemark___frontmatter____3',
  ThumbnailChildrenMarkdownRemarkFrontmatter_4 = 'thumbnail___childrenMarkdownRemark___frontmatter____4',
  ThumbnailChildrenMarkdownRemarkFrontmatter_5 = 'thumbnail___childrenMarkdownRemark___frontmatter____5',
  ThumbnailChildrenMarkdownRemarkFrontmatter_6 = 'thumbnail___childrenMarkdownRemark___frontmatter____6',
  ThumbnailChildrenMarkdownRemarkFrontmatter_7 = 'thumbnail___childrenMarkdownRemark___frontmatter____7',
  ThumbnailChildrenMarkdownRemarkFrontmatter_8 = 'thumbnail___childrenMarkdownRemark___frontmatter____8',
  ThumbnailChildrenMarkdownRemarkFrontmatter_9 = 'thumbnail___childrenMarkdownRemark___frontmatter____9',
  ThumbnailChildrenMarkdownRemarkFrontmatter_10 = 'thumbnail___childrenMarkdownRemark___frontmatter____10',
  ThumbnailChildrenMarkdownRemarkFrontmatter_11 = 'thumbnail___childrenMarkdownRemark___frontmatter____11',
  ThumbnailChildrenMarkdownRemarkFrontmatter_12 = 'thumbnail___childrenMarkdownRemark___frontmatter____12',
  ThumbnailChildrenMarkdownRemarkFrontmatter_13 = 'thumbnail___childrenMarkdownRemark___frontmatter____13',
  ThumbnailChildrenMarkdownRemarkFrontmatter_14 = 'thumbnail___childrenMarkdownRemark___frontmatter____14',
  ThumbnailChildrenMarkdownRemarkFrontmatter_15 = 'thumbnail___childrenMarkdownRemark___frontmatter____15',
  ThumbnailChildrenMarkdownRemarkFrontmatter_16 = 'thumbnail___childrenMarkdownRemark___frontmatter____16',
  ThumbnailChildrenMarkdownRemarkFrontmatter_17 = 'thumbnail___childrenMarkdownRemark___frontmatter____17',
  ThumbnailChildrenMarkdownRemarkFrontmatter_18 = 'thumbnail___childrenMarkdownRemark___frontmatter____18',
  ThumbnailChildrenMarkdownRemarkFrontmatter_19 = 'thumbnail___childrenMarkdownRemark___frontmatter____19',
  ThumbnailChildrenMarkdownRemarkFrontmatter_20 = 'thumbnail___childrenMarkdownRemark___frontmatter____20',
  ThumbnailChildrenMarkdownRemarkFrontmatter_21 = 'thumbnail___childrenMarkdownRemark___frontmatter____21',
  ThumbnailChildrenMarkdownRemarkFrontmatter_22 = 'thumbnail___childrenMarkdownRemark___frontmatter____22',
  ThumbnailChildrenMarkdownRemarkFrontmatter_23 = 'thumbnail___childrenMarkdownRemark___frontmatter____23',
  ThumbnailChildrenMarkdownRemarkFrontmatter_24 = 'thumbnail___childrenMarkdownRemark___frontmatter____24',
  ThumbnailChildrenMarkdownRemarkFrontmatter_25 = 'thumbnail___childrenMarkdownRemark___frontmatter____25',
  ThumbnailChildrenMarkdownRemarkFrontmatter_26 = 'thumbnail___childrenMarkdownRemark___frontmatter____26',
  ThumbnailChildrenMarkdownRemarkFrontmatter_27 = 'thumbnail___childrenMarkdownRemark___frontmatter____27',
  ThumbnailChildrenMarkdownRemarkFrontmatter_28 = 'thumbnail___childrenMarkdownRemark___frontmatter____28',
  ThumbnailChildrenMarkdownRemarkFrontmatter_29 = 'thumbnail___childrenMarkdownRemark___frontmatter____29',
  ThumbnailChildrenMarkdownRemarkFrontmatter_30 = 'thumbnail___childrenMarkdownRemark___frontmatter____30',
  ThumbnailChildrenMarkdownRemarkFrontmatter_31 = 'thumbnail___childrenMarkdownRemark___frontmatter____31',
  ThumbnailChildrenMarkdownRemarkFrontmatter_32 = 'thumbnail___childrenMarkdownRemark___frontmatter____32',
  ThumbnailChildrenMarkdownRemarkFrontmatter_33 = 'thumbnail___childrenMarkdownRemark___frontmatter____33',
  ThumbnailChildrenMarkdownRemarkFrontmatter_34 = 'thumbnail___childrenMarkdownRemark___frontmatter____34',
  ThumbnailChildrenMarkdownRemarkFrontmatter_35 = 'thumbnail___childrenMarkdownRemark___frontmatter____35',
  ThumbnailChildrenMarkdownRemarkFrontmatter_36 = 'thumbnail___childrenMarkdownRemark___frontmatter____36',
  ThumbnailChildrenMarkdownRemarkFrontmatter_37 = 'thumbnail___childrenMarkdownRemark___frontmatter____37',
  ThumbnailChildrenMarkdownRemarkFrontmatter_38 = 'thumbnail___childrenMarkdownRemark___frontmatter____38',
  ThumbnailChildrenMarkdownRemarkFrontmatter_39 = 'thumbnail___childrenMarkdownRemark___frontmatter____39',
  ThumbnailChildrenMarkdownRemarkFrontmatter_40 = 'thumbnail___childrenMarkdownRemark___frontmatter____40',
  ThumbnailChildrenMarkdownRemarkFrontmatter_41 = 'thumbnail___childrenMarkdownRemark___frontmatter____41',
  ThumbnailChildrenMarkdownRemarkFrontmatter_42 = 'thumbnail___childrenMarkdownRemark___frontmatter____42',
  ThumbnailChildrenMarkdownRemarkFrontmatter_43 = 'thumbnail___childrenMarkdownRemark___frontmatter____43',
  ThumbnailChildrenMarkdownRemarkFrontmatter_44 = 'thumbnail___childrenMarkdownRemark___frontmatter____44',
  ThumbnailChildrenMarkdownRemarkFrontmatter_45 = 'thumbnail___childrenMarkdownRemark___frontmatter____45',
  ThumbnailChildrenMarkdownRemarkFrontmatter_46 = 'thumbnail___childrenMarkdownRemark___frontmatter____46',
  ThumbnailChildrenMarkdownRemarkFrontmatter_47 = 'thumbnail___childrenMarkdownRemark___frontmatter____47',
  ThumbnailChildrenMarkdownRemarkFrontmatter_48 = 'thumbnail___childrenMarkdownRemark___frontmatter____48',
  ThumbnailChildrenMarkdownRemarkFrontmatter_49 = 'thumbnail___childrenMarkdownRemark___frontmatter____49',
  ThumbnailChildrenMarkdownRemarkFrontmatter_50 = 'thumbnail___childrenMarkdownRemark___frontmatter____50',
  ThumbnailChildrenMarkdownRemarkFrontmatter_51 = 'thumbnail___childrenMarkdownRemark___frontmatter____51',
  ThumbnailChildrenMarkdownRemarkFrontmatter_52 = 'thumbnail___childrenMarkdownRemark___frontmatter____52',
  ThumbnailChildrenMarkdownRemarkFrontmatter_53 = 'thumbnail___childrenMarkdownRemark___frontmatter____53',
  ThumbnailChildrenMarkdownRemarkFrontmatter_54 = 'thumbnail___childrenMarkdownRemark___frontmatter____54',
  ThumbnailChildrenMarkdownRemarkFrontmatter_55 = 'thumbnail___childrenMarkdownRemark___frontmatter____55',
  ThumbnailChildrenMarkdownRemarkFrontmatter_56 = 'thumbnail___childrenMarkdownRemark___frontmatter____56',
  ThumbnailChildrenMarkdownRemarkFrontmatter_57 = 'thumbnail___childrenMarkdownRemark___frontmatter____57',
  ThumbnailChildrenMarkdownRemarkFrontmatter_58 = 'thumbnail___childrenMarkdownRemark___frontmatter____58',
  ThumbnailChildrenMarkdownRemarkFrontmatter_59 = 'thumbnail___childrenMarkdownRemark___frontmatter____59',
  ThumbnailChildrenMarkdownRemarkFrontmatter_60 = 'thumbnail___childrenMarkdownRemark___frontmatter____60',
  ThumbnailChildrenMarkdownRemarkFrontmatter_61 = 'thumbnail___childrenMarkdownRemark___frontmatter____61',
  ThumbnailChildrenMarkdownRemarkFrontmatter_62 = 'thumbnail___childrenMarkdownRemark___frontmatter____62',
  ThumbnailChildrenMarkdownRemarkFrontmatter_63 = 'thumbnail___childrenMarkdownRemark___frontmatter____63',
  ThumbnailChildrenMarkdownRemarkFrontmatter_64 = 'thumbnail___childrenMarkdownRemark___frontmatter____64',
  ThumbnailChildrenMarkdownRemarkFrontmatter_65 = 'thumbnail___childrenMarkdownRemark___frontmatter____65',
  ThumbnailChildrenMarkdownRemarkFrontmatter_66 = 'thumbnail___childrenMarkdownRemark___frontmatter____66',
  ThumbnailChildrenMarkdownRemarkFrontmatter_67 = 'thumbnail___childrenMarkdownRemark___frontmatter____67',
  ThumbnailChildrenMarkdownRemarkFrontmatter_68 = 'thumbnail___childrenMarkdownRemark___frontmatter____68',
  ThumbnailChildrenMarkdownRemarkFrontmatter_69 = 'thumbnail___childrenMarkdownRemark___frontmatter____69',
  ThumbnailChildrenMarkdownRemarkFrontmatter_70 = 'thumbnail___childrenMarkdownRemark___frontmatter____70',
  ThumbnailChildrenMarkdownRemarkFrontmatter_71 = 'thumbnail___childrenMarkdownRemark___frontmatter____71',
  ThumbnailChildrenMarkdownRemarkFrontmatter_72 = 'thumbnail___childrenMarkdownRemark___frontmatter____72',
  ThumbnailChildrenMarkdownRemarkFrontmatter_73 = 'thumbnail___childrenMarkdownRemark___frontmatter____73',
  ThumbnailChildrenMarkdownRemarkFrontmatter_74 = 'thumbnail___childrenMarkdownRemark___frontmatter____74',
  ThumbnailChildrenMarkdownRemarkFrontmatter_75 = 'thumbnail___childrenMarkdownRemark___frontmatter____75',
  ThumbnailChildrenMarkdownRemarkFrontmatter_76 = 'thumbnail___childrenMarkdownRemark___frontmatter____76',
  ThumbnailChildrenMarkdownRemarkFrontmatter_77 = 'thumbnail___childrenMarkdownRemark___frontmatter____77',
  ThumbnailChildrenMarkdownRemarkFrontmatter_78 = 'thumbnail___childrenMarkdownRemark___frontmatter____78',
  ThumbnailChildrenMarkdownRemarkFrontmatter_79 = 'thumbnail___childrenMarkdownRemark___frontmatter____79',
  ThumbnailChildrenMarkdownRemarkFrontmatter_80 = 'thumbnail___childrenMarkdownRemark___frontmatter____80',
  ThumbnailChildrenMarkdownRemarkFrontmatter_81 = 'thumbnail___childrenMarkdownRemark___frontmatter____81',
  ThumbnailChildrenMarkdownRemarkFrontmatter_82 = 'thumbnail___childrenMarkdownRemark___frontmatter____82',
  ThumbnailChildrenMarkdownRemarkFrontmatter_83 = 'thumbnail___childrenMarkdownRemark___frontmatter____83',
  ThumbnailChildrenMarkdownRemarkFrontmatter_84 = 'thumbnail___childrenMarkdownRemark___frontmatter____84',
  ThumbnailChildrenMarkdownRemarkFrontmatter_85 = 'thumbnail___childrenMarkdownRemark___frontmatter____85',
  ThumbnailChildrenMarkdownRemarkFrontmatter_86 = 'thumbnail___childrenMarkdownRemark___frontmatter____86',
  ThumbnailChildrenMarkdownRemarkFrontmatter_87 = 'thumbnail___childrenMarkdownRemark___frontmatter____87',
  ThumbnailChildrenMarkdownRemarkFrontmatter_88 = 'thumbnail___childrenMarkdownRemark___frontmatter____88',
  ThumbnailChildrenMarkdownRemarkFrontmatter_89 = 'thumbnail___childrenMarkdownRemark___frontmatter____89',
  ThumbnailChildrenMarkdownRemarkFrontmatter_90 = 'thumbnail___childrenMarkdownRemark___frontmatter____90',
  ThumbnailChildrenMarkdownRemarkFrontmatter_91 = 'thumbnail___childrenMarkdownRemark___frontmatter____91',
  ThumbnailChildrenMarkdownRemarkFrontmatter_92 = 'thumbnail___childrenMarkdownRemark___frontmatter____92',
  ThumbnailChildrenMarkdownRemarkFrontmatter_93 = 'thumbnail___childrenMarkdownRemark___frontmatter____93',
  ThumbnailChildrenMarkdownRemarkFrontmatter_94 = 'thumbnail___childrenMarkdownRemark___frontmatter____94',
  ThumbnailChildrenMarkdownRemarkFrontmatter_95 = 'thumbnail___childrenMarkdownRemark___frontmatter____95',
  ThumbnailChildrenMarkdownRemarkFrontmatter_96 = 'thumbnail___childrenMarkdownRemark___frontmatter____96',
  ThumbnailChildrenMarkdownRemarkFrontmatter_97 = 'thumbnail___childrenMarkdownRemark___frontmatter____97',
  ThumbnailChildrenMarkdownRemarkFrontmatter_98 = 'thumbnail___childrenMarkdownRemark___frontmatter____98',
  ThumbnailChildrenMarkdownRemarkFrontmatter_99 = 'thumbnail___childrenMarkdownRemark___frontmatter____99',
  ThumbnailChildrenMarkdownRemarkFrontmatter = 'thumbnail___childrenMarkdownRemark___frontmatter____',
  ThumbnailChildrenMarkdownRemarkFrontmatterModified = 'thumbnail___childrenMarkdownRemark___frontmatter___modified',
  ThumbnailChildrenMarkdownRemarkFrontmatterId = 'thumbnail___childrenMarkdownRemark___frontmatter___id',
  ThumbnailChildrenMarkdownRemarkFrontmatterChildren = 'thumbnail___childrenMarkdownRemark___frontmatter___children',
  ThumbnailChildrenMarkdownRemarkExcerpt = 'thumbnail___childrenMarkdownRemark___excerpt',
  ThumbnailChildrenMarkdownRemarkRawMarkdownBody = 'thumbnail___childrenMarkdownRemark___rawMarkdownBody',
  ThumbnailChildrenMarkdownRemarkFileAbsolutePath = 'thumbnail___childrenMarkdownRemark___fileAbsolutePath',
  ThumbnailChildrenMarkdownRemarkFieldsReady = 'thumbnail___childrenMarkdownRemark___fields___ready',
  ThumbnailChildrenMarkdownRemarkFieldsSlug = 'thumbnail___childrenMarkdownRemark___fields___slug',
  ThumbnailChildrenMarkdownRemarkFieldsId = 'thumbnail___childrenMarkdownRemark___fields___id',
  ThumbnailChildrenMarkdownRemarkFieldsChildren = 'thumbnail___childrenMarkdownRemark___fields___children',
  ThumbnailChildrenMarkdownRemarkHtml = 'thumbnail___childrenMarkdownRemark___html',
  ThumbnailChildrenMarkdownRemarkHtmlAst = 'thumbnail___childrenMarkdownRemark___htmlAst',
  ThumbnailChildrenMarkdownRemarkExcerptAst = 'thumbnail___childrenMarkdownRemark___excerptAst',
  ThumbnailChildrenMarkdownRemarkHeadings = 'thumbnail___childrenMarkdownRemark___headings',
  ThumbnailChildrenMarkdownRemarkHeadingsId = 'thumbnail___childrenMarkdownRemark___headings___id',
  ThumbnailChildrenMarkdownRemarkHeadingsValue = 'thumbnail___childrenMarkdownRemark___headings___value',
  ThumbnailChildrenMarkdownRemarkHeadingsDepth = 'thumbnail___childrenMarkdownRemark___headings___depth',
  ThumbnailChildrenMarkdownRemarkTimeToRead = 'thumbnail___childrenMarkdownRemark___timeToRead',
  ThumbnailChildrenMarkdownRemarkTableOfContents = 'thumbnail___childrenMarkdownRemark___tableOfContents',
  ThumbnailChildrenMarkdownRemarkWordCountParagraphs = 'thumbnail___childrenMarkdownRemark___wordCount___paragraphs',
  ThumbnailChildrenMarkdownRemarkWordCountSentences = 'thumbnail___childrenMarkdownRemark___wordCount___sentences',
  ThumbnailChildrenMarkdownRemarkWordCountWords = 'thumbnail___childrenMarkdownRemark___wordCount___words',
  ThumbnailChildrenMarkdownRemarkParentId = 'thumbnail___childrenMarkdownRemark___parent___id',
  ThumbnailChildrenMarkdownRemarkParentChildren = 'thumbnail___childrenMarkdownRemark___parent___children',
  ThumbnailChildrenMarkdownRemarkChildren = 'thumbnail___childrenMarkdownRemark___children',
  ThumbnailChildrenMarkdownRemarkChildrenId = 'thumbnail___childrenMarkdownRemark___children___id',
  ThumbnailChildrenMarkdownRemarkChildrenChildren = 'thumbnail___childrenMarkdownRemark___children___children',
  ThumbnailChildrenMarkdownRemarkInternalContent = 'thumbnail___childrenMarkdownRemark___internal___content',
  ThumbnailChildrenMarkdownRemarkInternalContentDigest = 'thumbnail___childrenMarkdownRemark___internal___contentDigest',
  ThumbnailChildrenMarkdownRemarkInternalDescription = 'thumbnail___childrenMarkdownRemark___internal___description',
  ThumbnailChildrenMarkdownRemarkInternalFieldOwners = 'thumbnail___childrenMarkdownRemark___internal___fieldOwners',
  ThumbnailChildrenMarkdownRemarkInternalIgnoreType = 'thumbnail___childrenMarkdownRemark___internal___ignoreType',
  ThumbnailChildrenMarkdownRemarkInternalMediaType = 'thumbnail___childrenMarkdownRemark___internal___mediaType',
  ThumbnailChildrenMarkdownRemarkInternalOwner = 'thumbnail___childrenMarkdownRemark___internal___owner',
  ThumbnailChildrenMarkdownRemarkInternalType = 'thumbnail___childrenMarkdownRemark___internal___type',
  ThumbnailChildMarkdownRemarkId = 'thumbnail___childMarkdownRemark___id',
  ThumbnailChildMarkdownRemarkFrontmatterTitle = 'thumbnail___childMarkdownRemark___frontmatter___title',
  ThumbnailChildMarkdownRemarkFrontmatterTemplate = 'thumbnail___childMarkdownRemark___frontmatter___template',
  ThumbnailChildMarkdownRemarkFrontmatterDate = 'thumbnail___childMarkdownRemark___frontmatter___date',
  ThumbnailChildMarkdownRemarkFrontmatterStatus = 'thumbnail___childMarkdownRemark___frontmatter___status',
  ThumbnailChildMarkdownRemarkFrontmatterTags = 'thumbnail___childMarkdownRemark___frontmatter___tags',
  ThumbnailChildMarkdownRemarkFrontmatterExcerpt = 'thumbnail___childMarkdownRemark___frontmatter___excerpt',
  ThumbnailChildMarkdownRemarkFrontmatterUpdate = 'thumbnail___childMarkdownRemark___frontmatter___update',
  ThumbnailChildMarkdownRemarkFrontmatterCategory = 'thumbnail___childMarkdownRemark___frontmatter___category',
  ThumbnailChildMarkdownRemarkFrontmatterPermalink = 'thumbnail___childMarkdownRemark___frontmatter___permalink',
  ThumbnailChildMarkdownRemarkFrontmatter_0 = 'thumbnail___childMarkdownRemark___frontmatter____0',
  ThumbnailChildMarkdownRemarkFrontmatter_1 = 'thumbnail___childMarkdownRemark___frontmatter____1',
  ThumbnailChildMarkdownRemarkFrontmatter_2 = 'thumbnail___childMarkdownRemark___frontmatter____2',
  ThumbnailChildMarkdownRemarkFrontmatter_3 = 'thumbnail___childMarkdownRemark___frontmatter____3',
  ThumbnailChildMarkdownRemarkFrontmatter_4 = 'thumbnail___childMarkdownRemark___frontmatter____4',
  ThumbnailChildMarkdownRemarkFrontmatter_5 = 'thumbnail___childMarkdownRemark___frontmatter____5',
  ThumbnailChildMarkdownRemarkFrontmatter_6 = 'thumbnail___childMarkdownRemark___frontmatter____6',
  ThumbnailChildMarkdownRemarkFrontmatter_7 = 'thumbnail___childMarkdownRemark___frontmatter____7',
  ThumbnailChildMarkdownRemarkFrontmatter_8 = 'thumbnail___childMarkdownRemark___frontmatter____8',
  ThumbnailChildMarkdownRemarkFrontmatter_9 = 'thumbnail___childMarkdownRemark___frontmatter____9',
  ThumbnailChildMarkdownRemarkFrontmatter_10 = 'thumbnail___childMarkdownRemark___frontmatter____10',
  ThumbnailChildMarkdownRemarkFrontmatter_11 = 'thumbnail___childMarkdownRemark___frontmatter____11',
  ThumbnailChildMarkdownRemarkFrontmatter_12 = 'thumbnail___childMarkdownRemark___frontmatter____12',
  ThumbnailChildMarkdownRemarkFrontmatter_13 = 'thumbnail___childMarkdownRemark___frontmatter____13',
  ThumbnailChildMarkdownRemarkFrontmatter_14 = 'thumbnail___childMarkdownRemark___frontmatter____14',
  ThumbnailChildMarkdownRemarkFrontmatter_15 = 'thumbnail___childMarkdownRemark___frontmatter____15',
  ThumbnailChildMarkdownRemarkFrontmatter_16 = 'thumbnail___childMarkdownRemark___frontmatter____16',
  ThumbnailChildMarkdownRemarkFrontmatter_17 = 'thumbnail___childMarkdownRemark___frontmatter____17',
  ThumbnailChildMarkdownRemarkFrontmatter_18 = 'thumbnail___childMarkdownRemark___frontmatter____18',
  ThumbnailChildMarkdownRemarkFrontmatter_19 = 'thumbnail___childMarkdownRemark___frontmatter____19',
  ThumbnailChildMarkdownRemarkFrontmatter_20 = 'thumbnail___childMarkdownRemark___frontmatter____20',
  ThumbnailChildMarkdownRemarkFrontmatter_21 = 'thumbnail___childMarkdownRemark___frontmatter____21',
  ThumbnailChildMarkdownRemarkFrontmatter_22 = 'thumbnail___childMarkdownRemark___frontmatter____22',
  ThumbnailChildMarkdownRemarkFrontmatter_23 = 'thumbnail___childMarkdownRemark___frontmatter____23',
  ThumbnailChildMarkdownRemarkFrontmatter_24 = 'thumbnail___childMarkdownRemark___frontmatter____24',
  ThumbnailChildMarkdownRemarkFrontmatter_25 = 'thumbnail___childMarkdownRemark___frontmatter____25',
  ThumbnailChildMarkdownRemarkFrontmatter_26 = 'thumbnail___childMarkdownRemark___frontmatter____26',
  ThumbnailChildMarkdownRemarkFrontmatter_27 = 'thumbnail___childMarkdownRemark___frontmatter____27',
  ThumbnailChildMarkdownRemarkFrontmatter_28 = 'thumbnail___childMarkdownRemark___frontmatter____28',
  ThumbnailChildMarkdownRemarkFrontmatter_29 = 'thumbnail___childMarkdownRemark___frontmatter____29',
  ThumbnailChildMarkdownRemarkFrontmatter_30 = 'thumbnail___childMarkdownRemark___frontmatter____30',
  ThumbnailChildMarkdownRemarkFrontmatter_31 = 'thumbnail___childMarkdownRemark___frontmatter____31',
  ThumbnailChildMarkdownRemarkFrontmatter_32 = 'thumbnail___childMarkdownRemark___frontmatter____32',
  ThumbnailChildMarkdownRemarkFrontmatter_33 = 'thumbnail___childMarkdownRemark___frontmatter____33',
  ThumbnailChildMarkdownRemarkFrontmatter_34 = 'thumbnail___childMarkdownRemark___frontmatter____34',
  ThumbnailChildMarkdownRemarkFrontmatter_35 = 'thumbnail___childMarkdownRemark___frontmatter____35',
  ThumbnailChildMarkdownRemarkFrontmatter_36 = 'thumbnail___childMarkdownRemark___frontmatter____36',
  ThumbnailChildMarkdownRemarkFrontmatter_37 = 'thumbnail___childMarkdownRemark___frontmatter____37',
  ThumbnailChildMarkdownRemarkFrontmatter_38 = 'thumbnail___childMarkdownRemark___frontmatter____38',
  ThumbnailChildMarkdownRemarkFrontmatter_39 = 'thumbnail___childMarkdownRemark___frontmatter____39',
  ThumbnailChildMarkdownRemarkFrontmatter_40 = 'thumbnail___childMarkdownRemark___frontmatter____40',
  ThumbnailChildMarkdownRemarkFrontmatter_41 = 'thumbnail___childMarkdownRemark___frontmatter____41',
  ThumbnailChildMarkdownRemarkFrontmatter_42 = 'thumbnail___childMarkdownRemark___frontmatter____42',
  ThumbnailChildMarkdownRemarkFrontmatter_43 = 'thumbnail___childMarkdownRemark___frontmatter____43',
  ThumbnailChildMarkdownRemarkFrontmatter_44 = 'thumbnail___childMarkdownRemark___frontmatter____44',
  ThumbnailChildMarkdownRemarkFrontmatter_45 = 'thumbnail___childMarkdownRemark___frontmatter____45',
  ThumbnailChildMarkdownRemarkFrontmatter_46 = 'thumbnail___childMarkdownRemark___frontmatter____46',
  ThumbnailChildMarkdownRemarkFrontmatter_47 = 'thumbnail___childMarkdownRemark___frontmatter____47',
  ThumbnailChildMarkdownRemarkFrontmatter_48 = 'thumbnail___childMarkdownRemark___frontmatter____48',
  ThumbnailChildMarkdownRemarkFrontmatter_49 = 'thumbnail___childMarkdownRemark___frontmatter____49',
  ThumbnailChildMarkdownRemarkFrontmatter_50 = 'thumbnail___childMarkdownRemark___frontmatter____50',
  ThumbnailChildMarkdownRemarkFrontmatter_51 = 'thumbnail___childMarkdownRemark___frontmatter____51',
  ThumbnailChildMarkdownRemarkFrontmatter_52 = 'thumbnail___childMarkdownRemark___frontmatter____52',
  ThumbnailChildMarkdownRemarkFrontmatter_53 = 'thumbnail___childMarkdownRemark___frontmatter____53',
  ThumbnailChildMarkdownRemarkFrontmatter_54 = 'thumbnail___childMarkdownRemark___frontmatter____54',
  ThumbnailChildMarkdownRemarkFrontmatter_55 = 'thumbnail___childMarkdownRemark___frontmatter____55',
  ThumbnailChildMarkdownRemarkFrontmatter_56 = 'thumbnail___childMarkdownRemark___frontmatter____56',
  ThumbnailChildMarkdownRemarkFrontmatter_57 = 'thumbnail___childMarkdownRemark___frontmatter____57',
  ThumbnailChildMarkdownRemarkFrontmatter_58 = 'thumbnail___childMarkdownRemark___frontmatter____58',
  ThumbnailChildMarkdownRemarkFrontmatter_59 = 'thumbnail___childMarkdownRemark___frontmatter____59',
  ThumbnailChildMarkdownRemarkFrontmatter_60 = 'thumbnail___childMarkdownRemark___frontmatter____60',
  ThumbnailChildMarkdownRemarkFrontmatter_61 = 'thumbnail___childMarkdownRemark___frontmatter____61',
  ThumbnailChildMarkdownRemarkFrontmatter_62 = 'thumbnail___childMarkdownRemark___frontmatter____62',
  ThumbnailChildMarkdownRemarkFrontmatter_63 = 'thumbnail___childMarkdownRemark___frontmatter____63',
  ThumbnailChildMarkdownRemarkFrontmatter_64 = 'thumbnail___childMarkdownRemark___frontmatter____64',
  ThumbnailChildMarkdownRemarkFrontmatter_65 = 'thumbnail___childMarkdownRemark___frontmatter____65',
  ThumbnailChildMarkdownRemarkFrontmatter_66 = 'thumbnail___childMarkdownRemark___frontmatter____66',
  ThumbnailChildMarkdownRemarkFrontmatter_67 = 'thumbnail___childMarkdownRemark___frontmatter____67',
  ThumbnailChildMarkdownRemarkFrontmatter_68 = 'thumbnail___childMarkdownRemark___frontmatter____68',
  ThumbnailChildMarkdownRemarkFrontmatter_69 = 'thumbnail___childMarkdownRemark___frontmatter____69',
  ThumbnailChildMarkdownRemarkFrontmatter_70 = 'thumbnail___childMarkdownRemark___frontmatter____70',
  ThumbnailChildMarkdownRemarkFrontmatter_71 = 'thumbnail___childMarkdownRemark___frontmatter____71',
  ThumbnailChildMarkdownRemarkFrontmatter_72 = 'thumbnail___childMarkdownRemark___frontmatter____72',
  ThumbnailChildMarkdownRemarkFrontmatter_73 = 'thumbnail___childMarkdownRemark___frontmatter____73',
  ThumbnailChildMarkdownRemarkFrontmatter_74 = 'thumbnail___childMarkdownRemark___frontmatter____74',
  ThumbnailChildMarkdownRemarkFrontmatter_75 = 'thumbnail___childMarkdownRemark___frontmatter____75',
  ThumbnailChildMarkdownRemarkFrontmatter_76 = 'thumbnail___childMarkdownRemark___frontmatter____76',
  ThumbnailChildMarkdownRemarkFrontmatter_77 = 'thumbnail___childMarkdownRemark___frontmatter____77',
  ThumbnailChildMarkdownRemarkFrontmatter_78 = 'thumbnail___childMarkdownRemark___frontmatter____78',
  ThumbnailChildMarkdownRemarkFrontmatter_79 = 'thumbnail___childMarkdownRemark___frontmatter____79',
  ThumbnailChildMarkdownRemarkFrontmatter_80 = 'thumbnail___childMarkdownRemark___frontmatter____80',
  ThumbnailChildMarkdownRemarkFrontmatter_81 = 'thumbnail___childMarkdownRemark___frontmatter____81',
  ThumbnailChildMarkdownRemarkFrontmatter_82 = 'thumbnail___childMarkdownRemark___frontmatter____82',
  ThumbnailChildMarkdownRemarkFrontmatter_83 = 'thumbnail___childMarkdownRemark___frontmatter____83',
  ThumbnailChildMarkdownRemarkFrontmatter_84 = 'thumbnail___childMarkdownRemark___frontmatter____84',
  ThumbnailChildMarkdownRemarkFrontmatter_85 = 'thumbnail___childMarkdownRemark___frontmatter____85',
  ThumbnailChildMarkdownRemarkFrontmatter_86 = 'thumbnail___childMarkdownRemark___frontmatter____86',
  ThumbnailChildMarkdownRemarkFrontmatter_87 = 'thumbnail___childMarkdownRemark___frontmatter____87',
  ThumbnailChildMarkdownRemarkFrontmatter_88 = 'thumbnail___childMarkdownRemark___frontmatter____88',
  ThumbnailChildMarkdownRemarkFrontmatter_89 = 'thumbnail___childMarkdownRemark___frontmatter____89',
  ThumbnailChildMarkdownRemarkFrontmatter_90 = 'thumbnail___childMarkdownRemark___frontmatter____90',
  ThumbnailChildMarkdownRemarkFrontmatter_91 = 'thumbnail___childMarkdownRemark___frontmatter____91',
  ThumbnailChildMarkdownRemarkFrontmatter_92 = 'thumbnail___childMarkdownRemark___frontmatter____92',
  ThumbnailChildMarkdownRemarkFrontmatter_93 = 'thumbnail___childMarkdownRemark___frontmatter____93',
  ThumbnailChildMarkdownRemarkFrontmatter_94 = 'thumbnail___childMarkdownRemark___frontmatter____94',
  ThumbnailChildMarkdownRemarkFrontmatter_95 = 'thumbnail___childMarkdownRemark___frontmatter____95',
  ThumbnailChildMarkdownRemarkFrontmatter_96 = 'thumbnail___childMarkdownRemark___frontmatter____96',
  ThumbnailChildMarkdownRemarkFrontmatter_97 = 'thumbnail___childMarkdownRemark___frontmatter____97',
  ThumbnailChildMarkdownRemarkFrontmatter_98 = 'thumbnail___childMarkdownRemark___frontmatter____98',
  ThumbnailChildMarkdownRemarkFrontmatter_99 = 'thumbnail___childMarkdownRemark___frontmatter____99',
  ThumbnailChildMarkdownRemarkFrontmatter = 'thumbnail___childMarkdownRemark___frontmatter____',
  ThumbnailChildMarkdownRemarkFrontmatterModified = 'thumbnail___childMarkdownRemark___frontmatter___modified',
  ThumbnailChildMarkdownRemarkFrontmatterId = 'thumbnail___childMarkdownRemark___frontmatter___id',
  ThumbnailChildMarkdownRemarkFrontmatterChildren = 'thumbnail___childMarkdownRemark___frontmatter___children',
  ThumbnailChildMarkdownRemarkExcerpt = 'thumbnail___childMarkdownRemark___excerpt',
  ThumbnailChildMarkdownRemarkRawMarkdownBody = 'thumbnail___childMarkdownRemark___rawMarkdownBody',
  ThumbnailChildMarkdownRemarkFileAbsolutePath = 'thumbnail___childMarkdownRemark___fileAbsolutePath',
  ThumbnailChildMarkdownRemarkFieldsReady = 'thumbnail___childMarkdownRemark___fields___ready',
  ThumbnailChildMarkdownRemarkFieldsSlug = 'thumbnail___childMarkdownRemark___fields___slug',
  ThumbnailChildMarkdownRemarkFieldsId = 'thumbnail___childMarkdownRemark___fields___id',
  ThumbnailChildMarkdownRemarkFieldsChildren = 'thumbnail___childMarkdownRemark___fields___children',
  ThumbnailChildMarkdownRemarkHtml = 'thumbnail___childMarkdownRemark___html',
  ThumbnailChildMarkdownRemarkHtmlAst = 'thumbnail___childMarkdownRemark___htmlAst',
  ThumbnailChildMarkdownRemarkExcerptAst = 'thumbnail___childMarkdownRemark___excerptAst',
  ThumbnailChildMarkdownRemarkHeadings = 'thumbnail___childMarkdownRemark___headings',
  ThumbnailChildMarkdownRemarkHeadingsId = 'thumbnail___childMarkdownRemark___headings___id',
  ThumbnailChildMarkdownRemarkHeadingsValue = 'thumbnail___childMarkdownRemark___headings___value',
  ThumbnailChildMarkdownRemarkHeadingsDepth = 'thumbnail___childMarkdownRemark___headings___depth',
  ThumbnailChildMarkdownRemarkTimeToRead = 'thumbnail___childMarkdownRemark___timeToRead',
  ThumbnailChildMarkdownRemarkTableOfContents = 'thumbnail___childMarkdownRemark___tableOfContents',
  ThumbnailChildMarkdownRemarkWordCountParagraphs = 'thumbnail___childMarkdownRemark___wordCount___paragraphs',
  ThumbnailChildMarkdownRemarkWordCountSentences = 'thumbnail___childMarkdownRemark___wordCount___sentences',
  ThumbnailChildMarkdownRemarkWordCountWords = 'thumbnail___childMarkdownRemark___wordCount___words',
  ThumbnailChildMarkdownRemarkParentId = 'thumbnail___childMarkdownRemark___parent___id',
  ThumbnailChildMarkdownRemarkParentChildren = 'thumbnail___childMarkdownRemark___parent___children',
  ThumbnailChildMarkdownRemarkChildren = 'thumbnail___childMarkdownRemark___children',
  ThumbnailChildMarkdownRemarkChildrenId = 'thumbnail___childMarkdownRemark___children___id',
  ThumbnailChildMarkdownRemarkChildrenChildren = 'thumbnail___childMarkdownRemark___children___children',
  ThumbnailChildMarkdownRemarkInternalContent = 'thumbnail___childMarkdownRemark___internal___content',
  ThumbnailChildMarkdownRemarkInternalContentDigest = 'thumbnail___childMarkdownRemark___internal___contentDigest',
  ThumbnailChildMarkdownRemarkInternalDescription = 'thumbnail___childMarkdownRemark___internal___description',
  ThumbnailChildMarkdownRemarkInternalFieldOwners = 'thumbnail___childMarkdownRemark___internal___fieldOwners',
  ThumbnailChildMarkdownRemarkInternalIgnoreType = 'thumbnail___childMarkdownRemark___internal___ignoreType',
  ThumbnailChildMarkdownRemarkInternalMediaType = 'thumbnail___childMarkdownRemark___internal___mediaType',
  ThumbnailChildMarkdownRemarkInternalOwner = 'thumbnail___childMarkdownRemark___internal___owner',
  ThumbnailChildMarkdownRemarkInternalType = 'thumbnail___childMarkdownRemark___internal___type',
  ThumbnailId = 'thumbnail___id',
  ThumbnailParentId = 'thumbnail___parent___id',
  ThumbnailParentParentId = 'thumbnail___parent___parent___id',
  ThumbnailParentParentChildren = 'thumbnail___parent___parent___children',
  ThumbnailParentChildren = 'thumbnail___parent___children',
  ThumbnailParentChildrenId = 'thumbnail___parent___children___id',
  ThumbnailParentChildrenChildren = 'thumbnail___parent___children___children',
  ThumbnailParentInternalContent = 'thumbnail___parent___internal___content',
  ThumbnailParentInternalContentDigest = 'thumbnail___parent___internal___contentDigest',
  ThumbnailParentInternalDescription = 'thumbnail___parent___internal___description',
  ThumbnailParentInternalFieldOwners = 'thumbnail___parent___internal___fieldOwners',
  ThumbnailParentInternalIgnoreType = 'thumbnail___parent___internal___ignoreType',
  ThumbnailParentInternalMediaType = 'thumbnail___parent___internal___mediaType',
  ThumbnailParentInternalOwner = 'thumbnail___parent___internal___owner',
  ThumbnailParentInternalType = 'thumbnail___parent___internal___type',
  ThumbnailChildren = 'thumbnail___children',
  ThumbnailChildrenId = 'thumbnail___children___id',
  ThumbnailChildrenParentId = 'thumbnail___children___parent___id',
  ThumbnailChildrenParentChildren = 'thumbnail___children___parent___children',
  ThumbnailChildrenChildren = 'thumbnail___children___children',
  ThumbnailChildrenChildrenId = 'thumbnail___children___children___id',
  ThumbnailChildrenChildrenChildren = 'thumbnail___children___children___children',
  ThumbnailChildrenInternalContent = 'thumbnail___children___internal___content',
  ThumbnailChildrenInternalContentDigest = 'thumbnail___children___internal___contentDigest',
  ThumbnailChildrenInternalDescription = 'thumbnail___children___internal___description',
  ThumbnailChildrenInternalFieldOwners = 'thumbnail___children___internal___fieldOwners',
  ThumbnailChildrenInternalIgnoreType = 'thumbnail___children___internal___ignoreType',
  ThumbnailChildrenInternalMediaType = 'thumbnail___children___internal___mediaType',
  ThumbnailChildrenInternalOwner = 'thumbnail___children___internal___owner',
  ThumbnailChildrenInternalType = 'thumbnail___children___internal___type',
  ThumbnailInternalContent = 'thumbnail___internal___content',
  ThumbnailInternalContentDigest = 'thumbnail___internal___contentDigest',
  ThumbnailInternalDescription = 'thumbnail___internal___description',
  ThumbnailInternalFieldOwners = 'thumbnail___internal___fieldOwners',
  ThumbnailInternalIgnoreType = 'thumbnail___internal___ignoreType',
  ThumbnailInternalMediaType = 'thumbnail___internal___mediaType',
  ThumbnailInternalOwner = 'thumbnail___internal___owner',
  ThumbnailInternalType = 'thumbnail___internal___type',
  '' = '_',
  Modified = 'modified',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type MarkdownRemarkFrontmatterGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkFrontmatterEdge>;
  nodes: Array<MarkdownRemarkFrontmatter>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  ignore?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  classPrefix?: Maybe<StringQueryOperatorInput>;
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
  aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  strict?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  sitemap?: Maybe<StringQueryOperatorInput>;
  policy?: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  classPrefix?: Maybe<StringQueryOperatorInput>;
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
  aliases?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsAliasesFilterInput>;
  strict?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsAliasesFilterInput = {
  react?: Maybe<StringQueryOperatorInput>;
  javascriptreact?: Maybe<StringQueryOperatorInput>;
  javascript_react?: Maybe<StringQueryOperatorInput>;
  typescriptreact?: Maybe<StringQueryOperatorInput>;
  typescript_react?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsAliasesFilterInput = {
  react?: Maybe<StringQueryOperatorInput>;
  javascriptreact?: Maybe<StringQueryOperatorInput>;
  javascript_react?: Maybe<StringQueryOperatorInput>;
  typescriptreact?: Maybe<StringQueryOperatorInput>;
  typescript_react?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  query?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
};

export type SitePluginPluginOptionsPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  allow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  PluginOptionsPluginsPluginOptionsSizeByPixelDensity = 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsQuality = 'pluginOptions___plugins___pluginOptions___quality',
  PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  PluginOptionsPluginsPluginOptionsClassPrefix = 'pluginOptions___plugins___pluginOptions___classPrefix',
  PluginOptionsPluginsPluginOptionsShowLineNumbers = 'pluginOptions___plugins___pluginOptions___showLineNumbers',
  PluginOptionsPluginsPluginOptionsStrict = 'pluginOptions___plugins___pluginOptions___strict',
  PluginOptionsPluginsPluginOptionsRel = 'pluginOptions___plugins___pluginOptions___rel',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsHead = 'pluginOptions___head',
  PluginOptionsAnonymize = 'pluginOptions___anonymize',
  PluginOptionsRespectDnt = 'pluginOptions___respectDNT',
  PluginOptionsPageTransitionDelay = 'pluginOptions___pageTransitionDelay',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsIgnore = 'pluginOptions___ignore',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
  PluginOptionsSizeByPixelDensity = 'pluginOptions___sizeByPixelDensity',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsQuality = 'pluginOptions___quality',
  PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
  PluginOptionsClassPrefix = 'pluginOptions___classPrefix',
  PluginOptionsShowLineNumbers = 'pluginOptions___showLineNumbers',
  PluginOptionsAliasesReact = 'pluginOptions___aliases___react',
  PluginOptionsAliasesJavascriptreact = 'pluginOptions___aliases___javascriptreact',
  PluginOptionsAliasesJavascriptReact = 'pluginOptions___aliases___javascript_react',
  PluginOptionsAliasesTypescriptreact = 'pluginOptions___aliases___typescriptreact',
  PluginOptionsAliasesTypescriptReact = 'pluginOptions___aliases___typescript_react',
  PluginOptionsStrict = 'pluginOptions___strict',
  PluginOptionsRel = 'pluginOptions___rel',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsDescription = 'pluginOptions___description',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsFeeds = 'pluginOptions___feeds',
  PluginOptionsFeedsQuery = 'pluginOptions___feeds___query',
  PluginOptionsFeedsOutput = 'pluginOptions___feeds___output',
  PluginOptionsFeedsTitle = 'pluginOptions___feeds___title',
  PluginOptionsHost = 'pluginOptions___host',
  PluginOptionsSitemap = 'pluginOptions___sitemap',
  PluginOptionsPolicy = 'pluginOptions___policy',
  PluginOptionsPolicyUserAgent = 'pluginOptions___policy___userAgent',
  PluginOptionsPolicyAllow = 'pluginOptions___policy___allow',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BioQueryVariables = Exact<{ [key: string]: never }>;

export type BioQuery = {
  site?: Maybe<{
    metadata: {
      config: {
        site: Pick<RawSiteConfig, 'url'>;
        author: Pick<
          RawAuthorConfig,
          'location' | 'email' | 'github' | 'comment'
        >;
      };
    };
  }>;
};

export type LayoutQueryVariables = Exact<{ [key: string]: never }>;

export type LayoutQuery = {
  site?: Maybe<
    Pick<Site, 'buildTime'> & {
      metadata: Pick<SiteSiteMetadata, 'author' | 'title' | 'language'> & {
        config: { metadata: Pick<RawMetadataConfig, 'google_search_console'> };
        navs: Array<Pick<SiteNavigationMap, 'name' | 'path'>>;
      };
    }
  >;
};

export type SeoQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQuery = {
  site?: Maybe<{
    metadata: Pick<
      SiteSiteMetadata,
      'title' | 'description' | 'author' | 'language'
    >;
  }>;
};

export type ListQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;

export type ListQuery = {
  site?: Maybe<{ metadata: Pick<SiteSiteMetadata, 'title'> }>;
  allMarkdownRemark: Pick<MarkdownRemarkConnection, 'totalCount'> & {
    edges: Array<{
      node: Pick<MarkdownRemark, 'excerpt'> & {
        fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>;
        frontmatter?: Maybe<
          Pick<
            MarkdownRemarkFrontmatter,
            'date' | 'update' | 'title' | 'tags' | 'category' | 'excerpt'
          > & {
            thumbnail?: Maybe<{
              childImageSharp?: Maybe<{ image: ImageSharp['gatsbyImageData'] }>;
            }>;
          }
        >;
      };
    }>;
  };
};

export type PostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type PostQuery = {
  markdownRemark?: Maybe<
    Pick<MarkdownRemark, 'id' | 'html' | 'excerpt'> & {
      frontmatter?: Maybe<
        Pick<
          MarkdownRemarkFrontmatter,
          'title' | 'tags' | 'category' | 'date' | 'update' | 'excerpt'
        >
      >;
    }
  >;
};

export type PostsPaginationQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;

export type PostsPaginationQuery = {
  posts: Pick<MarkdownRemarkConnection, 'totalCount'> & {
    edges: Array<{
      node: {
        fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>;
        frontmatter?: Maybe<
          Pick<
            MarkdownRemarkFrontmatter,
            'date' | 'update' | 'title' | 'tags' | 'category' | 'excerpt'
          > & {
            thumbnail?: Maybe<{
              childImageSharp?: Maybe<{ image: ImageSharp['gatsbyImageData'] }>;
            }>;
          }
        >;
      };
    }>;
  };
};

export type SearchSourceQueryVariables = Exact<{ [key: string]: never }>;

export type SearchSourceQuery = {
  source: {
    edges: Array<{
      node: {
        fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>;
        frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'title' | 'tags'>>;
      };
    }>;
  };
};

export type TagQueryVariables = Exact<{
  tag: Scalars['String'];
}>;

export type TagQuery = {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>;
        frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'title' | 'date'>>;
      };
    }>;
  };
};
