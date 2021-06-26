import "./Contact.css";
import Navigasi from '../components/Navigasi';
import Contactus from '../components/Contactus';
import Footer from '../components/Footer';

export default function Contact() {
  
  return(
    <>
      <Navigasi/>
      
      
      <div className={`pt-5`}>
        <Contactus />
      </div>
      
      <div className={`pt-5`}>
        <Footer />
      </div>
      
    </>
  )
}
