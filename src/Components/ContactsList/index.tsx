import { Box, FlatList } from "native-base";
import contactsArr from "../../data/data";
import ContactCard from "../ContactCard";

const ContactsList = () => {
    return(
        <Box overflowY={"scroll"} height={"64"}>
            <FlatList data={contactsArr} renderItem={(contact) => {
                const id = contact.item.id;
                const name = contact.item.name;
                const telephone = contact.item.telephone;
                const email = contact.item.email;

                return <ContactCard name={name} id={id} telephone={telephone} email={email} />
            }} />
        </Box>
    )
}

export default ContactsList