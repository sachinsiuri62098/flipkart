import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Layout({childern}) {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ScrollTop />
            <Header />
            <main>
                {childern}
            </main>
            <Footer />
        </>
    )
}

export default Layout

// ScrollToTop.js
const ScrollTop = () => {
    const { pathname } = useLocation();
    console.log(pathname)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};