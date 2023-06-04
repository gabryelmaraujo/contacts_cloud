import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logo  from '../images/contacts_cloud_logo.png'
import RegisterForm from '../Components/RegisterForm'
import { Button, Image } from 'native-base'


export const Register = () => {
    const navigation = useNavigation()

    const goLoginPage = () => {
        navigation.navigate('login');
    }

    return(
        <View className='bg-greybg h-full flex items-center'>
            <View className='mt-5 flex w-containerw flex-col h-full items-center justify-center'>
                <Image 
                source={logo} 
                alt='logo'
                size={'xl'}
                resizeMode='contain'
                />
                <RegisterForm />
                <Button 
                    onPress={goLoginPage}
                    marginTop={5}
                    variant={'ghost'}
                    _pressed={{
                        variant:'ghost'
                    }}
                >
                    <Text>voltar para login</Text>
                </Button>
            </View>
        </View>
    )
}