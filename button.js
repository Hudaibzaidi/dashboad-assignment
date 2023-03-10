import React from 'react'
import { useParams } from 'react-router-dom'

export default function Button() {
  let params = useParams()
  console.log(params)
  return (
    <>
    <button>VIEW PAGE</button>
    </>
  )
}
