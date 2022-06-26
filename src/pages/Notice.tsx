import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { TextArea } from '../components/TextArea';
import { TextField } from '../components/TextField';
import axios from 'axios';


export function Notice({ }) { 

    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const history = useHistory();
    const { push } = useHistory();

    
    const register = () => {

        axios
            .post('http://localhost:1337/api/auth/local/cons', {
                username: title,
                email: contents,
            })
            .then((response) => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                localStorage.setItem('token', response.data.jwt);
                push('/');
                ;
            })
            .catch((error) => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    };


   
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
                <TextField placeholder="제목을 입력해주세요" className='border-2 border-gray-600' value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}>
                </TextField>
            </div>

            <div>
                <TextArea placeholder="내용을 입력해주세요" rows={7} className='border-2 border-gray-600' value={contents}
                    onChange={(event) => {
                        setContents(event.target.value);
                    }}>
                </TextArea>
            </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-6 py-4 ">
        <Link to="/page1">
            <Button type="submit" className='border-2 h-10 w-full border-gray-800 font-semibold text-sm'
            onClick={() => {
                register();
            }}>
                To Add
            </Button>
        </Link>

            <Button onClick={() => history.push('/page1')} className='border-2 h-10 w-full border-gray-900  bg-gray-500 text-white font-semibold text-sm mt-4'>

                Cancel

            </Button>
        </div>

    </div>;


};
function push(arg0: string) {
    throw new Error('Function not implemented.');
}

