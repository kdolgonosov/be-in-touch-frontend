import { Container, StyledTitle, StyledLink } from './styles';

const NotFound = () => {
    return (
        <Container>
            <StyledTitle>Такой страницы не существует</StyledTitle>
            <StyledLink to='/'>Вернуться на главную страницу</StyledLink>
        </Container>
    );
};

export default NotFound;
