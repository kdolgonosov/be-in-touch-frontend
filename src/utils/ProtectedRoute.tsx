import { Navigate } from 'react-router-dom';

interface IProtectedRouteProps {
    loggedIn?: boolean;
    children: JSX.Element;
}
const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ loggedIn, children }) => {
    return loggedIn === true ? children : <Navigate to='/be-in-touch-frontend/signin' replace />;
};
export default ProtectedRoute;
