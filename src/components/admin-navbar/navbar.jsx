import React, { useContext } from 'react';
import { Context } from '@/context';
import dinein from '@/datas/imgs/dinein.png';
import walkin from '@/datas/imgs/walkin.png';
import logo from '@/datas/imgs/logo.png';

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const toggle = () => {
    dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: !state.toggleNavbar });
  };

  return (
    <div className="z-50 fixed left-0 right-0 top-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-5 inline-flex">
      <div className="flex gap-6 itmes-center">
        <div className="border-r pr-6 border-[#e4e4e4]">
          <img
            src={logo}
            alt="logo"
          />
        </div>
        <div
          className="text-xl font-semibold leading-8 text-[#19191c]"
          onClick={toggle}>
          Dashboard
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="hidden rounded-[50px] border border-neutral-200 items-center md:flex">
          <div className="px-8 py-2.5 flex items-center gap-2 border-r border-neutral-200 hover:bg-neutral-200 rounded-l-full duration-300">
            <img
              src={walkin}
              alt=""
            />
            <div className="leading-6 text-zinc-900">Walk-In</div>
          </div>
          <div className="px-8 py-2.5 flex items-center gap-2 hover:bg-neutral-200 duration-300 rounded-r-full">
            <img
              src={dinein}
              alt=""
            />
            <div className="leading-6 text-zinc-900">Dine-In</div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <img
            className="w-11 h-11 rounded-full"
            src="https://via.placeholder.com/44x44"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
