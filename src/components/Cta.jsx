import React from 'react';
import Typed from 'react-typed';


const Cta = ({ fields }) => {
  return (
    <div className='text-white'>
     <div className='flex justify-center items-center'>
          <Typed
          className='md:text-3xl sm:text-3xl text-lg font-bold md:pl-4 pl-2'
            strings={[fields.description]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
</div>
  )
}

export default Cta



