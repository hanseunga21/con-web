import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';

export const Todo = () => {
    const history = useHistory()
    return <><><div className=" ">
        <div className="flex w-full justify-between ">
            <a href="page1" className="text-2xl pt-10 pl-8 pr-8 font-bold m-1 text-gray-500 "
            >공지</a>
            <a href="/member" className="text-2xl pt-10 pl-8 pr-8 font-bold m-1 text-gray-500 "
            >멤버</a>
            <a href="" className="text-2xl pt-10 pl-8 pr-8 font-bold m-1  "
            >일정</a>
        </div>

    </div>
    
    <div className=''>

                <div>
                <div className="flex flex-row-reverse space-x-4 space-x-reverse mt-20 mr-4 ml-4">
                    <span className="">
                     수정하기</span>
                    <span className="">
                    삭제하기</span>
                </div>

                <div className='border-2 rounded-lg border-gray-400 mx-5 px-4 py-2 '>
                    <div className='flex justify-between'>
                        <div className='text-lg font-bold'>
                            4월 20일 파트 연습</div>
                    </div>
                </div>
            </div>

            <div>
                <div className='border-2 rounded-lg border-gray-400 mt-5 mx-5 px-4 py-2'>
                    <div className='flex justify-between'>
                        <div className='text-lg font-bold'>
                            연습실 대여</div>
                    </div>
                </div>
            </div>

            <div>
                <div className='border-2 rounded-lg border-gray-400 mt-5 mx-5 px-4 py-2'>
                    <div className='flex justify-between'>
                        <div className='text-lg font-bold'>
                            입금 확인</div>
                    </div>
                </div>
            </div>

            <div>
                <div className='border-2 rounded-lg border-gray-400 mt-5 mx-5 px-4 py-2'>
                    <div className='flex justify-between'>
                        <div className='text-lg font-bold'>
                            5월 5일 파트 연습</div>
                    </div>
                </div>
            </div>
        </div></><div className="absolute bottom-6 left-0 right-0 px-6 py-4 ">

            <Button onClick={() => history.push('/addtodo')} className='border-2 h-10 w-full border-gray-900 font-semibold text-sm mt-4'>
                추가하기
            </Button>
        </div></>



}