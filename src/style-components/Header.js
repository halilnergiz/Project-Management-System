import styled from 'styled-components';

export const ContentHeader = styled.div`
    float: right;
    width: 93%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    border-radius: 5px;
`

// export const Logo = styled.div`
//     width: 4rem;
//     height: 2.5rem;
// `

export const NavBar = styled.ul`
    padding: 0 20px;
    list-style: none;
    display: flex;
    flex-direction: row;
`

export const Item = styled.li`
    margin: 0 10px;
`

export const linkStyle = {
    color:"black",
    textDecoration: "none"
}

export const Account = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    right: 1rem;
    border-radius: 100%;
    background-color: white;
    border: 1px solid black;
    /* background-color: ${props => props.theme.bgColor}; */
`





// Account.defaultProps = {
//     theme: {
//         bgColor: 'green'
//     }
// }