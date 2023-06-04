import { Input as InputNativeBase, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
    errorMessage?: string | null;
}

const Input = ({errorMessage = null, isInvalid, ...rest}: Props) => {
    const invalid = !!errorMessage || isInvalid;

    return(
        <FormControl marginTop={5} isInvalid={invalid}>
            <InputNativeBase 
            className='w-inputw bg-white'
            borderWidth={2}
            borderColor={'blueGray.900'}
            _focus={{
                borderColor:'blue.600'
            }}
            {...rest}
            />
            <FormControl.ErrorMessage>
                {errorMessage} 
            </FormControl.ErrorMessage>
        </FormControl>
    )
}

export default Input