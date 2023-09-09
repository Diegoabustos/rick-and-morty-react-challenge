import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharactersList from "./components/CharactersList/CharactersList"
import CharacterDetails from './components/CharacterDetails/CharacterDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App