import { Navbar, Container ,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//สร้าง Component Master Page
const MasterPage=(props)=>{


    return (<>
    {/*-------สร้าง แถบเมนูด้านบน ด้วย Navbar จาก ReactBootstrap-----------*/}
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand >Horoscope</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {/*--------สร้าง Link ไปที่ page1----------*/}
            <Nav.Link href="#home">Home</Nav.Link>
            {/*--------สร้าง Link ไปที่ page2----------*/}
            <Nav.Link href="#/page1">Tarot</Nav.Link>
             {/*--------สร้าง Link ไปที่ page1----------*/}
             
            <Nav.Link href="#/page3">Zodiac Flower</Nav.Link>
             {/*--------สร้าง Link ไปที่ page1----------*/}
             <Nav.Link href="#/page4">Birthday Flower</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>

        <div className="container">
            {/*--------ส่วนของเนื้อหาเว็บที่จะมาแสดง-----*/}
            {props.children}
        </div>
        

    </>)

}

export default MasterPage;