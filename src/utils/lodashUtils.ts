import { fpSet, fpUpdate } from './fpUtils';

export const iSet = (obj, path, val) => {
  return fpSet(path, val, obj);
};

export const iUpdate = (obj, path, updater) => {
  return fpUpdate(path, updater, obj);
};
