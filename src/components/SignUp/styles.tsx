import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 450px;
    height: 100vh;
    padding-top: 150px;
`;
export const StyledForm = styled.form`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 35px 65px;
    background-color: #222222;
    border-radius: 10px;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #e1e3e6;
`;
export const StyledInput = styled.input`
    width: 100%;
    height: 35px;
    padding: 10px;
    font-size: 16px;
    border: 0;
    border-radius: 3px;
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

    &:hover {
        background-color: #666666;
        cursor: pointer;
    }
`;

export const StyledParagraph = styled.p`
    text-align: center;
    color: #777777;
`;

export const StyledNavLink = styled(NavLink)`
    color: #e1e3e6;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;
