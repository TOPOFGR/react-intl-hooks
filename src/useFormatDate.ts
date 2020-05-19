import { useIntl, FormatDateOptions } from 'react-intl';

type DateFormatPrimitiveValue = string | number | Date | undefined;

const useFormatDate = () => {
  const intl = useIntl();

  return (value: DateFormatPrimitiveValue, options?: FormatDateOptions) =>
    intl.formatDate(value, options);
};

export default useFormatDate;
