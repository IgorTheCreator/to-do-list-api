import base64 from 'base-64';

function hashData(data) {
  return base64.encode(data);
}

export { hashData };
