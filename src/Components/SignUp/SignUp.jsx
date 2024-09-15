import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/login.jpg'
import { useForm } from 'react-hook-form';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAxiosCommon from '../../hooks/useAxiosCommon';

const SignUp = () => {

    const { signUpSystem } = useAuth()
    const axioscommon = useAxiosCommon()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data.email, data.password)
        signUpSystem(data.email, data.password)
            .then(res => {
                const userInfo = {
                    email: data.email,
                    password: data.password
                }
                console.log(userInfo)
                axioscommon.post('/all-users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your SinUp Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex w-[80%] m-auto '>
                    <div className="w-[50%]">
                        <img className="" src={loginImage} alt="" />
                    </div>
                    <div className='w-[40%] px-6 py-8 md:px-8 lg:w-1/2'>
                        <div className='flex justify-center mx-auto'>
                        </div>
                        <p className='mt-3 text-4xl'>Sign Up</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mt-4 border-b-[1.5px] border-[#000]'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >

                                </label>
                                <input
                                    {...register("email")}
                                    className="input w-full "
                                    id='LoggingEmailAddress'
                                    autoComplete='email'

                                    placeholder="Enter Your Email"
                                    name='email'

                                    type='email'
                                />
                            </div>
                            <div className='my-4 border-b-[1.5px] border-[#000]'>
                                <div className='flex justify-between'>
                                    <label
                                        className='block mb-2 text-sm font-medium text-gray-600 '
                                        htmlFor='loggingPassword'
                                    >
                                    </label>
                                </div>
                                <input
                                    {...register("password")}
                                    className="input w-full "
                                    id='loggingPassword'
                                    autoComplete='current-password'
                                    name='password'
                                    placeholder="Enter Your Password"
                                    type='password'
                                />
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex">
                                    <input type="checkbox" required className="checkbox checkbox-accent" />
                                    <span className=" mb-[4px] ml-[10px]">Remember me</span>
                                </label>
                            </div>
                            <div className='mt-6'>
                                <button
                                    type='submit'
                                    className="btn px-[30px] bg-[#20d7ab] text-white font-bold"
                                >
                                    SignUp
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center gap-[16px] my-[20px]">
                            <h1 className="font-bold">Or Login with</h1>
                            <button>
                                <FcGoogle className="text-4xl" />
                            </button>
                            <FaFacebookSquare className="text-4xl text-[#3b5998]" />
                        </div>
                        <div>
                            <Link to='/login'> <h1 className="underline underline-offset-2">I have Already Account</h1></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;