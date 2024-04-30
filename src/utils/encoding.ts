export const encodeService = {
  stringToBase64(string: string): string {
    return btoa(unescape(encodeURIComponent(string)));
  },
};

export const decodeService = {
  base64ToString(base64String: string): string {
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
