import ExchangeRate from './ExchangeRate';
import { Link } from '@tanstack/react-router';
import { TabNav } from '@radix-ui/themes';
import { filledRadixColors } from '../shared/constants';

const Header = () => {
  return (
    <header style={filledRadixColors} className='py-2 px-8 h-12 flex justify-between items-center'>
      <TabNav.Root className='flex gap-4'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>
        <Link to='/custom' className='[&.active]:font-bold'>
          Customization
        </Link>
      </TabNav.Root>
      <ExchangeRate />
    </header>
  );
};

export default Header;
