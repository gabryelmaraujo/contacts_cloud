import { View, Box, Flex, Input, Text, Button } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import ContactsList from "../ContactsList"
import { useState } from "react"



const UserContacts = () => {
    const [search, setSearch] = useState('')

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
                <Input 
                    width={'5/6'} 
                    borderColor={"blueGray.500"} 
                    backgroundColor={"white"} 
                    onChangeText={(value)=>{
                        setSearch(value)
                    }}
                />
            </Flex>
            <Flex>
                <ContactsList search={search}/>
            </Flex>
        </View>
    )
}

export default UserContacts