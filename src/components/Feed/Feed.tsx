import { useState, useEffect, useContext } from 'react';
import PostCard from '../PostCard/PostCard';
import { Url } from 'url';

import mainApi from '../../utils/MainApi';
import { IPost } from '../../interfaces/interfaces';
import { Container, StyledTitle, StyledList, StyledListItem } from './styles';
import { CurrentUserContext } from '../../utils/CurrentUserContext';

const Feed: React.FC = () => {
    const currentUserCtx = useContext(CurrentUserContext);
    const [posts, setPosts] = useState<IPost[] | []>([]);
    useEffect(() => {
        mainApi.getPosts().then((res) => setPosts(res.reverse()));
    }, []);
    const handleLikePost = (post: IPost, isLiked: boolean) => {
        // const isLiked = post.likes.some((id) => id === currentUserCtx!.currentUser!._id);
        mainApi.changeLikeCardStatus(post._id, isLiked).then((newPost) => {
            // setPosts((state) => [...state.filter((post) => post._id !== newPost._id), newPost]);
            setPosts((oldPosts) => [
                ...oldPosts.map((post) => (post._id === newPost._id ? newPost : post)),
            ]);
        });
    };
    return (
        <Container>
            <StyledTitle>Лента новостей</StyledTitle>
            <StyledList>
                {posts &&
                    posts.map((post) => (
                        <StyledListItem key={post._id}>
                            <PostCard
                                post={post}
                                isLiked={post.likes.some(
                                    (id) => id === currentUserCtx!.currentUser!._id,
                                )}
                                handleLikePost={handleLikePost}
                            />
                        </StyledListItem>
                    ))}
            </StyledList>
        </Container>
    );
};

export default Feed;
