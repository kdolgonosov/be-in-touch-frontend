import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
    margin: auto 0;
    background-color: #222222;
    height: 100vh;
    // padding-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledTitle = styled.h1`
    font-size: 42px;
    color: #e1e3e6;
    text-align: center;
`;

export const StyledLink = styled(Link)`
    text-align: center;
    font-size: 32px;
    color: #555555;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;
