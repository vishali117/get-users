
import react from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Link from 'next/link'  

export default function Home({peoples}) {
    const router = useRouter()
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Next API!</h1>
        <hr />

        {peoples.map(people => {

          return <div style={{textAlign: 'center', cursor:'pointer'}} onClick={()=> {router.push(`/peoples/${people.id}`)}}>
            <h5>Name: {people.name}</h5>
            <h5>Age: {people.age}</h5>
            <hr />
          </div>

        })}

    </div>
  )
}

export async function getStaticProps(){
  try{
    const response = await axios.get('http://localhost:3000/api/peoples')
    return {
      props: {
        peoples: response.data
    }
  }
  }catch(error){
    console.log(error)
  }
}
