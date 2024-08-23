import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import InicioPage from "./pages/Landing"
import TrainingInicioPage from "./pages/TrainingInicio"
import BoostInicioPage from "./pages/BoostInicio"
import ConectInicioPage from "./pages/ConnectInicio"



function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >         
                <Route index element={<InicioPage />} />
                <Route path="traininghome" element={<TrainingInicioPage />} />
                <Route path="boosthome" element={<BoostInicioPage />} />
                <Route path="connecthome" element={<ConectInicioPage />} />
                <Route path="home" element={<InicioPage />} />            
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

