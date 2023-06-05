import { Box, Button, Circle, Flex, Text, View } from "native-base"


const UserInfos = () => {
    return(
        <View width={'full'} borderWidth={2} borderRadius={"md"} padding={2} marginTop={2} alignItems={"center"}>
            <Flex direction="row" alignItems={"center"}>
                <Circle size='100px' bg='blueGray.900' marginRight={2}>
                    <Text color={'white'} fontSize={40} fontWeight={'bold'}> 
                        GA
                    </Text>
                </Circle>
                <Box>
                    <Text color={'blueGray.900'} fontSize={30} fontWeight={'bold'}>Gabryel Araujo</Text>
                    <Text color={'blueGray.900'} fontSize={25} fontWeight={'bold'}>5599889910</Text>
                </Box>
            </Flex>
            <Button 
                size={'lg'} 
                width={'48'} 
                marginTop={"10"} 
                bgColor={'gray.100'} 
                borderWidth={1} 
                borderColor={'blueGray.900'}
                _pressed={{
                    bgColor: 'blueGray.200'
                }}
            >
                <Text color={'blueGray.900'} fontSize={15} fontWeight={'bold'}>ATUALIZAR PERFIL</Text>
            </Button>
        </View>
    )
}

export default UserInfos