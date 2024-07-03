import base64 from 'base-64';

function decodeData(data) {
  return base64.decode(data);
}

export { decodeData };
