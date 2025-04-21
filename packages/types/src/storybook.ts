import { Status } from './props';

const statusArgTypes = {
  control: 'select',
  options: Object.keys(Status).filter((i) => isNaN(Number(i))),
};

export { statusArgTypes };
