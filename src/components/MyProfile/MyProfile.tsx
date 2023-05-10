import { useState, useEffect, useContext } from 'react';
import EditProfileForm from '../EditProfileForm/EditProfileForm';
import AddPostForm from '../AddPostForm/AddPostForm';
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
} from './styles';

// MdOutlinePostAdd
import { MdOutlinePostAdd } from 'react-icons/md';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const MyProfile: React.FC = () => {
    const currentUserCtx = useContext(CurrentUserContext);
    const [posts, setPosts] = useState<IPost[] | []>([]);
    const [isEditing, setIsEditing] = useState<Boolean>(false);
    const [isAddingPost, setIsAddingPost] = useState<Boolean>(false);
    useEffect(() => {
        mainApi.getMyPosts().then((res) => setPosts(res.reverse()));
    }, []);
    const handleLikePost = (post: IPost, isLiked: boolean) => {
        mainApi.changeLikeCardStatus(post._id, isLiked).then((newPost) => {
            setPosts((oldPosts) => [
                ...oldPosts.map((post) => (post._id === newPost._id ? newPost : post)),
            ]);
        });
    };
    const handleEditProfile = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };
    const handleAddPost = (e: React.FormEvent, newPost: IPost) => {
        e.preventDefault();
        if (isAddingPost) {
            setIsAddingPost(false);
            setPosts((posts) => [newPost, ...posts]);
        } else {
            setIsAddingPost(true);
        }
    };
    const handleShowAddPostForm = () => {
        if (isAddingPost) {
            setIsAddingPost(false);
        } else {
            setIsAddingPost(true);
        }
    };
    return (
        <>
            <Container>
                <Wrapper>
                    <Avatar
                        // src={
                        //     currentUserCtx?.currentUser?.avatar
                        //         ? currentUserCtx?.currentUser?.avatar
                        //         : 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'
                        // }
                        src={currentUserCtx?.currentUser?.avatar}
                    ></Avatar>

                    <UserInfo>
                        <StyledName>
                            {currentUserCtx?.currentUser?.name +
                                ' ' +
                                currentUserCtx?.currentUser?.surname +
                                ', ' +
                                currentUserCtx?.currentUser?.age}
                        </StyledName>
                        <StyledParagraph>
                            {currentUserCtx?.currentUser?.city +
                                ', ' +
                                currentUserCtx?.currentUser?.university}
                        </StyledParagraph>
                    </UserInfo>
                    {!isEditing && (
                        <ActionButton onClick={handleEditProfile}>
                            Редактировать профиль
                        </ActionButton>
                    )}
                    <SecondActionButton onClick={handleShowAddPostForm}>
                        <MdOutlinePostAdd />
                    </SecondActionButton>
                </Wrapper>
                {isEditing && <EditProfileForm onSaveChanges={handleEditProfile} />}
                {isAddingPost && <AddPostForm onAddPost={handleAddPost} />}
            </Container>
            <Container>
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
        </>
    );
};

export default MyProfile;
