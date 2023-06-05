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

const EditContactForm = () => {
    const { editModal, editUser, loggedUser } = useContext(UserContext)

    const { control, handleSubmit, formState: { errors } } = useForm<TEditUserFormData>({
        resolver: yupResolver(editUserSchema)
    });

    const handleEditContact = (data:TEditUserFormData) => {
        console.log(data)
        const contactId: number = editModal.user_id
        editUser(data, contactId)
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
                name='telephone'
                render={({field: {onChange}}) => {
                    return(
                        <Input 
                            placeholder='Digite o telefone...' 
                            onChangeText={onChange}
                            errorMessage={errors.telephone?.message}
                        />
                    )
                }}
            />

        <Button 
            onPress={handleSubmit(handleEditContact)} 
            text_button={'Confirmar'}
            />
        </View>
    )
}

export default EditContactForm