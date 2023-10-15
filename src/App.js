//import logo from './logo.svg';
import './App.css';
// import {Parallax,ParallaxLayer} from '@react-spring/parallax';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import waterfall from './waterFalls.jpg';
import rainForest from './rainforest.jpg';
import {Parallax} from 'react-parallax';

function App() {
  return (
    <div>
      {/* This is using react-spring/parallax
      
      <Parallax pages = {3}>
        <ParallaxLayer className='firstPage' offset ={0} speed={1} sticky={{start:0,end:1}} style={{zIndex:-1}} >
        </ParallaxLayer>
        <ParallaxLayer offset ={1.5} speed={-1} style={{backgroundImage:`url(${rainForest})`, backgroundSize:'cover',zIndex:10}}>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={.5}>
            <PageOne/>
        </ParallaxLayer>
      </Parallax> */}

      {/* This is using react-parallax
      
      <header className ="header"> 
       <h1>This is my header</h1>
      
      </header>
      <Parallax className='firstPage' bgImage={waterfall} bgImageAlt="the cat" strength={100}>
        </Parallax>
        <Parallax className='secondPage' bgImage={rainForest} bgImageAlt="the cat" strength={400}>
        </Parallax>
        <Parallax strength={800}>
          <PageOne/>
        </Parallax>
        <Parallax strength={800}>
          <PageTwo/>
        </Parallax> */}

        <section className ="wrapper">
          <div className="photo-container">
            <div className = "firstPage"></div>
            <div className = "secondPage"></div>
          </div>
         
          <div className = "text">
            Sit adipisicing nostrud consectetur qui cupidatat anim dolore aliquip. 
            Sit veniam nisi consequat aute amet et tempor veniam exercitation voluptate fugiat sunt. 
            Reprehenderit sint cillum eiusmod reprehenderit occaecat. <br/><br/>

            Sit adipisicing nostrud consectetur qui cupidatat anim dolore aliquip. 
            Sit veniam nisi consequat aute amet et tempor veniam exercitation voluptate fugiat sunt. 
            Reprehenderit sint cillum eiusmod reprehenderit occaecat.<br/><br/>

            Sit adipisicing nostrud consectetur qui cupidatat anim dolore aliquip. 
            Sit veniam nisi consequat aute amet et tempor veniam exercitation voluptate fugiat sunt. 
            Reprehenderit sint cillum eiusmod reprehenderit occaecat.<br/><br/>

            Sit adipisicing nostrud consectetur qui cupidatat anim dolore aliquip. 
            Sit veniam nisi consequat aute amet et tempor veniam exercitation voluptate fugiat sunt. 
            Reprehenderit sint cillum eiusmod reprehenderit occaecat.<br/><br/>Deserunt irure duis sint dolor proident dolor minim qui est duis in ad non. Dolore irure nostrud id incididunt occaecat dolore proident velit. Laboris cillum amet amet tempor dolor voluptate aliqua eiusmod amet proident nisi ullamco. Amet sunt veniam non excepteur do tempor duis deserunt amet nostrud voluptate nulla pariatur. Commodo tempor dolore commodo aliqua occaecat duis veniam sunt reprehenderit Lorem ut. Elit quis cupidatat nulla cupidatat in quis mollit. Sit est fugiat officia ea in mollit id cillum.

Dolore deserunt exercitation adipisicing duis esse. Ullamco anim sit duis aliqua. Do voluptate et nostrud nisi ullamco consequat proident ipsum adipisicing consectetur. Id sit Lorem ipsum reprehenderit tempor officia culpa. Eu duis eiusmod ex est laboris cupidatat aliqua amet ipsum anim tempor aliqua. Consequat laborum consequat proident nisi aute aliquip. Consequat commodo dolore ullamco ex excepteur enim aliqua qui fugiat pariatur sint.

Ea deserunt ea esse reprehenderit officia. Ex deserunt elit sint reprehenderit est ea deserunt. Lorem eiusmod labore nulla culpa anim voluptate ut dolor excepteur. Minim pariatur occaecat non labore tempor aliqua incididunt eiusmod velit duis duis cillum enim. Labore duis magna ipsum proident Lorem culpa aliquip Lorem proident id enim cillum. Mollit excepteur est ea culpa fugiat.

Officia incididunt cillum in elit duis deserunt aliqua Lorem. Velit et velit nostrud enim occaecat reprehenderit minim qui labore. Tempor aliquip sit nisi et ea dolor. Pariatur non quis et nostrud quis consequat quis veniam consectetur ullamco ex esse magna. Culpa laborum commodo sunt est qui sit nisi voluptate velit laborum incididunt. Aute sunt magna magna id sit. Nostrud ipsum eu incididunt consequat non amet ut laboris veniam deserunt pariatur ea do.

Dolor anim elit aliquip dolor velit aute. Incididunt voluptate mollit sunt irure. Adipisicing ea fugiat aliquip minim non ut. Laboris deserunt magna laborum minim magna commodo sint.

Sint sit labore ut commodo mollit ad. Do ea eu nisi voluptate fugiat velit incididunt enim ad incididunt mollit commodo. Tempor cupidatat voluptate nisi consectetur qui reprehenderit in do minim officia. Eiusmod id consectetur non aliqua voluptate ea eu duis irure non anim dolor. Esse nisi non id excepteur ullamco voluptate aliqua deserunt irure laborum culpa id.

Consectetur et Lorem cillum exercitation amet id. Esse officia sint ipsum sint. Exercitation et aute amet Lorem occaecat officia dolore officia est eiusmod. Commodo quis deserunt voluptate duis voluptate.




          </div>


        </section>

    </div>
  );
}

export default App;
