import { renderHook } from '@testing-library/react-hooks';

import { useFormatDate } from '../src';
import IntlProvider from './utils/IntlProvider';

describe('useFormatDate', () => {
  it('should be defined', () => {
    expect(useFormatDate).toBeDefined();
  });

  it('should display the date formated correctly', () => {
    const { result } = renderHook(() => useFormatDate(), {
      wrapper: IntlProvider,
    });

    expect(
      result.current(new Date('3/4/2016'), {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }),
    ).toEqual('3/4/2016');
  });

  it('should display the date formated correctly', () => {
    const { result } = renderHook(() => useFormatDate(), {
      wrapper: IntlProvider,
    });

    expect(
      result.current(new Date('3/4/2016'), {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    ).toEqual('Fri, Mar 4, 2016');
  });
});
