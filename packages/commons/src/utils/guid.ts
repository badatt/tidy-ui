import * as crypto from 'crypto';

const uuid4 = () => {
  return crypto.randomUUID();
};

export default uuid4;
