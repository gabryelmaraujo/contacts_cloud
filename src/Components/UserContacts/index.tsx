import { View, Box, Flex, Input, Text, Button, Row } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import contactsArr from "../../data/data"
import ContactCard from "../ContactCard"
import { iContact } from "../../@types/contacts"
import ContactsList from "../ContactsList"


const UserContacts = () => {

    return(
        <View marginTop={5} width={'full'} height={'2/4'}>
            <Flex 
                direction="column" 
                alignItems={"center"}
                justifyContent={"space-between"}
                >
                <Box 
                    flexDirection={'row'} 
                    justifyContent={'space-between'} 
                    alignItems={'center'}
                >
                    <Text 
                    color={'blueGray.900'} 
                    fontSize={25} 
                    fontWeight={'bold'}
                    >
                        Seus contatos
                    </Text>
                    <Button w={'16'} bgColor={'gray.100'}>
                        <MaterialIcons name="person-add" size={30}/>
                    </Button>
                </Box>
                <Input width={'5/6'}/>
            </Flex>
            <Flex>
                <ContactsList />
            </Flex>
        </View>
    )
}

export default UserContacts