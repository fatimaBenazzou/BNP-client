import { useRoutes } from 'react-router-dom';
import { useNotification, useUser } from "../store/hooks";
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const {user}=useUser();
    return useRoutes([MainRoutes(user), ...AuthenticationRoutes(user)], config.basename);
}
