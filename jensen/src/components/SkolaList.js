import React, { useContext, useEffect } from 'react';
import { Skola } from './Skola';
import { Context } from './context/StateProvider';


export const SkolaList = () => {
  const { skolor, getSkolor } = useContext(Context);
  
    useEffect(() => {
    getSkolor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
   
      <ul className="list">
        {skolor.map(skola => (<Skola key={skola._id} skola={skola} />))}
      </ul>
    </>
  )
}
