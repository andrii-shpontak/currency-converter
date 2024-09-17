import type { TConverterValues, TUseConverterHandlersProps } from '../../shared/types';

import { useCallback } from 'react';

export const useConverterHandlers = ({
  exchangeData,
  converterValues,
  setConverterValues,
}: TUseConverterHandlersProps) => {
  const getExchangeRate = useCallback(
    (fromCurrency: string, toCurrency: string) => {
      const rateData = exchangeData?.find(
        rate =>
          (rate.currencyCodeA.currency === fromCurrency && rate.currencyCodeB.currency === toCurrency) ||
          (rate.currencyCodeA.currency === toCurrency && rate.currencyCodeB.currency === fromCurrency),
      );

      if (!rateData) return 1;

      return fromCurrency === rateData.currencyCodeA.currency ? rateData.rateBuy : 1 / rateData.rateSell;
    },
    [exchangeData],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = Number(e.target.value);
      const valueKey = e.currentTarget.getAttribute('data-input-id') as keyof TConverterValues;

      const oppositeKey: keyof TConverterValues = valueKey === 'a' ? 'b' : 'a';

      const rate = getExchangeRate(converterValues[valueKey].selectValue, converterValues[oppositeKey].selectValue);

      setConverterValues(prevValues => ({
        ...prevValues,
        [valueKey]: {
          ...prevValues[valueKey],
          inputValue: String(inputValue),
        },
        [oppositeKey]: {
          ...prevValues[oppositeKey],
          inputValue: String((inputValue * rate).toFixed(2)),
        },
      }));
    },
    [converterValues, getExchangeRate, setConverterValues],
  );

  const handleSelectChange = useCallback(
    (value: string, key: keyof TConverterValues) => {
      const isLeft = key === 'a';

      const rate = isLeft
        ? getExchangeRate(value, converterValues.b.selectValue)
        : getExchangeRate(converterValues.a.selectValue, value);

      setConverterValues(prevValues => ({
        a: {
          ...prevValues.a,
          selectValue: isLeft ? value : prevValues.a.selectValue,
        },
        b: {
          ...prevValues.b,
          selectValue: !isLeft ? value : prevValues.b.selectValue,
          inputValue: String((Number(prevValues.a.inputValue) * rate).toFixed(2)),
        },
      }));
    },
    [converterValues, getExchangeRate, setConverterValues],
  );

  const reverseInputs = useCallback(() => {
    setConverterValues(prevValues => {
      const rate = getExchangeRate(prevValues.b.selectValue, prevValues.a.selectValue);

      return {
        a: {
          ...prevValues.b,
          inputValue: prevValues.b.inputValue,
        },
        b: {
          ...prevValues.a,
          inputValue: String((Number(prevValues.b.inputValue) * rate).toFixed(2)),
        },
      };
    });
  }, [getExchangeRate, setConverterValues]);

  return { handleInputChange, handleSelectChange, reverseInputs };
};
