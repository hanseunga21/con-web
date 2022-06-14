import React from 'react';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import { TextArea } from '../components/TextArea';

export const Add1 = () => {
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

<div>
    <div className='border-2 rounded-lg border-gray-600 my-20 mx-5 px-4 py-8
    px-6 mt-20 flex flex-col space-y-4'>
    <div>
                <TextField placeholder="제목을 입력해주세요" className='border-2 border-gray-600'>
                </TextField>
            </div>

            <div>
                <TextField placeholder="제목을 입력해주세요" className='border-2 border-gray-600'>
                </TextField>
            </div>
            <div>
                <TextField placeholder="계좌번호" className='font-bold text-xl bg-gray-200 m-2 rounded'>
                </TextField>
            </div>
    
    </div>
  </div>

<div className="absolute bottom-6 left-0 right-0 px-6 py-4 ">
            
            <Button onClick={() => history.push('/member')} className='border-2 h-10 w-full border-gray-900 font-semibold text-sm mt-4'>
              취소하기
            </Button>
        </div>


</div>
}