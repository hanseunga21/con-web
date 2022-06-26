import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';



export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory()
  const { push } = useHistory();

  const register = () => {


    axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: name,
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
          push('/');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  };

  return <div className="w-full h-screen flex flex-col">
    <div onClick={() => history.push('/')} className="text-2xl text-left pt-10 pl-8 font-bold m-1"
    >CON</div>

    <div className="w-full h-full grid justify-center content-center ">
      <div className='w-full flex items-center justify-center'>
        <TextField placeholder='이메일을 입력해주세요' className="h-8 w-48 text-sm border-t-0 text-xs border-l-0 border-r-0 rounded-none border-b-2 border-gray-800"
          label=""
          value={email}
          onChange={(event) => {
            setEmail
              (event.target.value)
              ;
          }} />
      </div>

      <div className=' w-full flex items-center justify-center'>
        <TextField placeholder='비밀번호를 입력해주세요' className="h-8 w-48 text-sm border-t-0 text-xs border-l-0 border-r-0 rounded-none border-b-2 border-gray-800"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }} />
      </div>

      <div className='w-full flex items-center justify-center'>
        <TextField placeholder='이름을 입력해주세요' className="h-8 w-48 text-sm border-t-0 text-xs border-l-0 border-r-0 rounded-none border-b-2 border-gray-800"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }} />
      </div>
    </div>


    <div className="px-6 py-10">
     <Link to='/page1'>
      <button type="submit" className="h-10 border-2 w-full border-gray-800 font-semibold"
        onClick={() => {
          register();
        }}>
          회원가입 하기
        </button>
        </Link>
    </div>

  </div>;


};


//function replace(arg0: string) {
  //throw new Error('Function not implemented.');
//}
//function push(arg0: string) {
//  throw new Error('Function not implemented.');
//}
//h-10 border-2 w-full border-gray-800 font-semibold