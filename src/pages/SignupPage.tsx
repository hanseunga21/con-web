import React, { useState } from 'react';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  return <div className="w-full h-screen flex flex-col">
  <div className="text-2xl text-left pt-10 pl-8 font-bold m-1"
  >CON</div>

  <div className="w-full h-full grid justify-center content-center ">
    <div className='w-full flex items-center justify-center'>
      <TextField placeholder='아이디를 입력해주세요' className="h-8 w-48 text-sm border-t-0 text-xs border-l-0 border-r-0 rounded-none border-b-2 border-gray-800" 
      label="이메일"
      value={email}
      onChange={(event) => {
        setEmail(event.target.value);
      }}/>
    </div>
    <div className=' w-full flex items-center justify-center'>
      <TextField placeholder='비밀번호를 입력해주세요' className="h-8 w-48 text-sm border-t-0 text-xs border-l-0 border-r-0 rounded-none border-b-2 border-gray-800"
      value={email}/>
    </div>
    <div className='w-full flex items-center justify-center'>
      <TextField placeholder='이름을 입력해주세요' className="h-8 w-48 text-sm border-t-0 text-xs border-l-0 border-r-0 rounded-none border-b-2 border-gray-800"
      value={email}/>
    </div>
  </div>


  <div className="px-6 py-10">
    <Button className='h-10 border-2 w-full border-gray-800 font-semibold'>
      회원가입 하기
    </Button>
  </div>
  </div>;
  
};
