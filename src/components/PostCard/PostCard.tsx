import React from 'react';
import PersonCard from '../PersonCard/PersonCard';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IPost } from '../../interfaces/interfaces';
import { PostImage, PostTitle, PostText, LikeWrapper, LikeButton, LikeCounter } from './styles';

interface IPostCardProps {
    post: IPost;
    isLiked: boolean;
    handleLikePost: (post: IPost, isLiked: boolean) => void;
}
const PostCard: React.FC<IPostCardProps> = ({ post, isLiked, handleLikePost }: IPostCardProps) => {
    return (
        <>
            <PersonCard
                user={post.owner}
                postCreatedAt={post.createdAt}
                isFriend={true}
                type='postHeader'
            />
            {post.image && <PostImage src={post.image}></PostImage>}
            <PostTitle>{post.title}</PostTitle>
            <PostText>{post.text}</PostText>
            <LikeWrapper>
                <LikeButton onClick={() => handleLikePost(post, isLiked)} isLiked={isLiked}>
                    {isLiked ? <BsHeartFill /> : <BsHeart />}
                </LikeButton>
                <LikeCounter>{post.likes.length}</LikeCounter>
            </LikeWrapper>
        </>
    );
};

export default PostCard;
