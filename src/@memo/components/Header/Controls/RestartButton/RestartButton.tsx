import {Button} from '@memo/components/Button/Button';
import {ButtonColor} from '@memo/components/Button/types';

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
