import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/admin-navbar/navbar';
import Sidebar from '@/components/admin-sidebar/sidebar';
import Main from '@/components/admin-main/main';
import Marketing from '@/components/admin-marketing/marketing';
import { Context } from '@/context/index';
import { Data } from '@/datas/jummy';

const AdminDashboard = () => {
  return (
    <div className="bg-slate-50">
      <div>
        <Navbar />
      </div>
      <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
        <Sidebar />
      </div>
    </div>
  );
};

export default AdminDashboard;
