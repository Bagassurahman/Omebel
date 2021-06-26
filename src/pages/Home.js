import "./Home.css";
import { Navbar, Nav, Form, Button, Modal, Container } from "react-bootstrap";
import Navigasi from '../components/Navigasi';
import Hero from '../components/Hero';
import Member from '../components/Member';
import Advantage from '../components/Advantage';
import Investasi from '../components/Investasi';
import Choose from '../components/Choose';
import Edukasi from '../components/Edukasi';
import Marketplace from '../components/Marketplace';
import Join from '../components/Join';
import Footer from '../components/Footer';

export default function Home() {
  
  return(
    <>
      <Navigasi/>
      
      <Hero />
      <Member />
      <Advantage />
      <div className={`pt-5`}>
        <Investasi />
      </div>
      <div className={`pt-5`}>
        <Choose />
      </div>
      <div className={`pt-5`}>
        <Edukasi />
      </div>
      <div className={`pt-5`}>
        <Marketplace />
      </div>
      <div className={`pt-5`}>
        <Join />
      </div>
      <div className={`pt-5`}>
        <Footer />
      </div>
      
    </>
  )
}
