import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'


const Button = ({text_button, ...rest}: IButtonProps | any) => {
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
            <Text className='text-white'>{text_button}</Text>
        </ButtonNativeBase>
    )
}

export default Button