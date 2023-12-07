import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    color: white;
    background-color: black;
    font-size: 14px;
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }
  
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
`

export const Body = styled.div`
  font-weight: bolder;
  font-size: 16px;
  margin-top: 12px;
`