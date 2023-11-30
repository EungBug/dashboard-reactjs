import React from 'react';
import Options from '../options/options';
import Cards from '../admin-sale-cards/cards';
import { dateCards } from '@/datas/jummy';
import Line from '../charts/linechart/line';
import Bar from '../charts/bar-graph/bar';

const Main = () => {
  return (
    <div className="min-h-screen p-6 mb-6 bg-slate-50">
      <div>
        <Options />
      </div>
      <div>
        <Cards />
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 w-full my-4 lg:w-[64%] bg-white rounded-xl">
          <div className="mb-8 font-medium leading-normal text-zinc-900">Selected Location</div>
          <div className="flex flex-wrap gap-2">
            {dateCards.map(({ text, earn, percent, color }) => (
              <div
                className={`grow shrink-0 basis-0 h-[100px] p-3 flex-col inline-flex gap-4 bg-white rounded-sm shadow border-t-2 ${color}`}>
                <div className="self-stretch text-zinc-500 text-xs font-medium leading-[18px]">
                  {text}
                </div>
                <div className="inline-flex items-baseline self-stretch gap-1">
                  <div className="text-zinc-900 text-xl font-semibold leading-[30px]">{earn}</div>
                  <div className="grow shrink basis-0 text-lime-500 text-xs leading-[18px]">
                    +{percent}
                  </div>
                </div>
              </div>
            ))}
            <Line />
          </div>
        </div>
        <div className="w-full p-6 my-4 bg-white lg:w-1/3 rounded-xl">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default Main;
