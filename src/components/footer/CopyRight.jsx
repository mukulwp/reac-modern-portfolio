import React from 'react'

const CopyRight = () => {
  return (
    <div className="w-full py-10 border-t-[1px] border-t-gray-500">
        <div className="text-center text-gray-500 text-base">
            &copy; {new Date().getFullYear()}. All rights reserved by Mukul Hossain.
        </div>
    </div>
  )
}

export default CopyRight