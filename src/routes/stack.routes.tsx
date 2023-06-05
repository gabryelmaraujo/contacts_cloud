import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register, UserDashboard } from '../screens';


const { Screen, Navigator } = createStackNavigator();

const StackRoutes = () => {
    return(
        <Navigator>
            <Screen 
                name='user_dashboard'
                component={UserDashboard}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name='login' 
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name='register' 
                component={Register}
                options={{
                    headerShown: false,
                }}
            />
        </Navigator>
    )
}

export default StackRoutes