import { useIntl, FormatPluralOptions } from 'react-intl';

const useFormatPlural = () => {
  const intl = useIntl();

  return (value: number, options?: FormatPluralOptions) =>
    intl.formatPlural(value, options);
};

export default useFormatPlural;
