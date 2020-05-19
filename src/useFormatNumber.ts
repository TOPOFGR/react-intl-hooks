import { useIntl, FormatNumberOptions } from 'react-intl';

const useFormatNumber = () => {
  const intl = useIntl();

  return (value: number, options?: FormatNumberOptions) =>
    intl.formatNumber(value, options);
};

export default useFormatNumber;
