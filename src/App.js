import './App.css';

import NavBar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/contact';
import Work from './components/Works/work';

import A from './assets/Archievements/A.jpeg';
import B from './assets/Archievements/B.jpeg';
import C from './assets/Archievements/C.jpeg'; 
import D from './assets/Archievements/D.jpeg';
import E from './assets/Archievements/E.jpeg';


import F from './assets/Projects/F.png';
import G from './assets/Projects/G.png';
import H from './assets/Projects/H.png';
import I from './assets/Projects/I.png';


function App() {
  const images1 = [A,B,C,D,E];

  const images2 = [F,G,H,I];

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <h3 style={{fontSize: '2.5rem',fontWeight: '600',color: '#fff'}}>Key <span style={{color:'cyan'}}> Projects</span></h3>
      <Work images={images2} title={""} />
      <h3 style={{fontSize: '2.5rem',fontWeight: '600',color: '#fff'}}>My <span style={{color:'cyan'}}>Archievements</span></h3>
      <Work images={images1} title={""}/>
      <Contact />
    </div>
  );
}

export default App;
