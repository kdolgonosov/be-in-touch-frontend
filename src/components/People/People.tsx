import React, { useState, useEffect, useContext, useReducer } from 'react';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import PersonCard from '../PersonCard/PersonCard';
import { IUser } from '../../interfaces/interfaces';
import {
    Container,
    StyledInput,
    StyledTitle,
    StyledList,
    StyledListItem,
    StyledButton,
    SearchBarWrapper,
} from './style';

// interface IUser {
//     _id: string;
//     email: string;
//     password: string;
//     name: string;
//     surname?: string;
//     age?: number;
//     city?: string;
//     university?: string;
//     friends?: string[];
// }

const People: React.FC = () => {
    const currentUserCtx = useContext(CurrentUserContext);
    const [users, setUsers] = useState<IUser[] | []>([]);
    const [filteredUsers, setFilteredUsers] = useState<IUser[] | []>([]);
    const [searchInputValue, setSearchInputValue] = useState<string>('');
    useEffect(() => {
        mainApi.getUsers().then((users) => {
            setUsers(users);
            setFilteredUsers(users);
        });
    }, []);
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value);
    };
    const handleSearch = () => {
        setFilteredUsers(
            users.filter((user) =>
                user.name.toLowerCase().includes(searchInputValue.toLowerCase()),
            ),
        );
    };
    const handleAddFriend = (user: IUser) => {
        mainApi.followUser(user._id).then((updatedUser) => {
            currentUserCtx?.setCurrentUser(updatedUser);
        });
    };
    const handleDeleteFriend = (user: IUser): void => {
        mainApi.unFollowUser(user._id).then((updatedUser) => {
            currentUserCtx?.setCurrentUser(updatedUser);
        });
    };
    return (
        <Container>
            <StyledTitle>Люди</StyledTitle>
            <SearchBarWrapper>
                <StyledInput
                    type='text'
                    onChange={handleSearchInputChange}
                    value={searchInputValue}
                    placeholder='Поиск по имени'
                ></StyledInput>
                <StyledButton onClick={handleSearch}>Поиск</StyledButton>
            </SearchBarWrapper>
            <StyledList>
                {currentUserCtx!.currentUser !== null &&
                    filteredUsers
                        .filter((user) => user._id !== currentUserCtx!.currentUser!._id)
                        .map((user) => (
                            <StyledListItem key={user._id}>
                                <PersonCard
                                    user={user}
                                    isFriend={
                                        currentUserCtx!.currentUser!.friends?.includes(user._id)
                                            ? true
                                            : false
                                    }
                                    type='person'
                                    handleAddFriend={handleAddFriend}
                                    handleDeleteFriend={handleDeleteFriend}
                                />
                            </StyledListItem>
                        ))}
            </StyledList>
        </Container>
    );
};

export default People;
