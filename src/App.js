//import logo from './logo.svg';
import './App.css';
import {Parallax,ParallaxLayer} from '@react-spring/parallax';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function App() {
  return (
    <div>
      <Parallax pages = {2}>
        <ParallaxLayer offset ={0} speed={1} style={{zIndex:1}} >
           <PageOne/>
        </ParallaxLayer>
        <ParallaxLayer offset ={1} speed={.5} style={{zIndex:2}}>
          <PageTwo/>
        </ParallaxLayer>
      </Parallax>

    </div>
  );
}

export default App;
