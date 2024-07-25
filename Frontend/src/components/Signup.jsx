import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from "axios"

function Signup() {
  const navigate=useNavigate();
  const location= useLocation()
  const from =location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo ={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:4001/user/signup" ,userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("Signup Successfull");
        navigate(from,{replace:true});
      
      }
      localStorage.setItem("Users",JSON.stringify(res.data))

    }).catch((err) => {
      console.log(err)
      toast.error("Signup error:"+err);
    })
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
              <h3 className="font-bold text-lg">Signup</h3>
              <div className='mt-4 space-y-2'>
                <label>Name</label>
                <br />
                <input
                  type='text'
                  placeholder='Enter your fullname'
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <span>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <label>Email</label>
                <br />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <label>Password</label>
                <br />
                <input
                  type='password'
                  placeholder='Enter your password'
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>Sign up</button>
                <p>
                  Have Account{" "}
                  <button
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
