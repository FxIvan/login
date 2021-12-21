import React,{useEffect} from 'react'
import Cookies from 'universal-cookie/es6'
//Imagenes Crypto
import bitcoinicon from './img/iconCrypto/bitcoinicon.png'
import etheureumicon from './img/iconCrypto/etheureumicon.png'
import thethericon from './img/iconCrypto/thethericon.png'

export const Menu = () =>{

    const cookies = new Cookies()
    const handleCerrar = () =>{
        cookies.remove('id',{path:'/'})
        cookies.remove('usuario',{path:'/'})
        cookies.remove('datos', {path:'/'})
        window.location.href='/'
    }

    const id = cookies.get('id')
    const usuario = cookies.get('usuario')
    const datos = cookies.get('datos')
    
    const datosUsuario = datos[0]

    useEffect(()=>{
        if(!cookies.get('usuario'))
        window.location.href='./'
    },[])


    return(
        <div className='menu-container'>
            <div>
                <h1>{usuario}</h1>
            </div>
            
            <div>
                <h2>Tu Dinero:</h2>
                <h3>{datosUsuario.dinero} {datosUsuario.moneda}</h3>
                <h3>{datosUsuario.dineroUSD} {datosUsuario.monedaUSD}</h3>
            </div>

            <div>
                <h2>Tus Cryptos</h2>

                <img src={bitcoinicon}/>
                <h3>{datosUsuario.bitcoin}</h3>

                <img src={etheureumicon}/>
                <h3>{datosUsuario.etheureum}</h3>

                <img src={thethericon}/>
                <h3>{datosUsuario.thether}</h3>
            </div>

            <div>
                <h2>Pais</h2>
                <p>Moneda:{datosUsuario.pais}</p>
                <h3></h3>
                <p>Capital:</p>
                <h3></h3>
                <p>Presidente</p>
                <h3></h3>
            </div>

            <button className='btn btn-danger' onClick={()=>handleCerrar()}>Cerrar Sesion</button>
        </div>
    )
}