import { useState , useContext } from 'react'
import './App.css'
import { ContacProvider } from './ContactContex'
import Contacts from './components/Contacts'

function App() {
  const [count, setCount] = useState('easdasd')

  return (
<ContacProvider>
    <Contacts/>
</ContacProvider>
  )
}

export default App
