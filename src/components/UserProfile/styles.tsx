import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 600px;
    background-color: #222222;
    padding-bottom: 35px;
`;
export const Wrapper = styled.div`
    padding: 15px;
    display: grid;
    grid-template-columns: 3fr 6fr 1fr;
    grid-template-rows: 5fr 1fr;

    grid-column-gap: 15px;
    grid-row-gap: 20px;
`;
export const Avatar = styled.img`
    grid-area: 1 / 1 / 2 / 2;
    align-self: center;
    width: 180px;
    height: 180px;
    border-radius: 90px;
    object-fit: cover;
`;

export const UserInfo = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    color: #e1e3e6;
    align-self: center;
`;
export const StyledName = styled.p`
    font-size: 30px;
    font-weight: 800;
`;
export const StyledParagraph = styled.p`
    font-size: 20px;
`;
export const ActionButton = styled.button`
    grid-area: 2 / 1 / 3 / 3;
    margin-left: 15px;
    background-color: #555555;
    color: #e1e3e6;
    font-size: 16px;
    line-height: 16px;
    border: 0;
    padding: 15px;
    height: 45px;

    &:hover {
        background-color: #666666;
        cursor: pointer;
    }
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
export const NoPostsPlaceholder = styled.p`
    color: #e1e3e6;
    font-size: 28px;
`;
