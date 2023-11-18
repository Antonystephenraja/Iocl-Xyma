import React,{useState} from 'react'
import xyma from '../images/xyma.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:2001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
  
        console.log(data);
        if (data.user) {
          localStorage.setItem('token', data.user);
          alert('Login Successful');
          window.location.href = '/' 
        } else {
          alert('Error : Incorrect Email and Password');
        }
      } catch (error) {
        console.error(error);
        setMessage('An error occurred. Please try again.');
      }
    };
    return (
      <div>
        <section className="bg-gray-50 dark:bg-gray-900 login">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-center">
                  <img src={xyma} className={`cursor-pointer w-40 mt-2 ml-25 duration-500`} />
              </div>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <a href='/app'>
                      <button type="submit" className="w-full mt-5 text-white bg-[#1AADC4] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Sign in
                      </button>
                  </a>
                </form>
                  {message && (
                      <div className={`mt-4 text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
            </div>
          )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
export default Login
