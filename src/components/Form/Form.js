import React, {useState} from 'react'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../../firebaseConfig'
import './Form.css'

const Form = ({cart, total, clearCart, handleId}) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [emailRepetido, setEmailRepetido] = useState('');
    const [telefono, setTelefono] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(email === emailRepetido){
            const order = {
                buyer : {nombre, apellido, email, telefono},
                items : {cart},
                total : total,
                date : serverTimestamp()
            };
    
            const ordersCollection = collection(db, 'orders');
    
            addDoc(ordersCollection, order)
            .then(res=>{
                handleId(res.id)
                clearCart()
            })
        }else{
            alert('Los emails deben coincidir')
        }

    }

    const handleChangeNombre = e => {
        setNombre(e.target.value)
    }
    const handleChangeApellido = e => {
        setApellido(e.target.value)
    }
    const handleChangeEmail = e =>{
        setEmail(e.target.value)
    }
    const handleChangeEmailRepetido = e =>{
        setEmailRepetido(e.target.value)
    }
    const handleChangeTelefono = e =>{
        setTelefono(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit}>
       <p>Terminar Compra</p>
       <div className='mainInfoForm'>
            <input type="text" placeholder='Nombre' value={nombre} onChange={handleChangeNombre} required="true"/>
            <input type="text" placeholder='Apellido' value={apellido} onChange={handleChangeApellido} required="true"/>
       </div>
       <div className='mainInfoForm'>
            <input type="email" placeholder='Email' value={email} onChange={handleChangeEmail} required="true"/>
            <input type="email" placeholder='Repita email' value={emailRepetido} onChange={handleChangeEmailRepetido} required="true"/>
            <input type="number" placeholder='Telefono' value={telefono} onChange={handleChangeTelefono} required="true"/>
       </div>
       <button type='submit' className='submitBTN'>Enviar</button>
    </form>
  )
}

export default Form