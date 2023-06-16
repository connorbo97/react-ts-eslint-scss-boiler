import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { CharacterSheet } from 'constants/characterSheet';
import { iSet } from 'utils/lodashUtils';
import { noop } from 'lodash';

type CharacterSheetContextValue = {
  sheet: CharacterSheet;
  setSheet: any;
};
const initialSheet = { name: '' };
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
  const { name } = sheet;

  const onChangeName = useCallback(
    (val) => {
      setSheet(iSet(sheet, 'name', val));
    },
    [setSheet, sheet],
  );

  return {
    sheet,
    setSheet,

    name,
    onChangeName,
  };
};
