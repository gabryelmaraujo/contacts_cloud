import { Box, Button, Circle, Flex, Text, View } from "native-base"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import EditUserModal from "../EditUserModal"


const UserInfos = () => {
    const { editUserModal, setEditUserModal, loggedUser } = useContext(UserContext)

    return(
        <View width={"full"} borderWidth={2} borderRadius={"md"} padding={2} marginTop={2} alignItems={"center"} borderColor={"blueGray.400"}>
            <Flex direction="row" alignItems={"center"}>
                <Circle size="100px" bg="blueGray.900" marginRight={2}>
                    <Text color={"white"} fontSize={40} fontWeight={"bold"}> 
                        {loggedUser?.name[0]}
                    </Text>
                </Circle>
                <Box>
                    <Text color={"blueGray.900"} fontSize={30} fontWeight={"bold"}>{loggedUser?.name}</Text>
                    <Text color={"blueGray.900"} fontSize={15} fontWeight={"bold"}>{loggedUser?.email}</Text>
                    <Text color={"blueGray.900"} fontSize={15} fontWeight={"bold"}>{loggedUser?.telephone}</Text>
                </Box>
            </Flex>
            <Button 
                size={"lg"} 
                width={"48"} 
                marginTop={"10"} 
                bgColor={"gray.100"} 
                borderWidth={1} 
                borderColor={"blueGray.900"}
                _pressed={{
                    bgColor: "blueGray.200"
                }}
                onPress={()=>{
                    setEditUserModal(true)
                }}
            >
                <EditUserModal isOpen={editUserModal}/>
                <Text color={"blueGray.900"} fontSize={15} fontWeight={"bold"}>ATUALIZAR PERFIL</Text>
            </Button>
        </View>
    )
}

export default UserInfos