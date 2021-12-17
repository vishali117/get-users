import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import {useRouter} from 'next/router'


export default function Index({users}) {

    const router = useRouter();
    return (
        <div className = 'tc p-2'>
            <h1 style={{textAlign:'center',color: 'darkblue'}}>Users List</h1>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">USERNAME</th>
                    <th scope="col">EMAIL</th>
                    
                    </tr>
                </thead>
                <tbody> {users.map(user => {
                   return <tr onClick = {() => {router.push(`/users/${user.id}`) }} >
                            <td scope="row">{user.id}</td>
                            <td style={{cursor: 'pointer'}}>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            </tr>
                    
                         })}
                </tbody>
            </table>
        </div>
    )
}

export async function getStaticProps() {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    
        return{
            props: { 
                users: response.data
            }
        }
  
   } catch(error){
       console.log(error)
   }
}   
