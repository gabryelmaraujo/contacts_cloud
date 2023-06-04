import { View, Container } from 'native-base'
import { DashboardHeader, UserContacts, UserInfos } from '../Components'

const UserDashboard = () => {
    return(
        <View width={'full'} className='flex items-center'>
            <Container marginTop={5} width={'full'} justifyContent={'center'} alignItems={'center'}>
                <DashboardHeader />
                <UserInfos />
                <UserContacts />
            </Container>
        </View>
    )
}

export default UserDashboard