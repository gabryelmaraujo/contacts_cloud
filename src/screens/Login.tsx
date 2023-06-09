import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logo  from '../images/contacts_cloud_logo.png'
import LoginForm from '../Components/LoginForm'
import { Button } from 'native-base'

export const Login = () => {
    const navigation = useNavigation()

    const goRegisterPage = () => {
        navigation.navigate('register');
    }

    return(
        <View className='bg-greybg h-full flex items-center'>
            <View className='mt-5 flex w-containerw flex-col h-full items-center justify-center'>
                <Image source={logo} className='mt-5'/>
                <LoginForm/>
                <Button 
                    onPress={goRegisterPage}
                    marginTop={5}
                    variant={'ghost'}
                    _pressed={{
                        variant:'ghost'
                    }}
                >
                    <Text>clique aqui para criar sua conta</Text>
                </Button>
            </View>
        </View>
    )
}