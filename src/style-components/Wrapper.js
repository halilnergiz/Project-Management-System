import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}
body,#root {
  height: 100%;
}
`

export const Wrapper = styled.div`
    height: 100%;
    margin: 0;
    padding: 0;
`

export const AppWrapper = styled.div`
    height: 100%;
    margin: 0;
    padding: 0;
`

export const LayoutWrapper = styled.div`
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
`
export const MainLayout = styled.div`
    height: 100%;
    width: 95%;

`
export const OutletWrapper = styled.div`
    border: 1px solid black;
    width: 90%;
    float: right;
    margin-top: 1rem;
    margin-right: 1rem;
`

