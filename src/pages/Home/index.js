import { FaShoppingCart, FaSearch, FaCartPlus } from'react-icons/fa';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S1 from './styled';
import * as S2 from './styledS2';

import produtos from '../../produtos';


export default function Home(){

    const history = useHistory();

    const [ search, setSearch ] = useState('');

    let items = produtos;
    let searched = [];

    let selected = [];

    function searching(e) {
        e.preventDefault();
        searched = []
        items.map(item => {
            if(item.name.indexOf(search) !== -1){
                searched.push(item)
            }
            return searched
        })
        items = searched;
        console.log(JSON.stringify(items))
    }

    function routerCart() {
        history.push('/cart');
    }

    function addCart(item) {
        let existFlag = false;
        selected.map(el => {
            if( el.id == item.id){
                el.quantidade++;
                existFlag = true;
            }
        })
        if(!existFlag){
            let addedItem = item;
            addedItem.quantidade = 1;
            selected.push(addedItem)  
        }
        localStorage.setItem('itemsCarrinho', JSON.stringify(selected)) 
        console.log(selected)
    }

    const element = (
        <>
            <S1.Section>
                <S1.Logo>SuperSoundSe</S1.Logo>
                <S1.Nav>
                    <S1.NavSearchContainer>
                        <S1.NavSearch placeholder="Pesquise o Instrumento" onChange={e => setSearch(e.target.value)}></S1.NavSearch>
                        <S1.NavSearchButton onClick={searching}>
                            <FaSearch/>
                        </S1.NavSearchButton>
                    </S1.NavSearchContainer>
                    <S1.NavCart onClick={routerCart}>
                        <FaShoppingCart/> 
                        <S1.NavCartP>Meu Carrinho</S1.NavCartP>
                    </S1.NavCart>
                </S1.Nav>
                
                <S1.Body>
                    <S1.BodyP>
                        Encontre aqui o instrumento.
                    </S1.BodyP>
                    <S1.BodyP>
                        Encontre em você o talento.
                    </S1.BodyP>
                </S1.Body>
            </S1.Section>
            <S2.Section>
                <S2.Header>
                    <S2.HeaderH>Instrumentos Musicais</S2.HeaderH>
                    <S2.HeaderP>Selecione os itens para colocar no carrinho</S2.HeaderP>
                </S2.Header>
                <S2.Body>
                    { 
                        items.map(item => 
                            <S2.Card key={item.id}>
                                <S2.CardTitle>{item.name}</S2.CardTitle>
                                <S2.CardPrice>Por apenas: R$ {item.price}</S2.CardPrice>
                                <S2.CardImageContainer>
                                    <S2.CardImage src={item.image}/>
                                </S2.CardImageContainer>                       
                                
                                <S2.CardButton onClick={() => addCart(item)}>
                                    <FaCartPlus/>
                                    <S2.CardButtonP>
                                        Adicionar ao Carrinho
                                    </S2.CardButtonP>
                                </S2.CardButton>
                            </S2.Card>
                        )
                    }
                    
                </S2.Body>
            </S2.Section>
        </>    
    )


    return(
      element
      )
}