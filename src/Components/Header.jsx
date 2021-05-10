import React, {Component} from 'react'
import {Navbar , Nav ,Form ,Container,FormControl,Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import logo from '../logo192.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";


export default class Header extends Component {
    render() {
        return (
                <>
                <Navbar className='p-3 d-flex justify-content-between' bg="light" expand="lg">
                    <Container className=''>
                    <Navbar.Brand href="/">
                        <img src={logo}
                             width={30}
                             height={30}
                             alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    </Container>
                    <Form className='d-inline-flex'>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Navbar>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/blog' component={Blog}/>
                        </Switch>
                    </Router>
                    </>
        )
    }
}