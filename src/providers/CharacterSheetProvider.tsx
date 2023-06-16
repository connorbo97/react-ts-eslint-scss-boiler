import { CharacterSheet } from 'constants/characterSheet';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { noop } from 'lodash';
import { iSet, iUpdate } from 'utils/lodashUtils';

type CharacterSheetContextValue = {
  sheet: CharacterSheet;
  setSheet: Function;
};
const initialSheet = {
  name: 'Placeholder',
  stats: {
    STR: 10,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10,
  },
  skills: {},
};
const initialState: CharacterSheetContextValue = {
  sheet: initialSheet,
  setSheet: noop,
};

const CharacterSheetContext = createContext(initialState);

export const CharacterSheetProvider = ({ ...rest }) => {
  const [sheet, setSheet] = useState(initialSheet);

  const value = useMemo(
    () => ({
      sheet,
      setSheet,
    }),
    [sheet],
  );
  return <CharacterSheetContext.Provider value={value} {...rest} />;
};

export const useCharacterSheet = () => {
  const { sheet, setSheet } = useContext(CharacterSheetContext);
  const { name, stats, skills } = sheet;

  const onChangeName = useCallback(
    (val) => {
      setSheet(iSet(sheet, 'name', val));
    },
    [setSheet, sheet],
  );

  const onChangeStat = useCallback(
    (val, stat) => {
      setSheet(iSet(sheet, `stats.${stat}`, val));
    },
    [setSheet, sheet],
  );

  const onChangeSkill = useCallback(
    (newVal, skill) => {
      setSheet(iSet(sheet, `skills.${skill}`, newVal));
    },
    [setSheet, sheet],
  );

  const onToggleSkillProficiency = useCallback(
    (skill) => {
      setSheet(
        iUpdate(sheet, `skills.${skill}`, (prev) => ({
          ...prev,
          proficient: !prev?.proficient,
        })),
      );
    },
    [setSheet, sheet],
  );

  return {
    sheet,
    setSheet,

    name,
    onChangeName,

    stats,
    onChangeStat,

    skills,
    onChangeSkill,
    onToggleSkillProficiency,
  };
};
