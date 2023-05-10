import styled from 'styled-components';
export const StyledForm = styled.form`
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 65px;
    background-color: #222222;
    border-radius: 10px;
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
