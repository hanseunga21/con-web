import React from 'react';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return <div className="w-full h-screen flex flex-col items-center justify-center">
    <div>
      <div className='text-2xl text-center font-bold m-1'>CON</div>
      <div className='text-sm text-center font-medium '>나의 모든</div>
      <div className='text-sm text-center font-medium'>프로젝트를</div>
      <div className='text-sm text-center font-medium'>한눈에</div>
    </div>



    <div className="absolute bottom-6 left-0 right-0 px-6 py-4 ">
      <Button className='border-2 h-10 w-full border-gray-800 font-semibold text-sm'>
        로그인
      </Button>
      <Button className='border-2 h-10 w-full border-gray-900 mt-3 bg-gray-500 text-white font-semibold text-sm'>
        회원가입
      </Button>
    </div>

  </div >;
};
