'use client'
import React, { useState } from 'react'
import styles from "./About.module.css";
import Button from "@mui/material/Button";
import TableComponent from '@/Common/Components/TableComp';

const About = () => {
  const [res,setRes] = useState([])
  const getPostHandler = async() => {
    // const obj=new XMLHttpRequest();
    // obj.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    // obj.send()
    // obj.onload((data)=>{
      //   setRes(data)
      // })
      // obj.error((err)=>{
        //   console.log(err);
    // })
    try{
      const rslt = await fetch('https://jsonplaceholder.typicode.com/posts',{
        meṯhod:'get'
      })
      const result = await rslt.json()
      setRes(result)
        // console.log(result); 
    }catch(err){
      console.log(err);
    }finally{

    }

  };
  return (
    <div>
      <h3 className="text-center my-3">This is About</h3>
      <Button
        onClick={getPostHandler}
        variant="contained"
        className='mb-2'
      >Send </Button>
    {res.length>0 && <TableComponent headers={['Id','Title','Body']} rows={res} columns={['id','title','body']}/>}
    </div>
  );
};

export default About;
