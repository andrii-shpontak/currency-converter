import { Card, Flex, Grid, Heading, IconButton, TextField } from '@radix-ui/themes';
import { filledRadixColors, initialConverterValues } from '../shared/constants';
import { useMemo, useState } from 'react';

import { CustomSelect } from '../shared/customComponents';
import type { TConverterValues } from '../shared/types';
import arrowsIcon from '../assets/arrowsIcon.svg';
import { exchangeState } from '../utils/atoms';
import { useConverterHandlers } from '../utils/hooks';
import { useRecoilValue } from 'recoil';

const MainPage = () => {
  const [converterValues, setConverterValues] = useState<TConverterValues>(initialConverterValues);
  const exchangeData = useRecoilValue(exchangeState);

  const { handleInputChange, handleSelectChange, reverseInputs } = useConverterHandlers({
    exchangeData,
    converterValues,
    setConverterValues,
  });

  const currenciesArray = useMemo(() => {
    let currArray: string[] = [];

    exchangeData?.forEach(curr => {
      currArray.push(curr.currencyCodeA.currency);
      currArray.push(curr.currencyCodeB.currency);
    });

    const result = new Set(currArray);

    return Array.from(result);
  }, [exchangeData]);

  return (
    <Card style={filledRadixColors}>
      <Flex gap='5' align='center' direction='column'>
        <Heading>Converter</Heading>
        {/* Left */}
        <Grid columns='1fr 0.5fr 1fr'>
          <Flex direction='column' gap='3'>
            <CustomSelect
              value={converterValues.a.selectValue}
              onChange={handleSelectChange}
              items={currenciesArray}
              selectId='a'
            />
            <TextField.Root
              type='number'
              value={converterValues.a.inputValue}
              onChange={handleInputChange}
              data-input-id='a'>
              <TextField.Slot />
            </TextField.Root>
          </Flex>

          <Flex align='center' justify='center'>
            <IconButton radius='full' variant='soft' onClick={reverseInputs}>
              <img src={arrowsIcon} alt='arrowIcons' />
            </IconButton>
          </Flex>
          {/* Right */}
          <Flex direction='column' gap='3'>
            <CustomSelect
              value={converterValues.b.selectValue}
              onChange={handleSelectChange}
              items={currenciesArray}
              selectId='b'
            />
            <TextField.Root
              type='number'
              value={converterValues.b.inputValue}
              onChange={handleInputChange}
              data-input-id='b'>
              <TextField.Slot />
            </TextField.Root>
          </Flex>
        </Grid>
      </Flex>
    </Card>
  );
};

export default MainPage;
