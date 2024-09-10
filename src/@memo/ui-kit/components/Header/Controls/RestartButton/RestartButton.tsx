import {Button} from '@memo/ui-kit/components/Button/Button';
import {ButtonColor} from '@memo/ui-kit/components/Button/types';

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
