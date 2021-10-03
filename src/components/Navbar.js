import styled from 'styled-components';

export const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${(props) => props.theme.primary.main};
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
   
    
`;

export const NavItem = styled.li`
    float:left;
`;

export const NavLink = styled.a`
    display:block;
    color: ${(props) => props.theme.primary.textColor};
    text-align:center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.25em;

    :hover {
        background-color: ${(props) => props.theme.primary.light};
    }

    .active {
        background-color: ${(props) => props.theme.primary.dark};
    }
`;