import { useIntl, FormatListOptions } from 'react-intl';

const useFormatList = () => {
  const intl = useIntl();

  return (value: string[], options?: FormatListOptions) =>
    intl.formatList(value, options);
};

export default useFormatList;
