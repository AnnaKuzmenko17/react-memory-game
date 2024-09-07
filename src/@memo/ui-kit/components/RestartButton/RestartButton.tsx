import {Button} from '../Button/Button';
import {ButtonColor} from '../Button/types';
import {useRestartButton} from './useRestartButton';

export const RestartButton = () => {
  const handleRestart = useRestartButton();

  return (
    <Button
      onClick={handleRestart}
      color={ButtonColor.PRIMARY}
    >
      Restart
    </Button>
  );
};
