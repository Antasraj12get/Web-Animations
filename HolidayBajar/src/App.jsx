import './App.css'
import Cards from './components/Cards'
import ImageBoxFirst from './components/ImageGalary'
import ImageBoxTwo from './components/ImageBoxTwo'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Slider from './components/Slider'
import ImgGalary from './components/ImgGalary'
import Footer from './components/Footer'
import ContentBoxTwo from './components/ContntBox2'
import ContentBoxThree from './components/ContentBox3'
import ContentBoxFour from './components/ContentBoxFour'
import Galary from './components/Galary'
import ContentBoxFive from './components/ContentBoxFive'

function App() {
 return (
  <>
  <Navbar/>
  <Slider/>
  <Services/>
  <Cards/>
<ContentBoxTwo/>
  <ImageBoxFirst/>
  <ContentBoxThree/>
  <ImageBoxFirst/>
  <ContentBoxFour/>
  <ImageBoxTwo/>
 <Galary/>
   <ImgGalary/>
   <ContentBoxFive/>
   <ImageBoxTwo/>
   <Footer/>
  </>
 )
}

export default App
