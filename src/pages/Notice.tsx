import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { TextArea } from '../components/TextArea';
import { TextField } from '../components/TextField';

export const Notice = () => {
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
            <div>
                <TextField placeholder="제목을 입력해주세요" className='border-2 border-gray-600'>
                </TextField>
            </div>

            <div>
                <TextArea placeholder="내용을 입력해주세요" rows={7} className='border-2 border-gray-600'>
                </TextArea>
            </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-6 py-4 ">
            <Button className='border-2 h-10 w-full border-gray-800 font-semibold text-sm'>
                추가하기
            </Button>
            <Button onClick={() => history.push('/page1')} className='border-2 h-10 w-full border-gray-900  bg-gray-500 text-white font-semibold text-sm mt-4'>

                취소하기

            </Button>
        </div>

    </div>;


};
