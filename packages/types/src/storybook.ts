import { Status, Tone } from './props';

const statusArgTypes = {
  control: 'select',
  options: Object.keys(Status).filter((i) => isNaN(Number(i))),
};

const toneArgTypes = {
  control: 'select',
  options: Object.keys(Tone).filter((i) => isNaN(Number(i))),
};

export { statusArgTypes, toneArgTypes };
