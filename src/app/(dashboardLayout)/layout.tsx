import Sidebar from '@/components/shared/Sidebar';
import React, { ReactNode } from 'react';

interface IDashboardLayout {
    children: ReactNode;
  }

const Dashboardlayout = ({children}: IDashboardLayout) => {
    return (
        <div className='flex'>
            <Sidebar/>
            {children}
        </div>
    );
};

export default Dashboardlayout;