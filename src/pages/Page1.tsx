import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';

export const Page1 = () => {
  const history = useHistory()
  return <div className=" ">
    <div className="flex w-full justify-between ">
      <div className="text-2xl pt-10 pl-8 pr-8 font-bold m-1 "
      >공지</div>
      <a href="/member" className="text-2xl pt-10 pl-8 pr-8 font-bold m-1 text-gray-500 "
      >멤버</a>
      <a href="todo" className="text-2xl pt-10 pl-8 pr-8 font-bold m-1 text-gray-500 "
      >일정</a>
    </div>



    <div className=" px-6 mt-12 flex flex-col space-y-4 ">
      <span className="font-bold text-2xl pt-10">
        앵콜 곡 추가
      </span>
      <span className="font-bold text-lg pb-20 ">William Tell - Overture Final로 정해졌으니 연습 후에 악보 받아가세요</span>
      <div className="flex justify-end space-x-4">
      </div>
      <hr className="bg-gray-800 h-1" />
    </div>

   
    <div className="absolute bottom-6 left-0 right-0 px-6 py-4 ">
            
            <Button onClick={() => history.push('/notice')} className='border-2 h-10 w-full border-gray-900 font-semibold text-sm mt-4'>
               To Add
            </Button>
        </div>


  </div>;


};
