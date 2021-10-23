import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { MdSearch } from "react-icons/md";


class Search extends React.Component{
    render(){
        return(
            <>
            <Col xs={2} md={4}>
                <Form className="d-flex search">
                        <FormControl type="search" placeholder="Search" className="me-1" aria-label="Search"/>
                    <Button variant="primary"><MdSearch /> </Button>
                </Form>
            </Col>

            </>
        )
    }
}
export default Search;