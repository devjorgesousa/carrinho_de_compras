import React, {useState, useEffect} from 'react'
import Main from '../../components/Main/Main';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import excluir from './excluir.svg'

function Carrinho() {
    const [carrinho] = useState(JSON.parse(localStorage.getItem('itens')) || [])
    const itemQtd = carrinho.length
    const [subtotal, setSubTotal] = useState()

    const removerProduto = (id) => {
      const verificarItem = carrinho.filter(item => item.id !== id);

      localStorage.setItem('itens', JSON.stringify(verificarItem));

      window.location.href="/carrinho"
    }

    useEffect(() => {
      const subTotal = carrinho.reduce((somar, produto) => {
        return somar + produto.total;
      }, 0);
      setSubTotal(subTotal);
    })

    return(
        <Main>
          <Container>
            <h2>Todos os itens ({itemQtd})</h2>

            <Table striped bordered size="sm">
                <thead>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Preço</th>
                  <th>Total</th>
                  <th>Excluir</th>
                </thead>
                <tbody>
                {carrinho?.length > 0 ? (
                carrinho?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Figure>
                        <Figure.Image style={{ width: "50px", borderRadius: "5px"}} alt="Poster do Filme" src={item.produtoImagem} />
                      </Figure>
                      {item.nome}
                    </td>
                    <td>{item.quantidade}</td>
                    <td>R$ {item.preco}</td>
                    <td>R$ {item.total}</td>
                    <td><img src={excluir} alt='excluir' onClick={() => {removerProduto(item.id)}} /></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>Sem Produtos no Carrinho</td>
                </tr>
              )}
              </tbody>
            </Table>
            <span style={{fontWeight: 'bold'}}>SubTotal: R$ {subtotal}</span>
          </Container>
        </Main>
    )
}

export default Carrinho;