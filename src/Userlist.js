import React from 'react'

/*function Userlist() {
const users = [
    
{
    id:1,
    username:"kim",
    email:"abc@naver.com"
},
{
    id:2,
    username:"lee",
    email:"def@naver.com"
},
{
    id:3,
    username:"park",
    email:"ghi@naver.com"
}
]

    return(
        <div>
            <div><b>{users[0].username}: </b> <span>{users[0].email}</span></div>
            <div><b>{users[1].username}: </b> <span>{users[1].email}</span></div>
            <div><b>{users[2].username}: </b> <span>{users[2].email}</span></div>
        </div>
    )
}

export default Userlist;
*/

var User = ({user})=>{
    return (
        <div>
            <b>{user.username} : </b> <span> {user.email}</span>
        </div>
    )
}

function Userlist(users) {

    
        return(
            <div>
                {users.map(user =>(
                    <User user= {users} key={users.id} />
                ))}
            </div>
        )
    }
    
    export default Userlist;