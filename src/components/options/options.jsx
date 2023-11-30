import { multilocation, time } from '@/datas/jummy';
import React, { useState } from 'react';

const Options = () => {
  const [modalCountries, setModalCountries] = useState(false);
  const [modalCities, setModalCities] = useState(false);
  const [cityArray, setCityArray] = useState([{ city: 'not found' }]);
  const [changeCountry, setChangeCountry] = useState('Select Country');
  const [changeCity, setChangeCity] = useState('Cities');
  const [multiLocation, setMultiLocation] = useState(['not found']);
  const [modalMultiLocation, setModalMultiLocation] = useState(false);
  const [changeMultiLocation, setChangeMultiLocation] = useState('MultiLocation');
  const [changeWalkIn, setChangeWalkIn] = useState('Walk-in');
  const [walkIn, setWalkIn] = useState(false);

  const toggleModalCountries = () => {
    setModalCountries(prev => !prev);
    setModalCities(false);
    setModalMultiLocation(false);
  };

  const selectedCountry = data => {
    setChangeCountry(data);
    setModalCountries(false);
  };

  const toggleModalCites = () => {
    setModalCities(prev => !prev);
    setModalCountries(false);
    setModalMultiLocation(false);
  };

  const selectedCity = data => {
    setChangeCity(data);
    setModalCities(false);
  };

  const toggleModalMultiLocation = () => {
    setModalMultiLocation(prev => !prev);
    setModalCountries(false);
    setModalCities(false);
  };

  const selectedMultiLocation = data => {
    setChangeMultiLocation(data);
    setModalMultiLocation(false);
  };
  const toggleModalWalk = () => {
    setWalkIn(prev => {
      return !prev;
    });
    setModalCountries(false);
    setModalCities(false);
  };

  const selectedWalkin = data => {
    setChangeWalkIn(data);
    setWalkIn(false);
  };

  return (
    <div className="inline-flex flex-wrap items-center justify-between w-full mb-4 gap-9">
      <div className="flex flex-wrap items-center justify-start w-full gap-3 xl:w-auto">
        <div className="relative group grow min-w-fit shrink basis-0 h-[42px] px-3.5 flex bg-white rounded-lg border border-neutral-200">
          <div
            className="items-center gap-3 flex min-w-[120px]"
            onClick={toggleModalCountries}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">
              {changeCountry}
            </div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div
            className={`${
              modalCountries ? 'block' : 'hidden'
            } duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {multilocation.map(({ country, cities }, index) => {
              return (
                <div
                  className="p-2 px-3 text-lg duration-300 text-zinc-900 hover:text-orange-600 hover:bg-orange-50 hover:font-semibold"
                  key={index}
                  onClick={() => {
                    selectedCountry(country);
                    setCityArray(cities);
                  }}>
                  {country}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative group grow min-w-fit shrink basis-0 h-[42px] px-3.5 flex bg-white rounded-lg border border-neutral-200">
          <div
            className="items-center gap-3 flex min-w-[120px]"
            onClick={toggleModalCites}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">
              {changeCity}
            </div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div
            className={`${
              modalCities ? 'block' : 'hidden'
            } duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {cityArray.map(({ city, multilocation }, index) => {
              return (
                <div
                  className="p-2 px-3 text-lg duration-300 text-zinc-900 hover:text-orange-600 hover:bg-orange-50 hover:font-semibold"
                  key={index}
                  onClick={() => {
                    selectedCity(city);
                    setMultiLocation(multilocation);
                  }}>
                  {city}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative group grow min-w-fit shrink basis-0 h-[42px] px-3.5 flex bg-white rounded-lg border border-neutral-200">
          <div
            className="items-center gap-3 flex min-w-[120px]"
            onClick={toggleModalMultiLocation}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">
              {changeMultiLocation}
            </div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div
            className={`${
              modalMultiLocation ? 'block' : 'hidden'
            } duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {multiLocation.map((el, index) => {
              return (
                <div
                  className="p-2 px-3 text-lg duration-300 text-zinc-900 hover:text-orange-600 hover:bg-orange-50 hover:font-semibold"
                  key={index}
                  onClick={() => {
                    selectedMultiLocation(el);
                  }}>
                  {el}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative group grow min-w-fit shrink basis-0 h-[42px] px-3.5 flex bg-white rounded-lg border border-neutral-200">
          <div
            className="items-center gap-3 flex min-w-[120px]"
            onClick={toggleModalWalk}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">
              {changeWalkIn}
            </div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div
            className={`${
              walkIn ? 'block' : 'hidden'
            } duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {time.map((el, index) => {
              return (
                <div
                  className="p-2 px-3 text-lg duration-300 text-zinc-900 hover:text-orange-600 hover:bg-orange-50 hover:font-semibold"
                  key={index}
                  onClick={() => {
                    selectedWalkin(el);
                  }}>
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-[42px] w-full xl:w-auto px-3.5 py-3 bg-white rounded border border-r-neutral-200 flex items-center gap-3">
        <div className="text-lg text-orange-600">
          <i className="fa-solid fa-calendar-days"></i>
        </div>
        <div className="grow shrink basis-0 text-zinc-900 text-xs leading-[18px]">
          Today : Apr 25, 2018 12:00 AM - Apr 26, 2018 12:00 AM
        </div>
      </div>
    </div>
  );
};

export default Options;
