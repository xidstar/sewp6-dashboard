import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App = () => {
  return (
    <div className="dashboard rounded-md w-full h-screen bg-stone-300">
      <div className="flex">
        <Sidebar />
        <div className="main-body w-full">
          <Header />
        </div>
      </div>
    </div>
  )
}

export default App
