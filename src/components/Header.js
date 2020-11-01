import React, { useState } from 'react';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler,  NavbarBrand, Nav, Form, Button, NavLink, Container, Modal } from 'reactstrap';

import {Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import './Header.css'

function Header() {
  const [calculate, setCalculate] = useState(false)
  const [value, setValue] = useState()
  const [years, setYears] = useState()

return (
    <div className="HeaderMainDiv fixed-top">
      <Container>
    <Navbar className='nav'>
    <NavbarBrand className="HeaderNavbarBrand" href="/"> 
      <div className="HeaderLogo ml-5"></div>      
    </NavbarBrand>
    <Nav><NavLink className = "HeaderNavlinks" href="/">КООПЕРАТИВ АШАР</NavLink></Nav>
    <NavbarToggler aria-controls="basic-navbar-nav" />
    <NavbarCollapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <NavLink className = "HeaderNavlinks" href="/">ГЛАВНАЯ</NavLink>
        <NavLink className = "HeaderNavlinks" href="/about-us/:id">О НАС</NavLink>
        <NavLink className = "HeaderNavlinks" href="/questions">ВОПРОСЫ</NavLink>
        <NavLink className = "HeaderNavlinks" href="/contact">КОНТАКТЫ</NavLink>
        <NavLink className = "HeaderNavlinks" onClick={()=>setCalculate(true)}>КАЛЬКУЛЯТОР</NavLink>
        <NavDropdown title="Открой" id="basic-nav-dropdown">
        <NavLink href="/about-us/2">какие то ссылки</NavLink>
        <NavLink href="/about-us/3">какие то ссылки</NavLink>
        <NavLink href="/about-us/4">какие то ссылки</NavLink>
        </NavDropdown>
        
    </Nav>
    </NavbarCollapse>
    </Navbar>
    </Container>


    <Modal isOpen={calculate}>
        <form>
          <input value={value} type="number"></input>
          <input value={years} type="number" min="1" max="10"></input>
          <button type="submit">Рассчитать</button>
          <div>
            <h4>Result</h4>
            <p>asadas</p>
            <p>asdasd</p>
            <p>asdasd</p>
            <p>asdasd</p>
          </div>
        </form>
        <Button onClick={()=>setCalculate(false)}>Close</Button>
      </Modal>
    </div>
    )
}

export default Header