import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import mainApi from '../../utils/MainApi';
import {
    Container,
    StyledForm,
    Title,
    StyledInput,
    StyledButton,
    StyledParagraph,
    StyledNavLink,
} from './styles';

interface ISignInProps {
    onSignIn: Function;
}
const SignIn: React.FC<ISignInProps> = ({ onSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        onSignIn(e, email, password);
    };
    return (
        <Container>
            <StyledForm>
                <Title>Войдите в аккаунт</Title>
                <StyledInput
                    type='email'
                    onChange={handleEmailChange}
                    value={email}
                    placeholder='Email'
                ></StyledInput>
                <StyledInput
                    type='password'
                    onChange={handlePasswordChange}
                    value={password}
                    placeholder='Пароль'
                ></StyledInput>
                <StyledButton type='submit' onClick={handleSignUp}>
                    Войти
                </StyledButton>
                <StyledParagraph>
                    Ещё не зарегистрированы?{' '}
                    <StyledNavLink to='/signup'>Зарегистроваться</StyledNavLink>
                </StyledParagraph>
            </StyledForm>
        </Container>
    );
};

export default SignIn;
