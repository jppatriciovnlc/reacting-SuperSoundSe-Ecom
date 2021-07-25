import * as S from './styled';
import { MdAddCircle, MdRemoveCircle } from'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


export default function Cart () {

    const history = useHistory();

    const [ nome, setNome ] = useState('');
    const [ cep, setCep ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ rua, setRua ] = useState('');
    const [ ruaNumero, setRuaNumero ] = useState('');

    

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


    return(
        <>
            <S.Section>
                <S.Header>
                    <S.Logo onClick={routerHome}>SuperSoundSe</S.Logo>
                    <S.Title>Carrinho de Compras</S.Title>
                </S.Header>
                <S.Body>
                    <S.Table>
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
                            <S.TH>
                                Ações
                            </S.TH>
                        </S.TR>
                        <S.TR>
                            <S.TD>
                                1
                            </S.TD>
                            <S.TD>
                                Guitarra
                            </S.TD>
                            <S.TD>
                                R$ 170,00
                            </S.TD>
                            <S.TD>
                                <S.ButtonAdd>
                                    <MdAddCircle/>
                                </S.ButtonAdd>
                                <S.ButtonRemove>
                                    <MdRemoveCircle/>
                                </S.ButtonRemove>
                            </S.TD>
                        </S.TR>
                    </S.Table>

                    <S.Table2>
                        <S.TR>
                           <S.TH>
                                Total
                            </S.TH>
                            <S.TH>
                                R$ 170,00
                            </S.TH>
                        </S.TR>
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