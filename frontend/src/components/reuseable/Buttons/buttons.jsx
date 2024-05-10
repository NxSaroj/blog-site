import React from 'react'

const Button = ({ buttonTitle }) => {
  return (
   <>
      <button
        className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] bg-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        {buttonTitle}
      </button>
   </>
  )
}

export default Button


