import { Navigate } from 'react-router-dom';

interface IReversedProtectedRouteProps {
    loggedIn?: boolean;
    children: JSX.Element;
}
const ReversedProtectedRoute: React.FC<IReversedProtectedRouteProps> = ({ loggedIn, children }) => {
    return loggedIn === true ? <Navigate to='/feed' replace /> : children;
};
export default ReversedProtectedRoute;
