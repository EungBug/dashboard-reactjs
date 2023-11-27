import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '@/context';
import { Data } from '@/datas/jummy';

const Sidebar = () => {
  const { state, dispatch } = useContext(Context);
  const [activeIcon, setActiveIcon] = useState('fa-solid fa-chart-pie');
  const [category, setCategory] = useState(Data[0].inside);
  const [activeCategory, setActiveCategory] = useState('Sales');

  const handleToggle = () => {
    dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: false });
  };

  const handleMenuClick = ({ icon, inside }) => {
    if (icon === activeIcon) {
      dispatch({ type: 'SET_TOGGLE', payload: !state.toggle });
    } else {
      dispatch({ type: 'SET_TOGGLE', payload: true });
      setActiveIcon(icon);
      setCategory(inside);
    }
  };

  const handleCategoryClick = categroy => {
    setActiveCategory(categroy);
  };

  return (
    <div className={`${state.toggleNavbar ? 'block' : 'hidden'}`}>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-40 md:hidden bg-slate-700 backdrop-blur-md opacity-60"
        onClick={handleToggle}></div>
      <div className="fixed z-50 flex h-full drop-shadow-2xl md:drop-shadow">
        <div className="flex flex-col min-h-full gap-4 px-4 py-6 overflow-hidden md:overflow-auto bg-zinc-900">
          {Data.map((icon, index) => (
            <div
              onClick={() => handleMenuClick(icon)}
              className={`p-3.5 cursor-pointer rounded-lg flex-col hover:text-white duration-300 gap-2 flex ${
                activeIcon === icon.icon
                  ? 'text-white bg-gradient-to-bl from-amber-500 to-pink-500'
                  : 'text-neutral-400'
              }`}>
              <i className={`${icon.icon} text-xl w-6 h-6 text-center`}></i>
            </div>
          ))}
        </div>
        <div
          className={`w-56 ${
            state.toggle ? 'block' : 'hidden'
          } h-full overflow-hidden md:overflow-auto py-6 bg-white border-r border-neutral-200 flex-col gap-4 inline-flex`}>
          {category.map(({ text, icon, url }, index) => (
            <Link
              to={`/admin-dashboard/${url}`}
              key={index}
              className={`self-stretch duration-300 cursor-pointer px-[18px] py-3.5 items-center gap-3 inline-flex ${
                activeCategory === text
                  ? 'bg-orange-50 bg-opacity-80 border-r-2 border-orange-600'
                  : 'text-zinc-500 hover:bg-neutral-200'
              }`}
              onClick={() => {
                handleCategoryClick(text);
              }}>
              <div
                className={`w-6 relative text-xl  ${
                  activeCategory === text ? 'text-orange-600' : 'text-zinc-500'
                }`}>
                <i className={icon} />
              </div>
              <div
                className={`grow shrink basis-0 ${
                  activeCategory === text ? 'text-orange-600 font-semibold' : 'text-zinc-500'
                } text-sm leading-tight`}>
                {text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
