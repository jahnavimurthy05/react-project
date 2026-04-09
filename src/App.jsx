// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import coffeeimg from './assets/coffee.jpg';
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <div  id="you">
//     <h1>HELLO ,I AM JAHNAVI MURTY SN </h1>
//     <img src={coffeeimg} alt="Coffee Latte Art" className="hero-image" width="400" height="300" />
//     <p>My name is Jahnavi Murty SN. I am a passionate web developer with a love for creating beautiful 
//       and functional websites. I have experience in HTML, CSS, JavaScript, and React. I enjoy learning 
//       new technologies and staying up-to-date with the latest trends in web development.</p>
//     <h2>Welcome to React!</h2>
//     <p>Let's build something amazing together.</p>
//     <p>This is the paragraph tag.</p>
//     <p>let's start building!</p>
   
//    </div>
//   )
// }

//-------------------------------------------------------------------------------------------------------------------------------------------
// import { Dummy } from "./components/dummy";
// const App=()=>{
//   return(
    
//   <>
//   <p>hello from app.jsx</p>
//   <Dummy />
//   </>
//   )
// }
// export default App;
//----------------------------------------------------------------------------------------------------------------------------------
// import { HomePage } from "./pages/HomePage";
// import { WelcomeToFamil } from "./pages/WelcomeToFamil";
// import { Treatment } from "./pages/Treatment";
// import { OurDentist } from "./pages/OurDentist";

// const App=()=>
// {
//   return(
//     <>
//     <HomePage/>
//     <WelcomeToFamil/>
//     <Treatment/>
//     <OurDentist/>
    
//     </>
//   )
// }//--------------------------------------------------------------------------------------------------------------------------------

import { Hooks } from "./components/hooks";
import { TextHooks } from "./components/TextHooks";

const App=()=>{
  return (
    <>
    <Hooks/>
    <hr></hr>
    <TextHooks/>
    <hr></hr>
    </>
  )
}
export default App;