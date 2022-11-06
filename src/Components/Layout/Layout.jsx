import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Header from '../Header/Header';
import About from '../About/About';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Header />
            <br />
            <About />
        </>
    )
}

export default Layout