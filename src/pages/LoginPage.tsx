import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { replace } = useHistory();
  const history = useHistory();
  const checkUser = () => {
    if (email == '' || password == '') {
      alert('아이디와 비밀번호를 입력해주세요');
      return;
    }
  }
  
  

  
  axios
      .post('http://localhost:1337/api/auth/local/register', {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('user', response.data.user.username);
        replace('/');
      })
      .catch(( error ) => {
        // Handle error.
        console.log('An error occurred:' , error.response);
        alert('아이디와 비밀번호를 다시 확인해주세요.');
      });

  return <div className="w-full h-screen flex flex-col">
    <div onClick={() => history.replace('/')} className=" -2xl text-left pt-10 pl-8 font-bold m-1"
    >CON</div>

    <div className="w-full h-full grid justify-center content-center ">
      <div className='w-full flex items-center justify-center'>
        <TextField className="h-8 w-48 text-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 border-gray-800"
         type="email"
         name="email"
         id="email"
         placeholder="이메일"
         label=""
          value={email}
        onChange={(event) => {
          setEmail
            (event.target.value);
          }}/>
      </div>

      <div className=' w-full flex items-center justify-center'>
        <TextField placeholder='비밀번호' className="h-8 w-48 text-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 border-gray-800" type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}/>
      </div>
    </div>


    <div className="px-6 py-10">
      <Button type="button" 
      className='h-10 border-2 w-full border-gray-800 font-semibold '
       onClick={() => {
          checkUser();
       }} >
        로그인 하기
      </Button>
    </div>
  </div>;
};


// 인라인 태그 사용