
import { GoogleButton } from './auth/google';
import { FacebookButton } from './auth/facebook'
import { InstagramButton } from './auth/instagram';
import TwitterLogin from 'react-twitter-login';
function App() {
  return (
    <div
      className='min-h-screen bg-gray-400 flex items-center justify-center'
    >
      <div className='w-full md:w-1/4 flex flex-col items-center space-y-3'>
        <GoogleButton  />

        <FacebookButton />

        <InstagramButton  />

        {/* <TwitterLogin/> */}

      </div>
    </div>
  );
}

export default App;
