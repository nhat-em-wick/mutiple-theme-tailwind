import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center pb-16'>
      <div className='h-2/3 w-2/3'>
        <img
          className='w-full h-full object-cover'
          src='https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2022/6/18/photo1655524983258-16555249833711967616300.jpg'
          alt=''
        />
      </div>
      <div className='w-2/3'>
        <h2 className='font-black text-[30px]'>Ca si IU</h2>
        <p className='font-medium mt-4 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sapiente. Sapiente quas assumenda, cupiditate
          sint incidunt blanditiis deleniti tempora consectetur. Iure debitis libero nulla labore pariatur, quaerat
          dignissimos quisquam laborum.
        </p>
        <button className='border-2 border-current font-black pt-1 pb-1 pl-6 pr-6 mt-3 rounded-md'>
          Click to Shop
        </button>
      </div>
    </div>
  )
}

export default Home
