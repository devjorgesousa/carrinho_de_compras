import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './carrinho.svg'

function Menu () {
  const [carrinho] = useState(JSON.parse(localStorage.getItem('itens')) || [])

  const qtd = carrinho.length; 

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Carrinho de Compras</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a style={{textDecoration: 'none'}} href="/carrinho"> <img src={logo} width="20" height="20" className="d-inline-block align-top" alt="logo" /> </a>
            <span style={{fontSize: '15px', fontWeight: 'bold'}}> {qtd}</span> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;