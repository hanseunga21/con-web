import React from 'react';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';

export const Member = () => {
  const history = useHistory()
  return <div className=" ">
<div className= "flex w-full justify-between ">
  <a href="page1" className="text-2xl pt-10 pl-8 pr-8 font-bold m-1 text-gray-500"
  >공지</a>
  <a href="" className="text-2xl pt-10 pl-8 pr-8 font-bold m-1 "
  >멤버</a>
   <a href="" className="text-2xl pt-10 pl-8 pr-8 font-bold m-1 text-gray-500"
  >일정</a>
</div>

<div className='flex flex-col space-y-'>
  <div>
    <div className='border-2 rounded-lg border-gray-600 mt-20 mx-5 px-4 py-4 '>
     <div className='flex justify-between'>
     <div className='text-2xl font-bold'>
       조성진</div>
      <div>수정하기</div>
      </div>
      <div className='text-lg text-gray-400'>
        피아노</div>
      <div className='font-bold text-xl bg-gray-200 m-2 rounded p-4 '>
        우리은행  1002-1234-123456</div>
    
      </div>
  </div>

  <div>
    <div className='border-2 rounded-lg border-gray-600 mt-10 mx-5 px-4 py-4'>
      <div className='flex justify-between'>
      <div className='text-2xl font-bold'>
        정경화</div>
      <div>수정하기</div>
      </div>
      <div className='text-lg text-gray-400'>
        바이올린</div>
      <div className='font-bold text-xl bg-gray-200 m-2 rounded p-4 '>
        카카오뱅크 3333-12-34569</div>
    
    </div>
  </div>
</div>


<div className="absolute bottom-6 left-0 right-0 px-6 py-4 ">
            
            <Button onClick={() => history.push('/add1')} className='border-2 h-10 w-full border-gray-900 font-semibold text-sm mt-4'>
              추가하기
            </Button>
        </div>


</div>
}