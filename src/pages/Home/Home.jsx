import React from 'react'
import { Carrousel } from '../../components/carrousel/Carrousel'
import "./home.css"
import { Card } from '../../components/card/Card'
import{InputSearch} from "../../components/inputSearch/InputSearch"
import { Category } from '../../components/category/Category'
export const Home = () => {
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
    <Card></Card>
    </div>


  {/* </div> */}
      

 

  </>
  )
}
