/*
  Copy in https://github.com/43081j/id3
  Author: James Garbutt
 */


import Reader from '@/lib/id3/reader'
import RemoteReader from '@/lib/id3/remote-reader'
import { parse } from '@/lib/id3/id3-tag'

export async function fromReader(reader: Reader) {
  await reader.open()
  const tags = await parse(reader)
  await reader.close()
  return tags
}

export default async function load(url: string) {
  return fromReader(new RemoteReader(url))
}
