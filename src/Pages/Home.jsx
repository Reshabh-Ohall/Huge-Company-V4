import DynamicHeader from '../Components/Header/DUI'
import Navbar from '../Components/Navigation/Navbar'
import Search from '../Components/Search/Search'
import Hero from '../Components/Hero/Hero'
import QA from '../Components/Q&A/Q&A'
import ClarityEngines from '../Components/ClarityEngines/DUI'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <>
      <DynamicHeader />
      <Navbar />
      <Search />
      <Hero />
      <QA />
      <ClarityEngines />
      <Footer />
    </>
  )
}