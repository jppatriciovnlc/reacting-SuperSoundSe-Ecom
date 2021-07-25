import styled from 'styled-components';
import back from '../../assets/img/musician-349790_1920.jpg';

export const Section = styled.section`
    width: 100%;
    height: 90vh;
    
    margin: 0;
    padding: 0;
    background-image: url(${back});
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

export const Logo = styled.p`
    color: #ffff;
    font-size: 60px;
    font-weight: 900;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
`

export const Nav = styled.nav`
    width: 70%;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 450px) {
      height: 150vh;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }     
    
`

export const NavSearchContainer = styled.form`
    min-width: 30vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    
    @media (max-width: 450px) {
      height: 50%;
    }  
`

export const NavSearch = styled.input`
    height: 40px;
    width: 70%;
    border: none;
   
`

export const NavSearchButton = styled.button`
    width: 50px;
    height: 43px;
    background: #f26522;
    color: #fff;
    border: none;
    margin: 0;
    cursor: pointer;
    
`

export const NavCart = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: transparent;
    width: 250px;
    padding-right: 10px;
    border: none;
    font-size: 20px;
    font-weight: 600;
    transition: 1s;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #f26522;
        border-radius: 10px;
        transition: 1s;
    }

    @media (max-width: 450px) {
      padding: 0;
      width: 25px;
    } 
`

export const NavCartP = styled.p`
    margin-left: 10px;   

    @media (max-width: 450px) {
      display: none;
    }  
`

export const Body = styled.div`
    width: 100%;
    min-height: 5vh;
    margin-top: 15vh;;

`

export const BodyP = styled.p`
    color: #fff;
    text-align: center;
    padding-right: 10%;
    padding-left: 45%;
    font-size: 2.5rem;
    word-wrap: break-word;
    font-family: Verdana, Geneva, Tahoma, sans-serif

`