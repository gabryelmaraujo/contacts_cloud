import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { View } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import Input from '../Input';
import Button from '../Button';

type TRegisterFormData = {
    email: string;
    password: string;
    confirm_pass: string;
    name: string;
    telephone: string;
}

const registerSchema = yup.object({
    email: yup.string().required("Informe o email.").email("Email inválido."),
    password: yup.string().required("Informe a senha."),
    confirm_pass: yup.string()
    .oneOf([yup.ref('password')], 'As senhas estão diferentes.'),
    name: yup.string().required('Informe seu nome.').min(4, 'O nome deve ter no mínimo 4 letras.'),
    telephone: yup.string().required('Informe um telefone.')
})

const RegisterForm = () => {
    const { createUser } = useContext(UserContext)

    const { control, handleSubmit, formState: { errors } } = useForm<TRegisterFormData>({
        resolver: yupResolver(registerSchema)
    });

    const handleRegister = (data:TRegisterFormData) => {
        console.log(data)
        createUser(data)
    }

    return(
        <View className= 'w-formw flex items-center'>
            <Controller 
                control={control} 
                name='name'
                render={({field: {onChange}}) => {
                    return(
                        <Input 
                            placeholder='Nome' 
                            onChangeText={onChange}
                            errorMessage={errors.name?.message}
                        />
                    )
                }}
            />

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
                            onChangeText={onChange}
                            secureTextEntry={true}
                            errorMessage={errors.password?.message}
                        />
                    )
                }}
            />

            <Controller 
                control={control} 
                name='confirm_pass'
                render={({field: {onChange}}) => {
                    return(
                        <Input 
                            placeholder='Repita a sua senha' 
                            onChangeText={onChange}
                            secureTextEntry={true}
                            errorMessage={errors.confirm_pass?.message}
                        />
                    )
                }}
            />

            <Controller 
                control={control} 
                name='telephone'
                render={({field: {onChange}}) => {
                    return(
                        <Input 
                            placeholder='Digite seu telefone...' 
                            onChangeText={onChange}
                            errorMessage={errors.telephone?.message}
                        />
                    )
                }}
            />

        <Button 
            onPress={handleSubmit(handleRegister)} 
            text_button={'Cadastrar'}
            />
        </View>
    )
}

export default RegisterForm