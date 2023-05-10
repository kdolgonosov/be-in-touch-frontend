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
    max-width: 600px;
    height: 100vh;
    background-color: #222222;
`;
export const StyledTitle = styled.h1`
    font-size: 24px;
    color: #e1e3e6;
    text-align: center;
`;
export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
`;

export const StyledListItem = styled.li`
    font-size: 24px;
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
