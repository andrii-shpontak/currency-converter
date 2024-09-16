import { borderRadixColor } from '../shared/constants';

const Loader = () => {
  return (
    <div className='fixed inset-0 w-full h-full bg-bg-frame backdrop-blur-sm flex flex-col items-center justify-center z-[9999]'>
      <div style={borderRadixColor} className='border-t-8  rounded-full w-40 h-40 animate-spin' data-testid='spinner' />
    </div>
  );
};

export default Loader;
