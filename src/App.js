import { useEffect, useState } from 'react';
import './App.css';
import { ThemProvider } from './context/Them';
import ThemBtn from './components/ThemBtn';
import Card from './components/Card';

function App() {
const [ themMode, setThemMode] = useState("ligth")

const ligthThem=()=>{
  setThemMode("ligth")
}

const darkThem=()=>{
  setThemMode('dark')
}

useEffect(()=>{
  document.querySelector('html').classList.remove('ligth','dark')
  document.querySelector('html').classList.add(themMode)
},[themMode])

  return (
    <>
    <ThemProvider value={{themMode, ligthThem, darkThem}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemProvider>
    </>
  );
}

export default App;
