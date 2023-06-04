import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

const LoginButton = ({...rest}: IButtonProps) => {
    return(
        <ButtonNativeBase 
            w={'full'}
            marginTop={5}
            bgColor={'blueGray.900'}
            _pressed={{
                bgColor:'blue.900'
            }}
            {...rest}
        >
            <Text className='text-white'>Entrar</Text>
        </ButtonNativeBase>
    )
}

export default LoginButton