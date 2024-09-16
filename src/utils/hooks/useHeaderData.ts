import { useCallback, useEffect, useState } from 'react';

import { get } from '../services';

export const useHeaderData = () => {
  const [currencies, setCurrencies] = useState();

  const fetchCurrData = useCallback(async () => {
    const { data, error } = await get();
    console.log(data, error);
  }, []);

  useEffect(() => {
    fetchCurrData();
    // only when mounting the component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { currencies };
};
