import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    min-height: 90vh;
    
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
`

export const Logo = styled.p`
    color: #f26522;
    font-size: 40px;
    font-weight: 900;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    cursor: pointer;
`

export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    word-wrap: break-word;
    font-family: Verdana, Geneva, Tahoma, sans-serif
`

export const Body = styled.div`
    width: 80%;
    min-width: 700px;
    min-height: 5vh;
    margin-top: 15vh; 
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: flex-end;

`

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  

`

export const TR = styled.tr`
    
&:nth-child(even) {
    background-color: #f2f2f2;
}

&:hover {
    background-color: #ddd;
}

`

export const TH = styled.th`
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f26522;
  color: white;
  border: 1px solid #ddd;

`

export const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;

`

export const ButtonAdd = styled.button`
    width: 50%;
    height: 30px;
    color: #fff;
    background-color: #52a1d4;
    font-size: 15px;
    cursor: pointer;

`

export const ButtonRemove = styled.button`
    width: 50%;
    height: 30px;
    color: #fff;
    background-color: #F23822;
    font-size: 15px;
    cursor: pointer;

`

export const Table2 = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
  margin-top: 40px;
  

`

export const SectionForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    width: 100%;
    border: solid #f26522 3px;
    border-radius: 15px;

`

export const SectionFormP = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    word-wrap: break-word;
    font-family: Verdana, Geneva, Tahoma, sans-serif

`

export const Form = styled.form`
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    
    width: 85%;
`

export const InputName = styled.input`
    height: 40px;
    width: 60%;
    margin-bottom: 15px;
`

export const Input = styled.input`
    height: 40px;
    min-width: 70px;
    width: 30%;
    margin-bottom: 15px;
`

export const InputStreet = styled.input`
    height: 40px;
    min-width: 70px;
    width: 60%;
    margin-bottom: 15px;
`

export const ButtonConfirm = styled.button`
    margin-top: 40px;
    width: 150px;
    height: 40px;
    background: #2b9737;
    color: #fff;
    font-size: 20px;
    font-weight: 550;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 15px;
    border: none;
    cursor: pointer;

    &:hover {
        background: #53cc60;
    }
`
