import styled from 'styled-components';
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
