import TOML  from 'toml'
import std_fs from 'fs'
import std_path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' });

const POSTS_DIR = process.env.GATSBY_POSTS_DIRECTORY;

interface Site {
  title: string;
  url: string;
  language: string
  description: string
  keywords: string[]
}
interface Author {
  name: string;
  comment: string;
  avatar: string
  email: string
  github: string
  location: string
}
interface Menu{
  name: string;
  path: string;
}

interface Metadata {
  google_analytics: string;
  google_search_console: string;
  google_adsense_slot: string
  google_analytics_client: string
}

interface Configure {
  directory: string;
  site: Site
  author: Author,
  metadata: Metadata
  menus: {
    [id in string]: Menu
  }
  parse: {
    ignore_dirs: string[]
  }
  pagination: {
    limit: number
  }
}

function parseConfig(): Configure {
  if (!POSTS_DIR) throw new Error("Missing environment variable: GATSBY_POSTS_DIRECTORY")
  try {
    const source = std_fs.readFileSync(std_path.resolve(POSTS_DIR, 'site.toml'), {encoding: 'utf8'});
    const config = TOML.parse(source);
    return { ...config, directory: POSTS_DIR };
  } catch (e) {
    if (e instanceof Error) throw new Error("Failed to parse config: " + e.message)
    throw e
  }
}
export const config = parseConfig()