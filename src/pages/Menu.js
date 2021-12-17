import React from 'react'
import Cookies from 'universal-cookie/es6'



export const Menu = () =>{

    const cookies = new Cookies()

    const id = cookies.get('id')


    return(
        <div className='menu-container'>
            <h1>{id}</h1>
        </div>
    )
}