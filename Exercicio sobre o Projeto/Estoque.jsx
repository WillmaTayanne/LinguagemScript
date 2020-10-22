import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Try from '../Component/Try.jsx';

export default class Estoque extends React.Component{
    constructor(props){
        super(props)
        this.state = { screen: 'items' };
    }
    Checked(screenValue){
        this.setState({ screen: screenValue });
        const Buttons = Array.from(ReactDOM.findDOMNode(document.querySelector('.EstoqueBoxButtons')).children);
        Buttons.map(button => button.id === `${screenValue}Button` ? button.className = 'btn btn-dark' : button.className = 'btn btn-secondary');
    }
    render(){
        return(
            <div className='ScreenLogin'>
                <div className='EstoqueBox'>
                    <div className='EstoqueBoxButtons'>
                        <button type="button" id='itemsButton' className="btn btn-dark" onClick={() => { this.Checked('items') }}>Itens</button>
                        <button type="button" id='registerButton' className="btn btn-secondary" onClick={() => { this.Checked('register') }}>Cadastrar</button>
                        <button type="button" className="btn btn-secondary">Histórico</button>
                    </div>
                    <Link to="/painel" className='ButtonBack'>
                        <svg viewBox="0 0 16 16" className="bi bi-arrow-left-circle-fill ButtonBackArrow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                        </svg>
                    </Link>
                    <Try if={this.state.screen === 'items'} else={<></>}>
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Cód</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Preço</th>
                                        <th scope="col">Quantidade</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill EstoqueEdit" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash EstoqueDelete" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill EstoqueEdit" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash EstoqueDelete" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill EstoqueEdit" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash EstoqueDelete" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </td>
                                    </tr>
                              </tbody>
                            </table>
                        </div>
                    </Try>
                    <Try if={this.state.screen === 'register'} else={<></>}>
                        <form className='EstoqueFormAdd'>
                          <div className="form-row" id='formRow'>
                            <div className="form-group col-md-6">
                              <label htmlFor="codigo">Codigo</label>
                              <input type="text" className="form-control" id="codigo" placeholder="Codigo"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="produto">Nome do Produto</label>
                              <input type="text" className="form-control" id="produto" placeholder="Nome do Produto"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="quantidade">Quantidade</label>
                              <input type="number" className="form-control" id="quantidade" placeholder="Quantidade"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="validade">Validade</label>
                              <input type="date" className="form-control" id="validade" placeholder="Validade"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="categoria">Categoria</label>
                              <select id="categoria" className="form-control">
                                <option>Escolher...</option>
                                <option>Material de Limpeza</option>
                                <option>Comida</option>
                                <option> Material de Higiene </option>
                              </select>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="preco">Preço</label>
                              <input type="number" className="form-control" id="preco" placeholder="Preço"/>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-secondary">Cadastrar</button>
                        </form>
                    </Try>
                </div>

                        {
                            //Letra A

                            setTimeout(() => {

                            console.log(ReactDOM.findDOMNode(document.querySelector('.EstoqueBox')));
                            console.log(ReactDOM.findDOMNode(document.getElementById('itemsButton')));
                            console.log(ReactDOM.findDOMNode(document.getElementById('registerButton')));
                            console.log(ReactDOM.findDOMNode(document.querySelector('.EstoqueBoxButtons')));

                             //Letra B

                            console.log(ReactDOM.findDOMNode(document.getElementById('itemsButton')));
                            console.log(ReactDOM.findDOMNode(document.getElementById('registerButton')));

                             //Letra C    

                            console.log(ReactDOM.findDOMNode(document.querySelector('.EstoqueBox')));
                            console.log(ReactDOM.findDOMNode(document.querySelector('.EstoqueBoxButtons')));

                             //Letra D

                            console.log(ReactDOM.findDOMNode(document.querySelector('svg.bi')));
                            console.log(ReactDOM.findDOMNode(document.querySelector('button#registerButton')));

                            //Letra E

                            ReactDOM.findDOMNode(document.querySelector('#itemsButton')).textContent = 'Aula JS';
                            ReactDOM.findDOMNode(document.querySelector('#registerButton')).textContent = 'Aula JS'

                        }, 2000) 

                        }
                 
            </div>
        )
    }
}