import CryptoTable from './features/crypto/CryptoTable';
import './App.css'

function App() {
 
  return (
    <>
  <div className='container'>
    <h1 style={{textAlign: 'center', margin: '1rem 0'}}>Real-Time Crypto Tracker</h1>
    <CryptoTable/>
  </div>
    </>
  )
}

export default App
