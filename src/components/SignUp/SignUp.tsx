import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    StyledForm,
    Title,
    StyledInput,
    StyledButton,
    StyledParagraph,
    StyledNavLink,
} from './styles';
interface ISignUpProps {
    onSignUp: Function;
}

const SignUp: React.FC<ISignUpProps> = ({ onSignUp }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
        age: '',
        city: '',
        university: '',
        avatar: '',
    });
    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        onSignUp(e, formData);
    };
    return (
        <Container>
            <StyledForm>
                <Title>Создайте аккаунт</Title>
                <StyledInput
                    type='text'
                    onChange={handleFormDataChange}
                    name='name'
                    value={formData.name}
                    placeholder='Имя'
                ></StyledInput>
                <StyledInput
                    type='text'
                    onChange={handleFormDataChange}
                    name='surname'
                    value={formData.surname}
                    placeholder='Фамилия'
                ></StyledInput>
                <StyledInput
                    type='number'
                    onChange={handleFormDataChange}
                    name='age'
                    value={formData.age}
                    placeholder='Возраст'
                ></StyledInput>
                <StyledInput
                    type='text'
                    onChange={handleFormDataChange}
                    name='city'
                    value={formData.city}
                    placeholder='Город'
                ></StyledInput>
                <StyledInput
                    type='text'
                    onChange={handleFormDataChange}
                    name='university'
                    value={formData.university}
                    placeholder='Университет'
                ></StyledInput>
                <StyledInput
                    type='email'
                    onChange={handleFormDataChange}
                    name='email'
                    value={formData.email}
                    placeholder='Email'
                ></StyledInput>
                <StyledInput
                    type='password'
                    onChange={handleFormDataChange}
                    name='password'
                    value={formData.password}
                    placeholder='Пароль'
                ></StyledInput>
                <StyledButton type='submit' onClick={handleSignUp}>
                    Создать аккаунт
                </StyledButton>
                <StyledParagraph>
                    Уже зарегистрированы? <StyledNavLink to='/signin'>Войти</StyledNavLink>
                </StyledParagraph>
            </StyledForm>
        </Container>
    );
};

export default SignUp;
