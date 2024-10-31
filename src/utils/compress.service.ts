export const compressService = {
  compress(
    byteArray: ArrayBuffer,
    encoding: CompressionFormat = 'deflate-raw',
  ): Promise<ArrayBuffer> {
    const cs = new CompressionStream(encoding);
    const writer = cs.writable.getWriter();
    writer.write(byteArray);
    writer.close();

    return new Response(cs.readable).arrayBuffer();
  },
  decompress(
    byteArray: ArrayBuffer,
    encoding: CompressionFormat = 'deflate-raw',
  ): Promise<ArrayBuffer> {
    const ds = new DecompressionStream(encoding);
    const writer = ds.writable.getWriter();
    writer.write(byteArray);
    writer.close();

    return new Response(ds.readable).arrayBuffer();
  },
};
