import './styles.tsx';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { FormEvent, useState, useEffect, Dispatch, SetStateAction } from 'react';
import NavBar from '../NavBar/NavBar';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SIgnIn/SignIn';
import Profile from '../MyProfile/MyProfile';
import Feed from '../Feed/Feed';
import People from '../People/People';
import Friends from '../Friends/Friends';
import ProtectedRoute from '../../utils/ProtectedRoute';
import ReversedProtectedRoute from '../../utils/ReversedProtectedRoute';

import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import { PageContainer } from './styles';
import { IUser } from '../../interfaces/interfaces';
import GlobalStyle from '../../styles/global';
import MyProfile from '../MyProfile/MyProfile';
import { UserInfo } from '../MyProfile/styles';
import UserProfile from '../UserProfile/UserProfile';

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser]: [null | IUser, Dispatch<SetStateAction<null | IUser>>] =
        useState<null | IUser>(null);
    let navigate = useNavigate();
    let location = useLocation();
    const handleSignUp = (e: React.FormEvent, data: Object) => {
        e.preventDefault();
        mainApi.signUp(data).then((res) => {
            if (res === false) {
                console.log('Ошибка');
            } else {
                console.log('res', res);
                navigate('/signin');
            }
        });
    };
    const handleSignIn = (e: FormEvent, email: string, password: string) => {
        e.preventDefault();
        mainApi
            .signIn(email, password)
            .then((res) => {
                if (res === undefined) {
                    setLoggedIn(true);
                    navigate('/feed');
                }
                // setLoginError(true);
            })
            .catch((err) => {
                // setLoginError(true)
                console.log('err', err);
            });
    };
    useEffect(() => {
        mainApi
            .verifyToken()
            .then((user) => {
                setLoggedIn(true);
                setCurrentUser(user);
            })
            .catch((err) => {
                setLoggedIn(false);
                // navigate('/signin');
            });
    }, [loggedIn]);
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <GlobalStyle />
            <PageContainer>
                {location.pathname !== '/signin' && location.pathname !== '/signup' && <NavBar />}
                <Routes>
                    <Route
                        path='/signup'
                        element={
                            <ReversedProtectedRoute loggedIn={loggedIn}>
                                <SignUp onSignUp={handleSignUp} />
                            </ReversedProtectedRoute>
                        }
                    />
                    <Route
                        path='/signin'
                        element={
                            <ReversedProtectedRoute loggedIn={loggedIn}>
                                <SignIn onSignIn={handleSignIn} />
                            </ReversedProtectedRoute>
                        }
                    />
                    <Route
                        path='/users'
                        element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <People />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='users/me'
                        element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <MyProfile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='users/:userId'
                        element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <UserProfile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/feed'
                        element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <Feed />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/friends'
                        element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <Friends />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </PageContainer>
        </CurrentUserContext.Provider>
    );
};

export default App;
