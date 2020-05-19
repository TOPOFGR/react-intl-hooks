import { renderHook } from '@testing-library/react-hooks';

import { useFormatNumber } from '../src';
import IntlProvider from './utils/IntlProvider';

describe('useFormatNumber', () => {
  it('should be defined', () => {
    expect(useFormatNumber).toBeDefined();
  });

  it('should format the number correctly', () => {
    const { result } = renderHook(() => useFormatNumber(), {
      wrapper: IntlProvider,
    });

    expect(result.current(1000)).toBe('1,000');
  });

  it('should format the percentage correctly', () => {
    const { result } = renderHook(() => useFormatNumber(), {
      wrapper: IntlProvider,
    });

    expect(result.current(0.5, { style: 'percent' })).toBe('50%');
  });

  it('should format the currency correctly', () => {
    const { result } = renderHook(() => useFormatNumber(), {
      wrapper: IntlProvider,
    });

    expect(result.current(1000, { style: 'currency', currency: 'USD' })).toBe(
      '$1,000.00',
    );
  });

  it('should format decimals correctly', () => {
    const { result } = renderHook(() => useFormatNumber(), {
      wrapper: IntlProvider,
    });

    expect(result.current(0.5, { style: 'decimal' })).toBe('0.5');
  });

  it('should format units correctly', () => {
    const { result } = renderHook(() => useFormatNumber(), {
      wrapper: IntlProvider,
    });

    expect(result.current(1000, { style: 'unit', unit: 'kilobyte' })).toBe(
      '1,000 kB',
    );
  });
});
