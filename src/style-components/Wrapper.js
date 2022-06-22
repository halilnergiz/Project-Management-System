import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 html {
  height: 100%;
  margin: 0;
  padding: 0;
 }

 body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
 }

 .sidebar{
    width:240px;
    flex-shrink: 0;
    background-color: rgba(22, 22, 22, 1);
    height: 100vh;
    overflow: auto;
  }
  
  .sidebar-item{
    padding: .75em 1em;
    display: block;
    transition: background-color .15s;
    border-radius: 5px;
    color: white;
  }
  
  .sidebar-item:hover{
    background-color: rgba(255, 255, 255, .1);
  }
  
  .sidebar-title{
    display: flex;
    font-size: 1em;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
  }
  .sidebar-title span i{
    display: inline-block;
    width: 1.5em;
  }
  .sidebar-title .toggle-btn{
    cursor: pointer;
    transition: transform .3s;
  }
  .sidebar-item.open > .sidebar-title .toggle-btn{
    transform: rotate(180deg);
  }
  .sidebar-content{
    padding-top: .25em;
    height: 0;
    overflow: hidden;
  }
  .sidebar-item.open > .sidebar-content{
    height: auto;
  }
  
  .sidebar-item.plain{
    font-size: 1em;
    color: #fff;
    text-decoration: none;
  }
  .sidebar-item.plain:hover{
    text-decoration: underline;
  }
  .sidebar-item.plain i{
    display: inline-block;
    width: 1.7em;
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
    width: 97%;

`
export const OutletWrapper = styled.div`
    border: 1px solid black;
    width: 90%;
    float: right;
    margin-top: 1rem;
    margin-right: 1rem;
`
