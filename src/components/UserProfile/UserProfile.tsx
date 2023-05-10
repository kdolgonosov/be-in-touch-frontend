import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import { IPost, IUser } from '../../interfaces/interfaces';

import {
    Container,
    Wrapper,
    Avatar,
    UserInfo,
    StyledName,
    StyledTitle,
    StyledParagraph,
    ActionButton,
    SecondActionButton,
    StyledList,
    StyledListItem,
    NoPostsPlaceholder,
} from './styles';

const UserProfile = () => {
    const currentUserCtx = useContext(CurrentUserContext);
    const { userId } = useParams();
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<IPost[] | []>([]);
    useEffect(() => {
        userId &&
            mainApi
                .getUserById(userId)
                .then((user) => {
                    setUser(user);
                    mainApi.getUserPosts(userId).then((posts) => setPosts(posts));
                })
                .finally(() => setLoading(false));
        // mainApi.getMyPosts().then((res) => setPosts(res));
    }, []);
    const handleLikePost = (post: IPost, isLiked: boolean) => {
        mainApi.changeLikeCardStatus(post._id, isLiked).then((newPost) => {
            setPosts((oldPosts) => [
                ...oldPosts.map((post) => (post._id === newPost._id ? newPost : post)),
            ]);
        });
    };
    const handleAddFriend = () => {
        mainApi.followUser(userId!).then((updatedUser) => {
            currentUserCtx?.setCurrentUser(updatedUser);
        });
    };
    const handleDeleteFriend = (): void => {
        mainApi.unFollowUser(userId!).then((updatedUser) => {
            currentUserCtx?.setCurrentUser(updatedUser);
        });
    };

    if (loading) return <div>Загрузка...</div>;
    return (
        <>
            <Container>
                <Wrapper>
                    <Avatar
                        src={
                            user?.avatar
                                ? user?.avatar
                                : 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'
                        }
                    ></Avatar>
                    <UserInfo>
                        <StyledName>
                            {user?.name + ' ' + user?.surname}
                            {user?.age && ', ' + user?.age}
                        </StyledName>
                        <StyledParagraph>
                            {user?.city}
                            {user?.university && ', ' + user?.university}
                        </StyledParagraph>
                    </UserInfo>
                    {currentUserCtx?.currentUser?.friends?.includes(user!._id) ? (
                        <ActionButton onClick={handleDeleteFriend}>Удалить из друзей</ActionButton>
                    ) : (
                        <ActionButton onClick={handleAddFriend}>Добавить в друзья</ActionButton>
                    )}
                    {/* <SecondActionButton>
                        <MdOutlinePostAdd />
                    </SecondActionButton> */}
                </Wrapper>
            </Container>
            <Container>
                <StyledList>
                    {posts.length !== 0 ? (
                        posts.map((post) => (
                            <StyledListItem key={post._id}>
                                <PostCard
                                    post={post}
                                    isLiked={post.likes.some(
                                        (id) => id === currentUserCtx?.currentUser!._id,
                                    )}
                                    handleLikePost={handleLikePost}
                                />
                            </StyledListItem>
                        ))
                    ) : (
                        <NoPostsPlaceholder>У пользователя нет постов</NoPostsPlaceholder>
                    )}
                </StyledList>
            </Container>
        </>
    );
};

export default UserProfile;
