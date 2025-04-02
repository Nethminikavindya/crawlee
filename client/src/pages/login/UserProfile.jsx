import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext"
import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useContext } from 'react'
import { assets } from "../../assets/assets";

const UserProfile = () => {
    const { userData } = useContext(AppContext);

    console.log(userData)

    return (

        <div className="max-w-lg flex flex-col gap-2 text-sm p-10">
            <div className="inline-block relative cursor-pointer">
                <img className="w-36 rounded opacity-75" src={assets.profile_img} alt="profile_pic" />
                <img className="w-10 absolute bottom-12 right-12" src={assets.upload_icon} alt="" />
            </div>

            <h2 className="font-medium text-3xl text-neutral-800 mt-4">Nethmini Kavidnya</h2>

            <hr className="bg-zinc-400 h-[1px] border-none" />


            <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                <p className="font-medium">Email Id:</p>
                <p className="text-blue-500">nethkavindya@gmail.com</p>
                <p className="font-medium">Phone:</p>
                <p className="text-blue-400">0717789422</p>
            </div>

            <div>
                <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
                <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                    <p className="font-medium">Gender:</p>
                    <p className="text-gray-500">Female</p>
                    <p className="font-medium">Birthday:</p>
                    <p className="text-gray-500">17.09.1999</p>
                </div>
            </div>
            <div className="mt-10 flex gap-2">
                <button className="border border-blue-600 px-8 py-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer" onClick={()=>{}}>Save</button>
                <button className="border border-blue-600 px-8 py-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer" onClick={() => {}}>Edit</button>
            </div>
        </div>
    )
}

export default UserProfile;