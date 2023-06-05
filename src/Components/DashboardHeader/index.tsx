import { View, Flex, Image, Button } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import logo from '../../images/contacts_cloud_logo.png'
import { useNavigation } from "@react-navigation/native"

const DashboardHeader = () => {
    const navigation = useNavigation()

    const logoutFunction = () => {
        navigation.navigate('login');
    }

    return(
        <View width={'full'} >
            <Flex 
                width={'full'} 
                direction="row"
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Image 
                source={logo} 
                alt='logo'
                size={'sm'}
                resizeMode='contain'
                />
                
                <Button
                    backgroundColor={'gray.100'}
                    onPress={()=>{
                        logoutFunction()
                    }}
                >
                    <MaterialIcons
                        name="logout" 
                        color={'black'}
                        size={25}
                    />
                </Button>
            </Flex>
        </View>
    )
}

export default DashboardHeader