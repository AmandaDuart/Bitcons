    import React from 'react';
    import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Charts from'./pages/dashboard/charts.component.js';
    import Search from'./pages/dashboard/search.component.js';
    import Cardcomponent from'./pages/dashboard/card.component.js';
    import { MdGridView } from "react-icons/md";
    import { MdOutlineGridView} from "react-icons/md";
    class App extends React.Component{
      render() {
        return (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light marginNav">
              <a className="navbar-brand" href="/" className='dashboard'> <MdGridView /> Dashboard</a>
              <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarMenu" 
                aria-controls="navbarMenu">
                <span className="navbar-toggler-icon"></span>
              </button>
             
            </nav>
            <Search/>

            <Charts/>
              <h5><MdOutlineGridView/>Empresas recentes</h5>
            <Cardcomponent/>
          </>
        );
      }
    }  
    export default App;
