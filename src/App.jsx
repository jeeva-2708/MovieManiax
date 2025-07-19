import './App.css'

import AllRoutes from './routes/AllRoutes'
import Headers from './components/Headers'
import  Footer  from './components/Footer'
import ScrollToTop from './components/ScrollToTop '


function App() {

  return (
    <div className='bg-[#0B0C10]  '>
      <Headers/>
      <ScrollToTop/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
