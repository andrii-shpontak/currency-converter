import { Select, Text } from '@radix-ui/themes';

import { exchangeState } from '../utils/atoms';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';

const ExchangeRate = () => {
  const exchangeData = useRecoilValue(exchangeState);
  const [selectedExchange, setSelectedExchange] = useState<string>('0');

  if (!exchangeData) return <></>;

  return (
    <>
      <Text>
        {exchangeData[Number(selectedExchange)].rateBuy} / {exchangeData[Number(selectedExchange)].rateSell}
      </Text>
      <Select.Root onValueChange={setSelectedExchange} defaultValue={selectedExchange}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Label>Select exchange</Select.Label>
            <Select.Separator />
            {exchangeData.map((curr, i) => (
              <Select.Item key={i} value={String(i)}>
                {curr.currencyCodeA.code} / {curr.currencyCodeB.code}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default ExchangeRate;
