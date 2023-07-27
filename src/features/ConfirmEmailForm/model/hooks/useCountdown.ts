import { useCallback, useEffect, useRef, useState } from 'react';
import { RESEND_CODE_DELAY_IN_SECONDS } from '../../consts/confirmCode';
import { MILLISECONDS_IN_SECOND } from 'shared/consts/time';

export const useCountdown = () => {
  const countdownId = useRef<NodeJS.Timer>();
  const [leftTimeToResendCode, setLeftTimeToResendCode] = useState<number>(0);
  const isOver = leftTimeToResendCode <= 0;

  const startCountdown = useCallback(() => {
    // Restore previous countdown
    clearInterval(countdownId.current);
    setLeftTimeToResendCode(
      () => RESEND_CODE_DELAY_IN_SECONDS * MILLISECONDS_IN_SECOND,
    );

    // Start new countdown
    countdownId.current = setInterval(() => {
      setLeftTimeToResendCode((prevTime) => {
        const currTime = prevTime - MILLISECONDS_IN_SECOND;

        if (currTime < 0) {
          clearInterval(countdownId.current);
          return 0;
        }

        return currTime;
      });
    }, MILLISECONDS_IN_SECOND);
  }, []);

  useEffect(() => {
    startCountdown();
    return () => clearInterval(countdownId.current);
  }, [startCountdown]);

  return {
    leftTimeToResendCode,
    isOver,
    startCountdown,
  };
};
