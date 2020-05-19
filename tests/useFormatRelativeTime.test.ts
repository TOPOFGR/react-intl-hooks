import { renderHook } from '@testing-library/react-hooks';

import { useFormatRelativeTime } from '../src';
import IntlProvider from './utils/IntlProvider';

describe('useFormatRelativeTime', () => {
  it('should be defined', () => {
    expect(useFormatRelativeTime).toBeDefined();
  });

  it('should display a past time correctly', () => {
    const { result } = renderHook(() => useFormatRelativeTime(), {
      wrapper: IntlProvider,
    });

    expect(result.current(-1)).toEqual('1 second ago');
  });

  it('should display a future time correctly', () => {
    const { result } = renderHook(() => useFormatRelativeTime(), {
      wrapper: IntlProvider,
    });

    expect(result.current(1)).toEqual('in 1 second');
  });

  it('should display hours correctly', () => {
    const { result } = renderHook(() => useFormatRelativeTime(), {
      wrapper: IntlProvider,
    });

    expect(result.current(1, 'hour')).toEqual('in 1 hour');
  });

  it('should display days correctly', () => {
    const { result } = renderHook(() => useFormatRelativeTime(), {
      wrapper: IntlProvider,
    });

    expect(result.current(1, 'day')).toEqual('in 1 day');
  });
});
