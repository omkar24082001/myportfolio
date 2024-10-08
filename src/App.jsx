import Header from "./Components/Header"
import Body from "./Components/Body"
import About from "./Components/About"
import Footer from "./Components/Footer"
import Skill from "./Components/Skill"
import Project from "./Components/project"
import Socialmedia from "./Components/Socialmedia"
import Resume from "./Components/Resume"
import "./index.css"

function App() {
  

  return (
    <>
      <div className="min-h-screen px-6 py-3 bg-gray-900 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:justify-between">
      <Header/>
      <Body/>
      <Socialmedia/>
      <About />
      <Skill/>
      <Project/>
      <Resume/>
      <Footer/>

       
      </div>
    </>
  )
}

export default App
