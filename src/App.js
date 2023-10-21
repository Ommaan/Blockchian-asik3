import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
    <div className="App">
      <MainMint accounts={accounts} setAccounts={setAccounts} />
      <NavBar accounts={accounts} setAccounts={setAccounts} />
    </div>
    <div className="moving-background"></div>
    </div>
  );
}

export default App;
