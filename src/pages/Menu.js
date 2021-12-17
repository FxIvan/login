import React,{useEffect} from 'react'
import Cookies from 'universal-cookie/es6'



export const Menu = () =>{

    const cookies = new Cookies()
    const handleCerrar = () =>{
        cookies.remove('id',{path:'/'})
        cookies.remove('usuario',{path:'/'})
        window.location.href='/'
    }

    const id = cookies.get('id')
    const usuario = cookies.get('usuario')

    useEffect(()=>{
        if(!cookies.get('usuario'))
        window.location.href='./'
    },[])


    return(
        <div className='menu-container'>
            <h1>{id}</h1>
            <h2>{usuario}</h2>
            <button onClick={()=>handleCerrar()}>Cerrar Sesion</button>
        </div>
    )
}