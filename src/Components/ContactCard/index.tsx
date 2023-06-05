import { Flex, View, Text, Button, Box } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import { iContact } from "../../@types/contacts"

const ContactCard = ({id, name, email, telephone}: iContact) => {
    return(
        <View w={'full'} h={"16"} borderWidth={2} borderColor={'black'} marginTop={2} flexDirection={"column"} paddingTop={2}>
            <Flex direction="row" alignItems={"center"} justifyContent={"space-between"}>
                <Flex direction="row" alignItems={"center"}>
                    <MaterialIcons name="account-circle" size={45} color="black" />
                    <Text marginLeft={1} fontSize={16} >{name}</Text>
                </Flex>
                <Button backgroundColor={"gray.100"}>
                    <MaterialIcons name="person-remove" size={24} color="black" />
                </Button>
            </Flex>
        </View>
    )
}

export default ContactCard