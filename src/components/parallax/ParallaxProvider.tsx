import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from './ParallaxComponent';

const App = () => {
  return (
      <ParallaxProvider>
        <ParallaxComponent />
      </ParallaxProvider>
    );
}

export default App;