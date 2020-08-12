import React, { useRef , useState } from 'react';
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import Inputsample from './Inputsample'
import Userlist from './Userlist'
import Createuser from './Createuser'
import './App.css';


function App() {
 
  const [users , setUsers] = useState (
    [
      {
          id:1,
          username:"KIM",
          email:"1@naver.com"
      },
      {
          id:1,
          username:"PARK",
          email:"2@naver.com"
      },
      {
          id:1,
          username:"SONG",
          email:"3@naver.com"
      }
  ]
  )

  const [inputs , setInputs] = useState({
    username:'',
    email:''

})
  const {username, email} = inputs
  const nextId = useRef(4)

  const onChangeInput =(e)=>{
    const {name , value} = e.target
    setInputs({
      ...inputs,
      [name] :value
    })
  }
  const onCreate =()=>{

    setUsers([
      ...users,
      {id:nextId.current,
      username:inputs.username,
      email:inputs.email}
    ])
    
    setInputs({
      username:'',
      email:''
    })
    nextId.current +=1
  }
  return (
      <>
      <Wrapper>
      <Hello name="김태경"  color="red" isSpecial={true} />
      <Hello  color="blue" />
      </Wrapper>
      <Counter />
      <Inputsample />
      <Createuser user={username} useremail={email} onChange={onChangeInput}  onCreate={onCreate}/>
      <Userlist  users={users} />
      </>
  );
}

export default App;
