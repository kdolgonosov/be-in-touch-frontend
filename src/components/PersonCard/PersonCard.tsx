import ReactTimeAgo from 'react-time-ago';
import {
    Container,
    Wrapper,
    WrapperText,
    Avatar,
    Name,
    TimeAgo,
    City,
    DeleteButton,
} from './styles';
import { IUser } from '../../interfaces/interfaces';

// interface IUser {
//     _id: string;
//     email: string;
//     password: string;
//     name: string;
//     surname?: string;
//     age?: number;
//     avatar?: URL;
//     city?: string;
//     university?: string;
//     friends?: string[];
// }
// interface IPersonCard extends IUser {
//     handleDeleteFriend: () => void;
// }

interface IPersonCard {
    user: IUser;
    isFriend: boolean;
    type: 'postHeader' | 'person';
    postCreatedAt?: Date;
    handleAddFriend?: (user: IUser) => void;
    handleDeleteFriend?: (user: IUser) => void;
}
const PersonCard: React.FC<IPersonCard> = ({
    user,
    isFriend,
    type,
    postCreatedAt,
    handleAddFriend,
    handleDeleteFriend,
}: IPersonCard) => {
    const path = '/users/' + user._id;
    return (
        <Container>
            <Wrapper to={path} replace={true}>
                <Avatar
                    src={
                        user.avatar
                            ? user.avatar
                            : 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'
                    }
                    type={type}
                ></Avatar>
                <WrapperText>
                    <Name>
                        {user.name} {user?.surname}
                    </Name>
                    {type === 'postHeader' && (
                        <TimeAgo>
                            <ReactTimeAgo date={postCreatedAt!} locale='ru-RU' />
                        </TimeAgo>
                    )}
                    {type === 'person' && <City>{user?.city}</City>}
                </WrapperText>
            </Wrapper>
            {type === 'person' && isFriend ? (
                <DeleteButton onClick={() => handleDeleteFriend!(user)}>
                    Удалить из друзей
                </DeleteButton>
            ) : (
                handleAddFriend && (
                    <DeleteButton onClick={() => handleAddFriend(user)}>
                        Добавить в друзья
                    </DeleteButton>
                )
            )}
        </Container>
    );
};

export default PersonCard;
