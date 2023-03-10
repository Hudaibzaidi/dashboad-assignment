import React, { useEffect, useState } from 'react'
import About from './about';
import { Get } from './mainApi'
import Button from '../mainroute/button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [apiHandle, setApiHandle] = useState([]);
  const [loaderApiHandle, setLoaderApiHandle] = useState(false);
  let getData = () => {
    setLoaderApiHandle(true)
    Get('users').then(res => {
      console.log(res)
      setLoaderApiHandle(false)
      setApiHandle([...res.data])
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  let arr = [
    {
      key: 'name',
      displayName: 'UserName',
    },
    {
      key: 'email', 
      displayName: 'Email',
    },
    {
      key: 'contect', 
      displayName: 'Phone',
    },
    {
      key: 'website', 
      displayName: 'Website',
    },
  ]
  let save = () => {


  }
  return (
    <>
      <About title="table" colums={arr} dataSource={apiHandle} loader={loaderApiHandle}/>
      <Button onClick={() => save()}/>
    </>
  )
}

