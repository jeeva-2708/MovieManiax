import './App.css'

import AllRoutes from './routes/AllRoutes'
import Headers from './components/Headers'
import  Footer  from './components/Footer'
import Card from './components/Card'


function App() {

  return (
    <div className='bg-[#0B0C10]'>
      <Headers/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
