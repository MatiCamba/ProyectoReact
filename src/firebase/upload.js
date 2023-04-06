
import { db } from './config.js'
import { addDoc, collection } from 'firebase/firestore'


const productosRef = collection(db, 'productos')

data.forEach((item) => {
    addDoc(productosRef, item)
})