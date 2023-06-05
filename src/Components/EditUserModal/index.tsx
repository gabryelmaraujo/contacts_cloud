import { Modal, IModalProps } from "native-base"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import EditUserForm from "../EditUserForm"


const EditUserModal = ({...rest}: IModalProps ) => {
    const { setEditUserModal } = useContext(UserContext)

    return(
        <Modal {...rest} onClose={() => setEditUserModal(false)}>
            <Modal.Content width={"full"} height={"4/6"}>
                <Modal.CloseButton />
                <Modal.Header>Atualizar perfil</Modal.Header>
                <Modal.Body alignItems={"center"}>
                    <EditUserForm />
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}

export default EditUserModal