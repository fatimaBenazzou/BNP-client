import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Notification from './ui-component/Notifcations';

// routing
import Routes from './routes';

// defaultTheme
import themes from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';
import { useGetUserDataMutation } from 'store/api';
import { useNotification, useUser } from 'store/hooks';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const [GetUserData]=useGetUserDataMutation();
    const { setUser, removeUser}=useUser();
    const {Notify}=useNotification();
    useEffect(() => {
        GetUserData()
            .unwrap()
            .then((user) => {
                Notify({
                    title: "Welcome back " + user.first_Name,
                    description: "Please check our latest Activities !",
                    type: "success",
                });
                setUser(user);
            })
            .catch(() => {
                Notify({
                    title: "You are not signed in",
                    description:
                        "Please sign in to be able to participate in the event!",
                    type: "warning",
                });
                removeUser();
            });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                    <Notification/>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
