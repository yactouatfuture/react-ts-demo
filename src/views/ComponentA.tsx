import React from 'react';

const ComponentA = () => {

  throw new Error("Error from component A");
  
  return (
    <div>ComponentA</div>
  )
}

export default ComponentA;