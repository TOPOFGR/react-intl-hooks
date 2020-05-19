import { renderHook } from '@testing-library/react-hooks';

import { useFormatList } from '../src';
import IntlProvider from './utils/IntlProvider';

describe('useFormatList', () => {
  it('should be defined', () => {
    expect(useFormatList).toBeDefined();
  });

  it('should display the translation if the provided id is valid', () => {
    const { result } = renderHook(() => useFormatList(), {
      wrapper: IntlProvider,
    });

    expect(result.current(['5 hours', '3 minutes'], { type: 'unit' })).toEqual(
      '5 hours, 3 minutes',
    );
  });
});
