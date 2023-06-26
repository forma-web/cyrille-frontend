import { MILLISECONDS_IN_SECOND, SECONDS_IN_MINUTE } from 'shared/consts/time';

export const formatMsToMinutesAndSeconds = (ms: number) => {
  const totalTimeInSeconds = Math.floor(ms / MILLISECONDS_IN_SECOND);
  const seconds = totalTimeInSeconds % SECONDS_IN_MINUTE;
  const minutes = Math.floor(totalTimeInSeconds / SECONDS_IN_MINUTE);

  return [minutes, seconds]
    .map((timeSection) => String(timeSection).padStart(2, '0'))
    .join(':');
};
