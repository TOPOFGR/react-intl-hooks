import { renderHook } from '@testing-library/react-hooks';

import { useFormatTime } from '../src';
import IntlProvider from './utils/IntlProvider';

describe('useFormatTime', () => {
  it('should be defined', () => {
    expect(useFormatTime).toBeDefined();
  });

  it('should display the time formated correctly', () => {
    const { result } = renderHook(() => useFormatTime(), {
      wrapper: IntlProvider,
    });

    expect(result.current(new Date('3/4/2016'))).toEqual('12:00 AM');
  });
});
