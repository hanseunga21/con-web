import React from 'react';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';

export const LoginPage = () => {
  return <div className="w-full h-screen flex flex-col">
    <div className="text-2xl text-left pt-10 pl-8 font-bold m-1"
    >CON</div>

    <div className="w-full h-full grid justify-center content-center ">
      <div className='w-full flex items-center justify-center'>
        <TextField placeholder='이메일' className="h-8 w-48 text-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 border-gray-800" />
      </div>
      <div className=' w-full flex items-center justify-center'>
        <TextField placeholder='비밀번호' className="h-8 w-48 text-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 border-gray-800" type="password"/>
      </div>
    </div>


    <div className="px-6 py-10">
      <Button className='h-10 border-2 w-full border-gray-800 font-semibold '>
        로그인 하기
      </Button>
    </div>
  </div>;
};

// 인라인 태그 사용