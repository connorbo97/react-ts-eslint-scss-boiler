import { Stats } from './stats';

export enum Skills {
  ACROBATICS = 'ACROBATICS',
  ANIMAL_HANDLING = 'ANIMAL_HANDLING',
  ARCANA = 'ARCANA',
  ATHLETICS = 'ATHLETICS',
  DECEPTION = 'DECEPTION',
  HISTORY = 'HISTORY',
  INSIGHT = 'INSIGHT',
  INTIMIDATION = 'INTIMIDATION',
  INVESTIGATION = 'INVESTIGATION',
  MEDICINE = 'MEDICINE',
  NATURE = 'NATURE',
  PERCEPTION = 'PERCEPTION',
  PERFORMANCE = 'PERFORMANCE',
  PERSUASION = 'PERSUASION',
  RELIGION = 'RELIGION',
  SLEIGHT_OF_HAND = 'SLEIGHT_OF_HAND',
  STEALTH = 'STEALTH',
  SURVIVAL = 'SURVIVAL',
}

type SkillConfig = {
  label: string;
  stat: Stats;
};
export const SKILL_CONFIGS: { [s in Skills]: SkillConfig } = {
  [Skills.ACROBATICS]: {
    label: 'Acrobatics',
    stat: Stats.DEX,
  },
  [Skills.ANIMAL_HANDLING]: {
    label: 'Animal Handling',
    stat: Stats.WIS,
  },
  [Skills.ARCANA]: {
    label: 'Arcana',
    stat: Stats.INT,
  },
  [Skills.ATHLETICS]: {
    label: 'Athletics',
    stat: Stats.STR,
  },
  [Skills.DECEPTION]: {
    label: 'Deception',
    stat: Stats.CHA,
  },
  [Skills.HISTORY]: {
    label: 'History',
    stat: Stats.INT,
  },
  [Skills.INSIGHT]: {
    label: 'Insight',
    stat: Stats.WIS,
  },
  [Skills.INTIMIDATION]: {
    label: 'Intimidation',
    stat: Stats.CHA,
  },
  [Skills.INVESTIGATION]: {
    label: 'Investigation',
    stat: Stats.INT,
  },
  [Skills.MEDICINE]: {
    label: 'Medicine',
    stat: Stats.WIS,
  },
  [Skills.NATURE]: {
    label: 'Nature',
    stat: Stats.INT,
  },
  [Skills.PERCEPTION]: {
    label: 'Perception',
    stat: Stats.WIS,
  },
  [Skills.PERFORMANCE]: {
    label: 'Performance',
    stat: Stats.CHA,
  },
  [Skills.PERSUASION]: {
    label: 'Persuasion',
    stat: Stats.CHA,
  },
  [Skills.RELIGION]: {
    label: 'Religion',
    stat: Stats.INT,
  },
  [Skills.SLEIGHT_OF_HAND]: {
    label: 'Sleight of Hand',
    stat: Stats.DEX,
  },
  [Skills.STEALTH]: {
    label: 'Stealth',
    stat: Stats.DEX,
  },
  [Skills.SURVIVAL]: {
    label: 'Survival',
    stat: Stats.WIS,
  },
};
