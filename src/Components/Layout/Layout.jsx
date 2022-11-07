import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <Contact />
        </>
    )
}

export default Layout