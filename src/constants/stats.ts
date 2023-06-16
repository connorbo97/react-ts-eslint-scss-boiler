export enum Stats {
  STR = 'STR',
  DEX = 'DEX',
  CON = 'CON',
  INT = 'INT',
  WIS = 'WIS',
  CHA = 'CHA',
}

type StatsConfig = {
  label: string;
  shortLabel: string;
};
export const STATS_CONFIGS: { [s in Stats]: StatsConfig } = {
  STR: {
    label: 'Strength',
    shortLabel: 'Str',
  },
  DEX: {
    label: 'Dexterity',
    shortLabel: 'Dex',
  },
  CON: {
    label: 'Constitution',
    shortLabel: 'Con',
  },
  INT: {
    label: 'Intelligence',
    shortLabel: 'Int',
  },
  WIS: {
    label: 'Wisdom',
    shortLabel: 'Wis',
  },
  CHA: {
    label: 'Charisma',
    shortLabel: 'Cha',
  },
};