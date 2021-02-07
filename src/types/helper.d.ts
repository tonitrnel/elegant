export interface PageData<T extends object> {
  componentChunkName?: string;
  path: string;
  result?: {
    data: T;
    pageContext: Record<string, any>;
  };
  staticQueryHashes?: any[];
}
