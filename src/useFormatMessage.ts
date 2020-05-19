import { useIntl, MessageDescriptor } from 'react-intl';

type MessageFormatPrimitiveValue = string | number | boolean | null | undefined;

type MessageFormatValues = Record<
  string,
  MessageFormatPrimitiveValue | React.ReactElement
>;

const useFormatMessage = () => {
  const intl = useIntl();

  return (message: MessageDescriptor, values?: MessageFormatValues) =>
    intl.formatMessage(message, values);
};

export default useFormatMessage;
