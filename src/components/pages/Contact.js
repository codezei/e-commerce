import PageTitle from "../PageTitle"
import Contacts from "../Contacts"
import ContactForm from "../ContactForm"
import Articles from '../Articles'
import Partners from '../Partners'
import Footer from '../Footer'

function Contact () {
    return (
        <div>
            <PageTitle title="Contact"></PageTitle>
            <Contacts></Contacts>
            <ContactForm></ContactForm>            <Articles></Articles>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    )
}

export default Contact;