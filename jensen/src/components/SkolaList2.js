import React, { useContext, useEffect } from 'react';
import { SkolaInLog } from './Skola';
import { Context } from './context/StateProvider';


export const SkolaList2 = () => {
  const { skolor, getSkolor } = useContext(Context);
  
    useEffect(() => {
    getSkolor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul className="list">
        {skolor.map(skola => (<SkolaInLog key={skola._id} skola={skola} />))}
      </ul>
    </>
  )
}
