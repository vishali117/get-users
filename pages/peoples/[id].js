import React from 'react'
import axios from 'axios'

export default function Index({people}) {
    return (
        <div style={{textAlign: 'center', color: '#fff',backgroundColor: 'brown', margin:'5px', padding:'10px'}}>
            <h2>Results By ID</h2><hr />
            <h3>Name: {people.name}</h3>
            <h3>Role: {people.job}</h3>
            <h3>Company: {people.company}</h3>
            <h3>Salary: {people.salary}</h3>
    
        </div>
    )
}

export async function getServerSideProps(context) {
    
    try{
        const response = await axios.get(`http://localhost:3000/api/peoples/${context.query.id}`)
        return{
            props: {
                people : response.data
            }
        }
    }catch(error){
        console.log(error)
    }
}
