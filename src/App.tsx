import MainContainer from '@/components/MainContainer';
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Toaster />
      <MainContainer />
    </div>
  );
}

export default App;
