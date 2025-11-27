import React from 'react'
import Image from 'next/image'

const Lang = () => {
    return (
        <div className=' boxes grid-cols-3 gap-3'>
            <div className=" sbox html">
                <img className='h-20 w-25 rounded-2xl' src="html.png" alt="" />

            </div>
            <div className=" sbox css">
                <img className='h-20 w-25 rounded-2xl' src="css.png" alt="" />

            </div>
            <div className=" sbox js">
                <img className='h-20 w-25 rounded-2xl' src="js.png" alt="" />

            </div>
            <div className=" sbox cpp">
                <img className='h-20 w-25 rounded-2xl' src="download.png" alt="" />
            </div>
            <div className=" sbox c">
                <img className='h-20 w-25 rounded-2xl' src="c.png" alt="" />

            </div>
            <div className=" sbox node">
                <img className='h-20 w-25 rounded-2xl' src="node.png" alt="" />

            </div>
            <div className=" sbox react">
                <img className='h-20 w-25 rounded-2xl' src="react.png" alt="" />

            </div>
            <div className=" sbox mongodb">
                <img className='h-20 w-25 rounded-2xl' src="mongo.png" alt="" />

            </div>
            <div className=" sbox figma">
                <img className='h-20 w-25 rounded-2xl' src="figma.png" alt="" />

            </div>
            <div className=" sbox next ">
                <img className='h-20 w-25 rounded-2xl' src="next.jpeg" alt="" />

            </div>
        </div>
    )
}

export default Lang
