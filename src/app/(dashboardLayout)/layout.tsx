import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const Dashboardlayout = ({children}) => {
    return (
        <div className='flex'>
            <Sidebar/>
            {children}
        </div>
    );
};

export default Dashboardlayout;