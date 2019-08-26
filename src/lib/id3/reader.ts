export default abstract class Reader {
  // Size of resource
  size: number = 0
  // Open the resource for reading
  abstract async open(): Promise<void>
  // Closes the resource
  abstract async close(): Promise<void>
  // Reads a specified range of the resource
  abstract async read(len: number, pos: number): Promise<ArrayBuffer>
  async readBlob(len: number, pos = 0, type = 'application/octet-stream') {
    const data = await this.read(len, pos)
    return new Blob([data], { type })
  }
}
