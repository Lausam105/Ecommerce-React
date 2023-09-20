import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getProductById} from "../../data"
import ItemDetail from "../ItemDetail/ItemDetail"





const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(()=> {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div>
            <ItemDetail {...products}/>
            
        </div>
    )
}

export default ItemDetailContainer