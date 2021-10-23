import React from 'react';
import '../../App.css';
import '../dashboard/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousel from 'react-bootstrap/Carousel';


class Lateral extends React.Component{
  render() {
    return (
      <>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slidebg=373940"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slidebg=282c34"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slidebg=20232a"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>

        );
      }
    }  
    export default Lateral;
