import styled from 'styled-components';

export const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    
`;

export const NavItem = styled.li`
    float:left;
`;

export const NavLink = styled.a`
    display:block;
    color:white;
    text-align:center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.25em;

    :hover {
        background-color: #4tc3f7;
    }

    .active {
        background-color: #04aa64;
    }
`;