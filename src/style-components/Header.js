import styled from 'styled-components';

export const ContentHeader = styled.div`
    /* position: absolute; */
    width: 100%;
    height: 12%;
    background-color: #D9D9D9;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LeftSide = styled.div`
    height: min-content;
    width: 12%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 1rem;
`

export const SidebarBtn = styled.button`
    width: 4rem;
    height: 2.5rem;
    border: 1px solid black ;
    background: transparent;

`
export const Logo = styled.div`
    width: 4rem;
    height: 2.5rem;
    border: 1px solid black ;
`

export const NavBar = styled.ul`
    padding: 0;
    width: max-content;
    list-style: none;
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin-right: 5rem;
`

export const Item = styled.li`
    margin: 0 10px;
    text-decoration: none;
    -webkit-text-decoration-style: none;
`

export const Account = styled.div`
    position: relative;
    width: 45px;
    height: 45px;
    right: 1rem;
    border-radius: 100%;
    background-color: white;
    /* background-color: ${props => props.theme.bgColor}; */
`





// Account.defaultProps = {
//     theme: {
//         bgColor: 'green'
//     }
// }