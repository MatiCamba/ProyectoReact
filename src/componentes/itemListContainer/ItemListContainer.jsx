import { useEffect } from 'react'
import { useState } from 'react'
import MainCarousel from "../Carrousel/MainCarousel"
import { collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { Loding } from '../Loding/Loding'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {

        setTimeout(() => {
            setLoading(true)
            
            const productosRef = collection( db, "productos" )
            const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId)/* limit(X) */)// para limitar los elementos que renderizo
                    : productosRef
            
            getDocs(q)
                .then((res) => {
                    const docs = res.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
    
                    setProductos(docs)
                })
                .finally(() => {
                    setLoading(false)
                })
            
        }, 1600);

    }, [categoryId])

    return (
        <div className="contenedor">

            <MainCarousel/> 
            {
                loading
                    ? <Loding/>
                    : <ItemList items={productos}/>
            }
            
        </div>
    )
}

export default ItemListContainer