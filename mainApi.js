// import React from 'react'

import axios from "axios"

    let api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    });

    let Get = (endPoint) => (
        api.get(endPoint)
    )
    
    let GetById = () => {}
    let Put = () => {}
    let Push = () => {}
    let Del = () => {}
 
export {Get, GetById, Put, Push, Del}