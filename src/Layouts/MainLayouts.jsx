import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { Container } from 'lucide-react';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            
            <Navbar></Navbar>
            <div className='flex-1 bg-[#f5f5f5] py-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        
        </div>
    );
};

export default MainLayouts;