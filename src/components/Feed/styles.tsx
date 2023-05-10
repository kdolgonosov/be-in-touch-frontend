import styled from 'styled-components';
export const Container = styled.div`
    margin: 0 auto;
    max-width: 600px;
    min-height: 100vh;
    background-color: #222222;
`;
export const StyledTitle = styled.h1`
    font-size: 24px;
    color: #e1e3e6;
    text-align: center;
    margin-bottom: 20px;
`;
export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

export const StyledListItem = styled.li`
    display: flex;
    flex-direction: column;
    max-width: 566px;
    padding: 15px;
    border-radius: 7.5px;
    background-color: #555555;
    margin-bottom: 35px;
`;
