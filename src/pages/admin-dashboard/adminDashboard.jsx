import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/admin-navbar/navbar';
import Sidebar from '@/components/admin-sidebar/sidebar';
import Main from '@/components/admin-main/main';
import Marketing from '@/components/admin-marketing/marketing';
import { Context } from '@/context/index';
import { Data } from '@/datas/jummy';

const AdminDashboard = () => {
  const { category } = useParams();
  const cat = Data.find(category => category.url === parseInt(category));
  const { state, dispatch } = useContext(Context);
  const [size, setSize] = useState(1000);

  window.addEventListener('resize', e => {
    setSize(e.currentTarget.innerWidth);
  });

  useEffect(() => {
    size < 768
      ? dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: false })
      : dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: true });
  }, [size]);

  return (
    <div className="bg-slate-50">
      <div>
        <Navbar />
      </div>
      <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
        <Sidebar />
        <div
          className={`main overflow-auto w-full h-full z-10 ${
            state.toggle
              ? `${state.toggleNavbar ? 'md:ml-[310px]' : 'ml-0'}`
              : `${state.toggleNavbar ? 'md:ml-[90px]' : 'ml-0'}`
          }`}>
          {category === 'main' && <Main />}
          {category === 'marketing' && <Marketing />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
