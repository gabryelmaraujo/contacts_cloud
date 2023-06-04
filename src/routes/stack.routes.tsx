import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../screens';


const { Screen, Navigator } = createStackNavigator();

const StackRoutes = () => {
    return(
        <Navigator>
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