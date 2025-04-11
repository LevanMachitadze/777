import { useState } from 'react';
import './index.css';
import Ballance from './components/Ballance';
import Lines from './components/Lines';
import Button from './components/button';
import WinMessage from './components/WinMessage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
        <h1>Welcome To Our Game</h1>
        <div className='border-5 border-red-500 rounded-lg p-5 bg-white shadow-lg min-w-[300px]'>
          <div>
            <WinMessage />
          </div>
          <div>
            <Lines />
          </div>
          <div className='flex flex-row justify-between items-center'>
            <div>
              <Ballance />
            </div>
            <div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
