import axios from 'axios'
import md5 from 'md5'
import React,{useState} from 'react'
import Cookies from 'universal-cookie/es6'
import './css/login.css'
import imgLogo from './img/logo.jpg'


export const Login = () =>{

    const url = "http://localhost:3001/usuarios"
    const cookies = new Cookies()

    const [input, setInput] = useState({
        usuario:'',
        contrasena:''
    })
    const [error,setError] = useState(0)

    const handleInput = (e) =>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleError = (e) =>{
        setError(error+1)
        if(error >= 4){
            alert("Contraseña Invalida")
            setError(0)
        }
        console.log(error)
    }

    const handleEnviar = (e) =>{
        axios.get(url,{params:{usuario:input.usuario, clave:md5(input.contrasena)}})
        .then(resp=>{
            return resp.data
        })
        .then(resp=>{
            if(resp.length>0){
                const respuesta = resp[0]
                cookies.set('id', respuesta.id,{path:'/'})
                cookies.set('usuario', respuesta.usuario, {path:'/'})
                window.location.href='./menu'
            }else{
                handleError()
            }
        })
    }

    return(
        <div className='body-login'>
        <div className='container-fluid text-center login-container'>
            <div className='target-container'>
            <div className=''>
                
                <div>
                    <img src={imgLogo} alt='logo'/>
                </div>
                {/*<form className='input-target' onSubmit={handleEnviar}>*/}
                        <label className='form-label'>usuario</label>
                        <input type="text" onChange={handleInput} name="usuario" className='form-control' placeholder='Tu usuario'/>
                        <label className='form-label'>contraseña</label>
                        <input type="password" onChange={handleInput} name="contrasena" className='form-control' placeholder='Tu contraseña'/>
                    <button className='mt-3 btn btn-success' type='submit' onClick={()=>handleEnviar()}>Iniciar Sesion</button>
                {/*</form>*/}
                
            </div>
            </div>
        </div>
        </div>
    )
}