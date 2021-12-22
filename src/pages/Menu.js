import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import Cookies from 'universal-cookie/es6'
//Imagenes Crypto
import bitcoinicon from './img/iconCrypto/bitcoinicon.png'
import etheureumicon from './img/iconCrypto/etheureumicon.png'
import thethericon from './img/iconCrypto/thethericon.png'
import './css/menu.css'

export const Menu = () => {
  const [pais, setPais] = useState([])

  const url = 'http://localhost:3001/infoPais'

  const cookies = new Cookies()
  const handleCerrar = () => {
    cookies.remove('id', { path: '/' })
    cookies.remove('usuario', { path: '/' })
    cookies.remove('datos', { path: '/' })
    window.location.href = '/'
  }

  const id = cookies.get('id')
  const usuario = cookies.get('usuario')
  const datos = cookies.get('datos')

  const datosUsuario = datos[0]
  const datosPais = pais[0]
  useEffect(() => {
    if (!cookies.get('usuario')){ 
        window.location.href = './'
    }
    axios
      .get(url)
      .then((resp) => {
        resp.data.map((reps) => {
          const paisArray = Object.keys(reps)
          for (let xs of paisArray) {
            if (xs === datosUsuario.pais) {
              const infoPais = reps[xs].map((resp) => {
                return resp
              }) //reps[xs]
              const info = infoPais[0]
              setPais(info)
            }
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(pais)

  return (
    <div className='background-billetera'>
      <div className="menu-container container text-center m-auto pt-4">
        <div className="button-logout mb-4">
          <button className="btn btn-danger" onClick={() => handleCerrar()}>
            Cerrar Sesion
          </button>
        </div>

        <div className="row">
          <div className="billetera-container m-auto col-6">
            <div>
              <h2>Tu usuario:</h2>
              <h1>{usuario}</h1>
            </div>

            <div>
              <h2>Tu Dinero:</h2>

              <div className="d-flex justify-content-center">
                <div className="d-flex">
                  <h3>{datosUsuario.dinero}</h3>
                  <p>{datosUsuario.moneda}</p>
                </div>

                <div className="d-flex">
                  <h3>{datosUsuario.dineroUSD}</h3>
                  <p>{datosUsuario.monedaUSD}</p>
                </div>
              </div>
            </div>

            <div className="moneda-container mt-4">
              <h2>Tus Cryptos</h2>

              <div className="cripto-container">
                <div className="d-flex justify-content-around">
                  <img src={bitcoinicon} />
                  <h3>{datosUsuario.bitcoin}</h3>
                </div>

                <div className="d-flex justify-content-around">
                  <img src={etheureumicon} />
                  <h3>{datosUsuario.etheureum}</h3>
                </div>

                <div className="d-flex justify-content-around">
                  <img src={thethericon} />
                  <h3>{datosUsuario.thether}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div>
              <h2>Pais</h2>
              <p>Moneda:{pais.moneda}</p>
            </div>

            <div>
              <p>Capital:</p>
              <h3>{pais.capital}</h3>
            </div>

            <div>
              <p>Presidente</p>
              <h3>{pais.presidente}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
