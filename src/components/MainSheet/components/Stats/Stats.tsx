import { useCharacterSheet } from 'providers/CharacterSheetProvider';
import styles from './stats.module.scss';
import { STATS_CONFIGS } from 'constants/stats';

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
            />
          </div>
        ))}
      </div>
    </div>
  );
};
