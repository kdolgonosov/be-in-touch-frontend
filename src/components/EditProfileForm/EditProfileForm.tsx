import { useContext, useState } from 'react';

import { IUser } from '../../interfaces/interfaces';
import { StyledForm, StyledInput, StyledButton } from './styles';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import mainApi from '../../utils/MainApi';

interface IEditProfileForm {
    onSaveChanges: Function;
}
const EditProfileForm: React.FC<IEditProfileForm> = ({ onSaveChanges }) => {
    const currentUserCtx = useContext(CurrentUserContext);
    const [userData, setUserData] = useState({ ...currentUserCtx?.currentUser });
    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
    };
    const handleSaveChanges = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mainApi.editProfile(userData).then((user) => {
            onSaveChanges(e);
            currentUserCtx?.setCurrentUser(user);
        });
    };
    if (!userData) return null;
    return (
        <StyledForm onSubmit={handleSaveChanges}>
            <StyledInput
                type='text'
                onChange={handleFormDataChange}
                name='name'
                value={userData?.name}
                placeholder='Имя'
            ></StyledInput>
            <StyledInput
                type='text'
                onChange={handleFormDataChange}
                name='surname'
                value={userData?.surname}
                placeholder='Фамилия'
            ></StyledInput>
            <StyledInput
                type='number'
                onChange={handleFormDataChange}
                name='age'
                value={userData?.age}
                placeholder='Возраст'
            ></StyledInput>
            <StyledInput
                type='text'
                onChange={handleFormDataChange}
                name='city'
                value={userData?.city}
                placeholder='Город'
            ></StyledInput>
            <StyledInput
                type='text'
                onChange={handleFormDataChange}
                name='university'
                value={userData?.university}
                placeholder='Университет'
            ></StyledInput>
            <StyledInput
                type='url'
                onChange={handleFormDataChange}
                name='avatar'
                value={userData?.avatar}
                placeholder='Ссылка на изображение профиля'
            ></StyledInput>
            {/* <StyledInput
                type='email'
                // onChange={handleFormDataChange}
                name='email'
                // value={currentUserCtx?.currentUser?.email}
                placeholder='Email'
            ></StyledInput>
            <StyledInput
                type='password'
                // onChange={handleFormDataChange}
                name='password'
                // value={currentUserCtx?.currentUser?.password}
                placeholder='Пароль'
            ></StyledInput> */}
            <StyledButton type='submit'>Сохранить изменения</StyledButton>
        </StyledForm>
    );
};

export default EditProfileForm;
