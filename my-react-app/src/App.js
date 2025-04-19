import React from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app-main">
        <Todo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
