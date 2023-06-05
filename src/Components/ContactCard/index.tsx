import { Flex, View, Text, Button, Box } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import { iContact } from "../../@types/contacts"

const ContactCard = ({id, name, email, telephone}: iContact) => {
    return(
        <View w={'full'} h={"16"} borderWidth={2} borderRadius={"md"} borderColor={'blueGray.400'} marginTop={2}>
            <Button 
                w={"full"} 
                h={"full"} 
                flexDir={"row"} 
                justifyItems={"flex-start"} 
                backgroundColor={"gray.100"}
                _pressed={{
                    bgColor: "blueGray.200"
                }}
                >
                <Flex direction="row" alignItems={"center"} h={"12"}>
                    <Flex direction="row" alignItems={"center"} w={"full"} h={"full"}>
                        <MaterialIcons name="account-circle" size={45} color="black" />
                        <Text marginLeft={1} fontSize={"lg"} fontWeight={"semibold"} >{name}</Text>
                    </Flex>
                </Flex>
            </Button>
        </View>
    )
}

export default ContactCard