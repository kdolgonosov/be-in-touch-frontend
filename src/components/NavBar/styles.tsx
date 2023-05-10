import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// #484d51
// #818d97
// #8facc0
// #d2e4f1

// #141414
// #222222
// #333333
// #555555
// #fff = #e1e3e6
export const Container = styled.div`
    margin: 0 auto;
    max-width: 450px;
    height: 100vh;
    padding-top: 200px;
`;
export const StyledList = styled.ul`
    display: flex;
    position: absolute;
    justify-content: space-between;
    height: 250px;
    left: -200px;
    list-style: none;
    flex-direction: column;
`;

export const StyledListItem = styled.li`
    font-size: 24px;
    background-color: #222222;
    padding: 10px;
    border-radius: 10px;
`;

export const StyledNavLink = styled(NavLink)`
    color: #e1e3e6;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;
