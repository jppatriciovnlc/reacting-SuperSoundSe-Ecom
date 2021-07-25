import { FaShoppingCart, FaSearch, FaCartPlus } from'react-icons/fa';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S1 from './styled';
import * as S2 from './styledS2';

import image from '../../assets/img/guitar-2925274_1920.jpg';


export default function Home(){

    const history = useHistory();

    let items = [
        {
            id: "001",
            name: "Guitarra Super Bonitona",
            price: "1600,00",
            image: image
        }
    ]

    let searched = [];

    let selected = [];

    function routerCart() {
        history.push('/cart');
    }
    return(
        <>
            <S1.Section>
                <S1.Logo>SuperSoundSe</S1.Logo>
                
                <S1.Nav>
                    <S1.NavSearchContainer>
                        <S1.NavSearch placeholder="Pesquise o Instrumento"></S1.NavSearch>
                        <S1.NavSearchButton>
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
                            <S2.Card>
                                <S2.CardTitle>{item.name}</S2.CardTitle>
                                <S2.CardPrice>Por apenas: R$ {item.price}</S2.CardPrice>
                                <S2.CardImageContainer>
                                    <S2.CardImage src={item.image}/>
                                </S2.CardImageContainer>                       
                                
                                <S2.CardButton>
                                    <FaCartPlus/>
                                    <S2.CardButtonP>Adicionar ao Carrinho</S2.CardButtonP>
                                </S2.CardButton>
                            </S2.Card>
                        )
                    }
                    
                </S2.Body>
            </S2.Section>

            
            
        </>
    )
}