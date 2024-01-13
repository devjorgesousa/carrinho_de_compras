import React, {useEffect, useState} from 'react';
import Main from '../../components/Main/Main';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import pcgamer from './pcgamer.jpg'
import pcgamer2 from './pcgamer2.jpg'
import pcgamer3 from './pcgamer3.jpg'
import Container from 'react-bootstrap/Container';

const produtos = [
    {
        "id": 1,
        "nome": "Computador Pichau Gamer Anúbis V, AMD Ryzen 9 5950X, GeForce RTX 4080 16GB, 32GB DDR4, 2X SSD M.2 1TB", 
        "preco": 13669, 
        "produtoImagem": pcgamer,
    },
    {
        "id": 2,
        "nome": "Computador Pichau Gamer Anúbis, AMD Ryzen 9 5950X, GeForce RTX 4060 8GB, 16GB DDR4, SSD M.2 480GB", 
        "preco": 8499, 
        "produtoImagem": pcgamer2,
    },
    {
        "id": 3,
        "nome": "Computador Pichau Gamer, AMD Ryzen 5 5600, Radeon RX 6650 XT 8GB, 16GB DDR4, SSD M.2 1TB", 
        "preco": 4848, 
        "produtoImagem": pcgamer3,
    }
]

function Home(){

    const [qtd, setQTD] = useState()
    
    const Carrinho = (e) => {
        const id = e.target.id;
        const produto = produtos.filter((item) => item.id == id)
        const itensJSON = localStorage.getItem('itens');
        const itensArray = JSON.parse(itensJSON) || [];

        const itens = {
            id: produto[0].id,
            nome: produto[0].nome,
            preco: produto[0].preco,
            quantidade: qtd,
            produtoImagem: produto[0].produtoImagem,
            total: produto[0].preco * qtd
        }

        const verificarItem = itensArray.filter(item => item.id !== itens.id);

        verificarItem.push(itens);
        
        localStorage.setItem('itens', JSON.stringify(verificarItem)); 
    }

    return(
        <Main>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {produtos.map((item) => (
                    <Col key={item.id}>
                        <Card style={{width: "60%"}}>
                            <Card.Img name="produtoImagem" variant="top" src={item.produtoImagem} />
                            <Card.Body>
                                <Card.Text name="nome">
                                    {item.nome}
                                </Card.Text>
                                <Card.Title name="preco">R$ {item.preco}</Card.Title>
                                <Card.Text><input type='number' style={{width: '25%'}} min='1'  onChange={(e) => setQTD(e.target.value)} /></Card.Text>
                            </Card.Body>
                            <Button id={item.id}  onClick={Carrinho} href='/' variant="dark">Adicionar ao Carrinho</Button>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </Main>
    )
}

export default Home;