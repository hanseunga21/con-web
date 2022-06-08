import React from 'react';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';

export const LoginPage = () => {
  return <div className="w-full h-screen flex flex-col">
    <div className="text-2xl text-left pt-10 pl-8 font-bold m-1"
    >CON</div>
    <div>

    </div>
    <div className='w- h-24 flex items-center justify-center'>
      <TextField placeholder='sdsds' className="border-t-0 border-l-0 border-r-0 rounded-none border-b-2 border-gray-800" />
    </div>
    <div className='w-full h-full flex items-center justify-center'>
      <TextField placeholder='sdsds' className="border-t-0 border-l-0 border-r-0 rounded-none border-b-2 border-gray-800" />
    </div>
    <div className="px-12 py-4">
      <Button className='border-2 w-full border-gray-800 text-bold'>
        로그인
      </Button>
    </div>
  </div>;
};

// 인라인 태그 사용np