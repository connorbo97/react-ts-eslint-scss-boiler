import { Skills } from './skills';
import { Stats } from './stats';

export type CharacterSheet = {
  name: string;
  stats: {
    [s in Stats]: number;
  };
  skills: {
    [s in Skills]?: {
      proficient?: boolean;
      expertise?: boolean;
      mod?: number;
    };
  };
};
