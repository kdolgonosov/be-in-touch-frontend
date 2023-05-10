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
export const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px 0;
    padding: 0 15px;
`;
export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border: 0;
    border-radius: 3px 0 0 3px;
    background-color: #555555;
    color: #e1e3e6;
    &:focus {
        background-color: #666666;
    }
`;
export const StyledButton = styled.button`
    width: 200px;
    height: 40px;
    font-size: 16px;
    background-color: #555555;
    color: #e1e3e6;
    border: 0;
    border-radius: 0 3px 3px 0;
    &:hover {
        background-color: #666666;
        cursor: pointer;
    }
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
