import { SKILL_CONFIGS } from 'constants/skills';
import styles from './skills.module.scss';
import { useCharacterSheet } from 'providers/CharacterSheetProvider';
import { STATS_CONFIGS } from 'constants/stats';

export const Skills = () => {
  const { skills: playerSkills, onToggleSkillProficiency } =
    useCharacterSheet();
  return (
    <div className={styles['container']}>
      <h3>Skills</h3>
      <div>
        {Object.entries(SKILL_CONFIGS).map(([skillType, { label, stat }]) => (
          <div
            key={skillType}
            onClick={() => onToggleSkillProficiency(skillType)}>
            <u>
              {label} ({STATS_CONFIGS[stat].shortLabel})
            </u>
            <span>
              : {playerSkills[skillType]?.proficient ? 'Proficient' : 'Not'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
