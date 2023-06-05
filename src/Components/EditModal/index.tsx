import { Modal, IModalProps, Text } from "native-base"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import EditUserForm from "../EditUserForm"
import EditContactForm from "../EditContactForm";

interface ICustomModalProps {
    title: string;
}

type TModalProps = IModalProps & ICustomModalProps

const EditModal = ({ title, ...rest }: TModalProps ) => {
    const { editModal, setEditModal } = useContext(UserContext)

    return(
        <Modal {...rest} onClose={() => setEditModal(
            {
                open: false,
                type: "",
                user_id: 0
            }
        )}>
            <Modal.Content width={"full"} minH={"3/6"}>
                <Modal.CloseButton />
                <Modal.Header>
                    <Text fontSize={18}>Atualizar {title}</Text>
                </Modal.Header>
                <Modal.Body alignItems={"center"}>
                    {
                        title == 'perfil' ? (<EditUserForm />) : title == 'contato' ? (<EditContactForm />) : ('')
                    }
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}

export default EditModal