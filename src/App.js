import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

import './App.css';

//조건부 랜더링

function App() {
  return (
   <>
   <Wrapper>
   <Hello name="나" color="red" isSpecial={true}/>
   <Hello color="blue"/>
   </Wrapper>
   </>
  );
}

export default App;
