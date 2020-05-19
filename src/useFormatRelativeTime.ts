import { useIntl, FormatRelativeTimeOptions } from 'react-intl';

type Unit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year';

const useFormatRelativeTime = () => {
  const intl = useIntl();

  return (value: number, unit?: Unit, options?: FormatRelativeTimeOptions) =>
    intl.formatRelativeTime(value, unit, options);
};

export default useFormatRelativeTime;
