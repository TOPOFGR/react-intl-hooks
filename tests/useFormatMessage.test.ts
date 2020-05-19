import { renderHook } from '@testing-library/react-hooks';

import { useFormatMessage } from '../src';
import IntlProvider from './utils/IntlProvider';
import messages from './utils/en.json';

describe('useFormatMessage', () => {
  const { validId, invalidId, defaultMessage, description } = {
    validId: 'test.id',
    invalidId: 'test.invalid.id',
    defaultMessage: 'Default message',
    description: 'Description',
  };

  it('should be defined', () => {
    expect(useFormatMessage).toBeDefined();
  });

  it('should display the translation if the provided id is valid', () => {
    const { result } = renderHook(() => useFormatMessage(), {
      wrapper: IntlProvider,
    });

    expect(
      result.current({
        id: validId,
        defaultMessage,
        description,
      }),
    ).toEqual(messages[validId]);
  });

  it('should display the default message if the provided id is invalid', () => {
    const { result } = renderHook(() => useFormatMessage(), {
      wrapper: IntlProvider,
    });

    expect(
      result.current({
        id: invalidId,
        defaultMessage,
        description,
      }),
    ).toEqual(defaultMessage);
  });
});
