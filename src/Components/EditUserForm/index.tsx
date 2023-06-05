import { useForm, Controller } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { View } from "native-base"
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import Button from '../Button'
import Input from '../Input'
import { loggedUser } from '../../data/data'


const editUserSchema = yup.object({
    email: yup.string().email("Email inválido.").optional(),
    password: yup.string().optional(),
    name: yup.string().min(4, 'O nome deve ter no mínimo 4 letras.').optional(),
    telephone: yup.string().optional()
})

type TEditUserFormData = {
    email?: string;
    password?: string;
    name?: string;
    telephone?: string;
}

const EditUserForm = () => {
    const { editUser, loggedUser } = useContext(UserContext)

    const { control, handleSubmit, formState: { errors } } = useForm<TEditUserFormData>({
        resolver: yupResolver(editUserSchema)
    });

    const handleEditUser = (data:TEditUserFormData) => {
        console.log(data)
        const userId: number|undefined = loggedUser?.id
        editUser(data, userId)
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
            onPress={handleSubmit(handleEditUser)} 
            text_button={'Confirmar'}
            />
        </View>
    )
}

export default EditUserForm