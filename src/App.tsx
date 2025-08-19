import React from 'react';

function MyButton(){
  return(
    <button>I'm button</button>
  );
}

export default function MyApp(){
  return(
    <div>
    <h1>Welcome to Iwadeyama!</h1>
    <MyButton />
    </div>
  );
}