import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import Button from '../Button';
import Input from '../Input';


type TLoginFormData = {
    email: string,
    password: string
}

const loginSchema = yup.object({
    email: yup.string().required("Informe o email.").email("Email inválido."),
    password: yup.string().required("Informe a senha.")
})

const LoginForm = () =>{
    const { control, handleSubmit, formState: { errors } } = useForm<TLoginFormData>({
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = (data: TLoginFormData) => {
        console.log(data)
    }

    return(
        <View className= 'w-formw mt-10 flex items-center'>

            <Controller 
                control={control} 
                name='email'
                render={({field: {onChange}}) => {
                    return(
                        <Input 
                            placeholder='Email' 
                            onChangeText={onChange}
                            errorMessage={errors.email?.message}
                        />
                    )
                }}
            />
            
            <Controller 
                control={control} 
                name='password'
                render={({field: {onChange}}) => {
                    return(
                        <Input 
                            placeholder='Senha'
                            secureTextEntry={true} 
                            onChangeText={onChange}
                            errorMessage={errors.password?.message}
                        />
                    )
                }}
            />

            <Button 
            onPress={handleSubmit(handleLogin)} 
            text_button={'Entrar'}
            />
        </View>
    )
}

export default LoginForm;