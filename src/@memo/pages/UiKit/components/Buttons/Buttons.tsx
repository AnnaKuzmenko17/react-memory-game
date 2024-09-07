import {Button} from '@memo/ui-kit/components/Button/Button';

import styles from './Buttons.module.css';
import {buttonsConfig} from './constants';

export const Buttons = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles.buttons}>
      {buttonsConfig.map((button) => (
        <Button
          key={button.id}
          color={button.color}
          onClick={handleClick}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};
