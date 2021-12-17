import React from 'react'
import axios from 'axios'

export default function Id({user}) {
    return (
        <div className="header m-5">
            <h3>{user.name} </h3><hr />
            <p>Name: <b>{user.name}</b></p>
            <p>Username: <b>{user.username}</b></p>
            <p>Email: <b>{user.email}</b></p>
            <p>City: <b>{user.address.city}</b></p>
            <p>Website: <b>{user.website}</b></p>
            
        </div>
    )
}



  export async function getServerSideProps(context) {

    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
    
        return{
            props: { 
                user: response.data
            }
        }
  
   } catch(error){
       console.log(error)
   }

}