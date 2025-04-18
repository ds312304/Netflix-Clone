import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { login, signUp } from '../firebase'
import netflix_spinner from '../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault()
    setLoading(true);
    if(signState === 'Sign In'){
      await login(email, password)
      setEmail("")
      setPassword("")
    }else{
      await signUp(name, email, password)
    }
    setLoading(false);
  }

  return (
    loading ? (
      <div className='w-full h-screen flex items-center justify-center'>
        <img className='w-[60px]' src={netflix_spinner} alt='netflix-spinner' />
      </div>
    ) : (
      <div className='h-screen bg-[linear-gradient(#0000007e,#0000007e),url("/background_banner.jpg")] py-[20px] px-[8%]'>
        <img className='w-[120px]' src={logo} alt='login-logo' />
        
        <div className='w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-md p-[35px] sm:p-[60px] mt-[40px] m-auto'>
          <h1 className='text-3xl font-semibold mt-[5px] sm:mt-[28px]'>{signState}</h1>

          <form>
            {
              signState === 'Sign Up' && (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0 rounded-sm py-[10px] px-[14px] sm:py-[16px] sm:px-[20px] text-[15px] sm:text-[16px] font-medium placeholder:font-normal'
                  type='text'
                  placeholder='Your Name'
                />
              )
            }
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0 rounded-sm py-[10px] px-[14px] sm:py-[16px] sm:px-[20px] text-[15px] sm:text-[16px] font-medium placeholder:font-normal'
              type='email'
              placeholder='Email'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0 rounded-sm py-[10px] px-[14px] sm:py-[16px] sm:px-[20px] text-[15px] sm:text-[16px] font-medium placeholder:font-normal'
              type='password'
              placeholder='Password'
            />

            <button
              onClick={userAuth}
              type='submit'
              className='w-full border-0 outline-0 p-[10px] sm:p-[12px] bg-[#e50914] text-white rounded-sm text-[15px] sm:text-[16px] font-normal mt-[15px] sm:mt-[20px] cursor-pointer'
            >
              {signState}
            </button>

            <div className='flex items-center justify-between text-[#b3b3b3] text-[13px] mt-3'>
              <div className='flex items-center gap-[5px]'>
                <input className='w-[18px] h-[18px]' type='checkbox' />
                <label>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>

          <div className='mt-[30px] sm:mt-[40px] text-[#737373] text-[14px]'>
            {signState === 'Sign In' ? (
              <p>
                New to Netflix?
                <span
                  onClick={() => setSignState("Sign Up")}
                  className='mx-2 sm:mx-1.5 text-white font-normal cursor-pointer'
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have account?
                <span
                  onClick={() => setSignState("Sign In")}
                  className='mx-1.5 text-white font-normal cursor-pointer'
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default Login
