import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import LikeSvg from '../../assets/like_disabled';
// #484d51
// #818d97
// #8facc0
// #d2e4f1

// #141414
// #222222
// #333333
// #555555
// #fff = #e1e3e6
export const PostImage = styled.img`=
    object-fit: cover;
    margin: 10px 0;
`;
export const PostTitle = styled.p`
    color: #e1e3e6;
    font-size: 18px;
    font-weight: 600;
`;
export const PostText = styled.p`
    width: 546px;
    color: #e1e3e6;
    font-size: 16px;
    margin: 15px 0;
`;

export const LikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #e1e3e6;
`;
interface ILikeButton {
    isLiked: boolean;
}
export const LikeButton = styled.button<ILikeButton>`
    border: 0;
    height: 32px;
    background-color: transparent;
    font-size: 32px;
    color: ${(props) => (props.isLiked ? 'red' : '#e1e3e6')};
    &:hover {
        cursor: pointer;
        color: red;
    }
`;
export const LikeCounter = styled.caption`
    font-size: 28px;
    margin-left: 7px;
`;

export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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
