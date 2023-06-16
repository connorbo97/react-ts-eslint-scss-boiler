import { useCharacterSheet } from 'providers/CharacterSheetProvider';
import styles from './stats.module.scss';
import { STATS_CONFIGS } from 'constants/stats';
import { getModifier } from 'utils/statUtils';
import { addNumberSign } from 'utils/stringUtils';

export const Stats = () => {
  const { stats, onChangeStat } = useCharacterSheet();
  return (
    <div className={styles['container']}>
      <h3>Stats</h3>
      <div>
        {Object.entries(stats).map(([stat, value]) => (
          <div>
            <u>{STATS_CONFIGS[stat].label}:</u>
            <input
              value={value}
              onChange={(e) => onChangeStat(e.target.value, stat)}
              type="number"
              min={1}
              max={30}
            />
            <div>{addNumberSign(getModifier(value))}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
