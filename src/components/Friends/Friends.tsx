import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import PersonCard from '../PersonCard/PersonCard';
import { IUser } from '../../interfaces/interfaces';
import { Container, StyledTitle, StyledList, StyledListItem } from './styles';

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

const Friends: React.FC = () => {
    const currentUserCtx = useContext(CurrentUserContext);
    const [friends, setFriends] = useState<IUser[] | []>([]);
    useEffect(() => {
        mainApi.getFriends().then((friends) => setFriends(friends));
    }, []);
    const handleDeleteFriend = (user: IUser): void => {
        mainApi.unFollowUser(user._id).then((newUser) => {
            setFriends((state) => state.filter((user) => newUser.friends.includes(user._id)));
            currentUserCtx!.setCurrentUser(newUser);
        });
    };
    return (
        <Container>
            <StyledTitle>Друзья</StyledTitle>
            <StyledList>
                {friends &&
                    friends.map((user) => (
                        <StyledListItem key={user._id}>
                            <PersonCard
                                user={user}
                                isFriend={true}
                                type='person'
                                handleDeleteFriend={handleDeleteFriend}
                            />
                        </StyledListItem>
                    ))}
            </StyledList>
        </Container>
    );
};

export default Friends;
