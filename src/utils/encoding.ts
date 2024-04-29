export const encodeService = {
  stringToBase64(string: string) {
    return btoa(unescape(encodeURIComponent(string)));
  },
  base64ToString(base64String: string) {
    return decodeURIComponent(escape(atob(base64String)));
  },
};

export const decodeService = {
  arrayBufferToUtf8String(arrayBuffer: ArrayBuffer) {
    return new TextDecoder().decode(arrayBuffer);
  },
  arrayBufferToBase64String(arrayBuffer: ArrayBuffer) {
    return btoa(
      Array.from(new Uint8Array(arrayBuffer))
        .map((byte) => String.fromCharCode(byte))
        .join(''),
    );
  },
  arrayBufferToHexString(arrayBuffer: ArrayBuffer) {
    return Array.from(new Uint8Array(arrayBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  },
};
