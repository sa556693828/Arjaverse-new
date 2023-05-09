import React from 'react'
import { AiOutlineRight } from "react-icons/ai";

const LinearButton = ({ text }) => {
    return (
        <button className="w-60 px-2 h-14 bg-gradient-to-r from-[#FE87BD] to-[#79A0EB] flex items-center  justify-center text-2xl font-medium gap-2	rounded-[14px]"
        >
            {text}
            <AiOutlineRight />
        </button>)
}

export default LinearButton