import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, StyledList, StyledListItem, StyledNavLink } from './styles';

const NavBar: React.FC = () => {
    return (
        <StyledList>
            <StyledListItem>
                <StyledNavLink to='/be-in-touch-frontend/users/me'>Моя страница</StyledNavLink>
            </StyledListItem>
            <StyledListItem>
                <StyledNavLink to='/be-in-touch-frontend/friends'>Друзьяzz</StyledNavLink>
            </StyledListItem>
            <StyledListItem>
                <StyledNavLink to='/be-in-touch-frontend/feed'>Лента</StyledNavLink>
            </StyledListItem>
            <StyledListItem>
                <StyledNavLink to='/be-in-touch-frontend/users'>Люди</StyledNavLink>
            </StyledListItem>
        </StyledList>
    );
};

export default NavBar;
