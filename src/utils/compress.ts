import { decodeService } from './encoding';

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

export async function testCompression(text: string, encoding: CompressionFormat) {
  console.log('-', encoding);

  const encodedText = new TextEncoder().encode(text);
  const compressedData = await compressService.compress(encodedText, encoding);
  const compressedUtf8String = decodeService.arrayBufferToUtf8String(compressedData);
  const compressedBase64String = decodeService.arrayBufferToBase64String(compressedData);
  const compressedHexString = decodeService.arrayBufferToHexString(compressedData);

  console.log('compressed ArrayBuffer:', compressedData.byteLength, 'bytes');
  console.log('compressed utf8 string length:', compressedUtf8String.length, 'characters');
  console.log('compressed base64 string length:', compressedBase64String.length, 'characters');
  console.log('compressed hex string length:', compressedHexString.length, 'characters');

  const decompressedData = await compressService.decompress(compressedData, encoding);
  const decodedText = new TextDecoder().decode(decompressedData);

  console.log('decompressed ArrayBuffer:', decompressedData.byteLength, 'bytes');
  console.log('decompressed text string length:', decodedText.length, 'characters');

  console.log('is initial string equal decompressed string:', text === decodedText);

  return compressedData;
}
