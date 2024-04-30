export const encodingService = {
  utf8StringToBase64String(string: string): string {
    return btoa(unescape(encodeURIComponent(string)));
  },
  utf8StringToArrayBuffer(utf8String: string): ArrayBuffer {
    return new TextEncoder().encode(utf8String);
  },
  base64StringToArrayBuffer(base64String: string): ArrayBuffer {
    const binaryString = atob(base64String);
    const bytes = new Uint8Array(binaryString.length);

    binaryString.split('').forEach((char, index) => {
      bytes[index] = char.charCodeAt(0);
    });

    return bytes.buffer;
  },
  base64StringToUtf8String(base64String: string): string {
    return decodeURIComponent(escape(atob(base64String)));
  },
  arrayBufferToUtf8String(arrayBuffer: ArrayBuffer): string {
    return new TextDecoder().decode(arrayBuffer);
  },
  arrayBufferToBase64String(arrayBuffer: ArrayBuffer): string {
    return btoa(
      Array.from(new Uint8Array(arrayBuffer))
        .map((byte) => String.fromCharCode(byte))
        .join(''),
    );
  },
  arrayBufferToHexString(arrayBuffer: ArrayBuffer): string {
    return Array.from(new Uint8Array(arrayBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  },
};
