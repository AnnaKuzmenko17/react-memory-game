import {Title} from '../Title/Title';
import {LevelButton} from './LevelButton';
import styles from './LevelsModal.module.css';

export const LevelsModal = () => {
  return (
    <div className={styles.levels}>
      <Title text="Levels:" />
      {[3, 6, 9].map((level) => (
        <LevelButton
          key={level}
          level={level}
        />
      ))}
    </div>
  );
};
