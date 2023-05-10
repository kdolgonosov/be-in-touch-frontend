import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
`;
export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;
export const Wrapper = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
        border-left: 2px solid #555555;
    }
`;

interface IAvatar {
    type: 'person' | 'postHeader';
}
export const Avatar = styled.img<IAvatar>`
    width: ${(props) => (props.type === 'person' ? '120px' : '80px')};
    height: ${(props) => (props.type === 'person' ? '120px' : '80px')};
    border-radius: ${(props) => (props.type === 'person' ? '60px' : '40px')};
    object-fit: cover;
`;
export const Name = styled.p`
    color: #e1e3e6;
    font-size: 26px;
    font-weight: 800px;
`;
export const TimeAgo = styled.p`
    color: #e1e3e6;
`;
export const City = styled.p`
    color: #e1e3e6;
    font-size: 16px;
`;

export const DeleteButton = styled.button`
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
