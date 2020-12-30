import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/Subcontent';
import Advertisement from './components/Advertisment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
                
function App() {
  return (
    <div className="p-2 bg-light">
        <Header/>
        <div className="d-flex col-12 p-0 my-4 justify-content-start">
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
        </div>
    </div>
  );
}
                
export default App;
