import { fpSet } from './fpUtils';

export const iSet = (obj, path, val) => {
  return fpSet(path, val, obj);
};
