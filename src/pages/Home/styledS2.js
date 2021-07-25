import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 90vh;
    
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

export  const Header = styled.div `    
    width: 100%;
    text-align: center;
`

export  const HeaderH = styled.p `
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    margin: 0;
    margin-top: 40px;
`

export  const HeaderP = styled.p `
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
`

export  const Body = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export  const Card = styled.div `
    height: 450px;
    width: 300px;
    border: solid #fff 4px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items: center;
    margin: 10px;
`

export  const CardTitle = styled.p `
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    margin: 0;
    margin-top: 10px;
`

export  const CardPrice = styled.p `
    text-align: center;
    color: #f26522;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    
`

export  const CardImageContainer = styled.div`
    height: 250px;
    width: 290px;;
    background-color: #e8eae3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;

`

export  const CardImage = styled.img`
    height: auto;
    max-width: 100%;
`

export  const CardButton = styled.button `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    background-color: #f26522;
    color: #fff;
    margin-top: 20px;
`

export  const CardButtonP = styled.p `
   font-weight: 600;
   margin-left: 5px;
`