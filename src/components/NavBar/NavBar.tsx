import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, StyledList, StyledListItem, StyledNavLink } from './styles';

const NavBar: React.FC = () => {
    return (
        <StyledList>
            <StyledListItem>
                <StyledNavLink to='users/me'>Моя страница</StyledNavLink>
            </StyledListItem>
            <StyledListItem>
                <StyledNavLink to='/friends'>Друзья</StyledNavLink>
            </StyledListItem>
            <StyledListItem>
                <StyledNavLink to='/feed'>Лента</StyledNavLink>
            </StyledListItem>
            <StyledListItem>
                <StyledNavLink to='/users'>Люди</StyledNavLink>
            </StyledListItem>
        </StyledList>
    );
};

export default NavBar;
