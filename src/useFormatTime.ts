import { useIntl, FormatDateOptions } from 'react-intl';

type TimeFormatPrimitiveValue = string | number | Date | undefined;

const useFormatTime = () => {
  const intl = useIntl();

  return (value: TimeFormatPrimitiveValue, options?: FormatDateOptions) =>
    intl.formatTime(value, options);
};

export default useFormatTime;
