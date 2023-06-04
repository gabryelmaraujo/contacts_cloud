import { View, Image, Text } from 'react-native'
import logo  from '../images/contacts_cloud_logo.png'
import LoginForm from '../Components/LoginForm'

export const Login = () => {
    return(
        <View className='bg-greybg h-full flex items-center'>
            <View className='mt-5 flex w-containerw flex-col h-full items-center justify-center'>
                <Image source={logo} className='mt-5'/>
                <LoginForm/>
                <Text>ou crie sua conta</Text>
            </View>
        </View>
    )
}