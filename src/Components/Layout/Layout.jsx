import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Header />
        </>
    )
}

export default Layout