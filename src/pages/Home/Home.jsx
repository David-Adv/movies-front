import React, { useEffect, useState } from 'react'
import { Carrousel } from '../../components/carrousel/Carrousel'
import "./home.css"
import { Card } from '../../components/card/Card'
import{InputSearch} from "../../components/inputSearch/InputSearch"
import { Category } from '../../components/category/Category'
import axios from 'axios'

export const Home = () => {


  const [data,setData] = useState([])

  useEffect(()=>{
 const url = "../../../data.json"

      const fetchData = async()=>{
        try{
          const response = await axios.get("../../../data.json")
          console.log(data)
          setData(response.data)
        }catch(error){
          console.log(error)
        }

      }
      fetchData()
  },[])

  // const getmovies = async()=>{
  //   const url = "../../../data.json"
  //   try{
  //     const resp= await fetch(url)
  //     const data = await resp.json()
  //     console.log(data)


  //   }catch(error){
  //     console.log(error)

  //   }

  // }


  return (
   <>
    {/* <Carrousel/> */}

    {/* <h1 style={{fontSize:"24px",textAlign:"center"}}>All Movies</h1> */}
    
      <InputSearch/>
      
  
  {/* <div> */}
  <div className='container-check'>
          <Category/>
          <Category/>
          
        
    </div>

    <div className='Card-Container'>

      {data.map( (movie,ind) => (

        <Card 
          key={ind}
          movie={movie}
          ind={ind}
        ></Card>

      ))}
    </div>


  {/* </div> */}
      

 

  </>
  )
}
