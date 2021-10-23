    import React from 'react';
    import './App.css';
    import './pages/dashboard/style.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Charts from'./pages/dashboard/charts.component.js';
    import Search from'./pages/dashboard/search.component.js';
    import Cardcomponent from'./pages/dashboard/card.component.js';
    import Menu from'./pages/dashboard/menu.component.js';
    import Lateral from'./pages/dashboard/lateralmenu.component.js';
    import  Carousel from 'react-bootstrap/Carousel';
    import { MdOutlineGridView} from "react-icons/md";
    import chartsClient from '../src/api/client';
    import Navbar from './pages/dashboard/navbar.component.js';
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';

    class App extends React.Component{
      render() {
        return (
          <>
            <Row>
              <Col xs={1} md={1} sm={1} >
                <Row>
                  <Menu/>
                </Row>
              
              </Col>


              <Col xs={9} md={9} sm={1} className='depth border'>

                <Navbar/>
                <Search/>
                  <Row className='backgroundWhite'>
                    <Charts/>
                  </Row>
                  <Col xs={12} md={9} sm={1} className='marginTitle ' >
                    <h5><MdOutlineGridView/>Empresas recentes</h5>
                  </Col>
                  <Lateral/>
                <Cardcomponent/>
              </Col>

              <Col xs={2} md={2} sm={1} >
                <Menu/>
              </Col>
            </Row>
          </>
        );
      }
    }  
    export default App;
