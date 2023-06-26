import { useCallback } from 'react';
import { CyrButton } from 'shared/ui';
import styles from './ResendCodeButton.module.scss';
import { formatMsToMinutesAndSeconds } from '../../lib/formatMsToMinutesAndSeconds';
import { useCountdown } from '../../model/hooks/useCountdown';

export const ResendCodeButton = () => {
  const { leftTimeToResendCode, isOver, startCountdown } = useCountdown();

  const handleClick = useCallback(() => {
    startCountdown();
  }, [startCountdown]);

  if (isOver)
    return (
      <CyrButton onClick={handleClick} secondary>
        Resend code
      </CyrButton>
    );

  return (
    <span className={styles.resendTimePrompt}>
      Resend code in a {formatMsToMinutesAndSeconds(leftTimeToResendCode)}
    </span>
  );
};
