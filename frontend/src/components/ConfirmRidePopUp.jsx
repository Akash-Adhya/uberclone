import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const submitHander = (e) => {
    e.preventDefault();
}

const ConfirmRidePopUp = (props) => {

    const [OTP, setOTP] = useState('');

    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-700 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
            <div className='flex items-center justify-between p-3 border-2 border-gray-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-lg font-medium capitalize'>Mia jones</h2>
                </div>
                <h5 className='text-lg font-semibold'>4.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>8B bus terminus, Jadavpur</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Jadavpur, kolkata</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Sonagachi shiv mondir</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Sonagachi, Kolkata</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹295</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

                <div className='mt-6 w-full'>
                    <form onSubmit={submitHander}>
                        <input value={OTP} onChange={(e) => {setOTP(e.target.value);}} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />

                        <div className='flex justify-center items-center gap-5'>
                            <button onClick={() => {
                                props.setConfirmRidePopupPanel(false)
                                props.setRidePopupPanel(false)
                            }} className='w-[45%] mt-5 bg-gray-400 text-lg text-white font-semibold p-3 rounded-lg'>Cancel</button>
                            <Link to='/captain/riding' className='w-[45%] mt-5 text-lg flex justify-center bg-black text-white font-semibold p-3 rounded-lg'>Confirm</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp;