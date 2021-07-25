import * as S from './styled';
import { MdAddCircle, MdRemoveCircle } from'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { render } from '@testing-library/react';


export default function Cart () {

    const history = useHistory();

    const [ nome, setNome ] = useState('');
    const [ cep, setCep ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ rua, setRua ] = useState('');
    const [ ruaNumero, setRuaNumero ] = useState('');

    let itensCarrinho = localStorage.getItem('itemsCarrinho');
    
    let items = JSON.parse(itensCarrinho)

    

    

    

    function routerHome() {
        history.push('/');
    }

    function onSubmit() {
        let endereco = {
            nome : nome,
            cep : cep,
            bairro : bairro,
            cidade : cidade,
            estado : estado,
            rua : rua,
            numero : ruaNumero
        }
        localStorage.setItem('endereco', JSON.stringify(endereco))
    }

    function addCart(item){        
        items.map(el => {
            if( el.id == item.id){
                el.quantidade++;                
            }
        })
        console.log(items)
        localStorage.setItem('itemsCarrinho', JSON.stringify(items)) 
    }

    function removeCart(item){
        let auxId
        items.map(el => {
            if( el.id == item.id){
                el.quantidade--;                
            }
            if(el.quantidade == 0){
                auxId = el.id
            }
        })
        items = items.filter(el => el.id !== auxId)
        console.log(items)
        localStorage.setItem('itemsCarrinho', JSON.stringify(items)) 
        
    }


    return(
        <>
            <S.Section>
                <S.Header>
                    <S.Logo onClick={routerHome}>SuperSoundSe</S.Logo>
                    <S.Title>Carrinho de Compras</S.Title>
                </S.Header>
                <S.Body>
                    <S.Table>
                        <thead>
                            <S.TR>
                                <S.TH>
                                    Quantidade
                                </S.TH>
                                <S.TH>
                                    Produto
                                </S.TH>
                                <S.TH>
                                    Preço
                                </S.TH>
                                
                            </S.TR>
                        </thead>
                        
                        <tbody>
                            {
                                items.map((item,i) => {
                                    return [
                                        <S.TR key={i}>
                                        <S.TD>
                                            {item.quantidade}
                                        </S.TD>
                                        <S.TD>
                                            { item.name }
                                        </S.TD>
                                        <S.TD>
                                            R$ { item.price}
                                        </S.TD>                                        
                                    </S.TR>
                                    ]}
                                    
                                )
                            }
                        </tbody>
                    </S.Table>

                    <S.Table2>
                        <tbody>
                            <S.TR>
                            <S.TH>
                                    Total
                                </S.TH>
                                <S.TH>
                                    R$ 170,00
                                </S.TH>
                            </S.TR>
                        </tbody>
                        
                    </S.Table2>

                    <S.SectionForm>
                        <S.SectionFormP>Insira Seus Dados</S.SectionFormP>
                        <S.Form>
                            <S.InputName placeholder="Nome" onChange={e => setNome(e.target.value)}/>
                            <S.Input placeholder="CEP" onChange={e => setCep(e.target.value)}/>
                            <S.Input placeholder="Bairro" onChange={e => setBairro(e.target.value)}/>
                            <S.Input placeholder="Cidade" onChange={e => setCidade(e.target.value)}/>
                            <S.Input placeholder="Estado" onChange={e => setEstado(e.target.value)}/>                            
                            <S.InputStreet placeholder="Rua" onChange={e => setRua(e.target.value)}/>
                            <S.Input placeholder="Número" onChange={e => setRuaNumero(e.target.value)}/>
                        </S.Form>
                    </S.SectionForm>
                </S.Body>
                <S.ButtonConfirm onClick={onSubmit}>Finalizar</S.ButtonConfirm>
            </S.Section>

        </>
    )
    
}