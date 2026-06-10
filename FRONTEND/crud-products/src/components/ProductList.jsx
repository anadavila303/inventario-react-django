import {useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../api/products"
import {useNavigate} from "react-router-dom"

export default function ProductList() {

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    const loadProducts = async () => {
        const response = await getProducts()
        setProducts(response.data)
    }

    const handDelete = async (id) => {
        await deleteProduct(id)
        setProducts(products.filter(product => product.id !== id))
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold text-sky-900">Productos disponibles</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"  >
                {products.map(product => (
                    <div key={product.id} className="bg-white/30 p-4 rounded-lg shadow-lg">
                        <p className="text-xl font-bold text-white">{product.nombre}</p>
                        <p><span className="font-bold">Precio: </span>  C$ {product.precio}</p>
                        <p><span className="font-bold">Descripción: </span>{product.descripcion}</p>
                        <div className="mt-4">
                            <button 
                                className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600"
                                onClick={() => navigate('/editar-producto/' + product.id)}
                                >
                                Editar
                                </button>
                            <button 
                            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-600 ml-2"
                            onClick={() => handDelete(product.id)}
                            >Eliminar
                            </button>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}