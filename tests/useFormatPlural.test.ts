import { renderHook } from '@testing-library/react-hooks';

import { useFormatPlural } from '../src';
import IntlProvider from './utils/IntlProvider';

describe('useFormatPlural', () => {
  it('should be defined', () => {
    expect(useFormatPlural).toBeDefined();
  });

  it('should format plural correctly', () => {
    const { result } = renderHook(() => useFormatPlural(), {
      wrapper: IntlProvider,
    });

    expect(result.current(0)).toBe('other');
  });
});
