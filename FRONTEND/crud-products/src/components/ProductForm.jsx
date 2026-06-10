import { useEffect, useState } from "react"
import { createProduct, getProduct, updateProduct } from "../api/products"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"


export default function ProductForm() {

    const [product, setProduct] = useState({
        nombre: "",
        precio: "0",
        descripcion: ""
    })

    const navigate = useNavigate()
    const params = useParams()

    useEffect (() => {
        const loadProduct  = async () => {
            if(params.id){
                const response = await getProduct(params.id)
                setProduct(response.data)
            }
        }
            loadProduct()
        }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(params.id) {
            await updateProduct(params.id, product)
            toast.success('Producto editado correctamente')

        }else{
            await createProduct(product)
            toast.success('Producto creado exitosamente')
        }
        navigate('/')
      
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        value={product.nombre}
                        onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
                        placeholder="Nombre del producto"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="price">
                        Precio
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        value={product.precio}
                        onChange={(e) => setProduct({ ...product, precio: e.target.value })}
                        placeholder="Precio del producto"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="description">
                        Descripción
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        value={product.descripcion}
                        onChange={(e) => setProduct({ ...product, descripcion: e.target.value })}
                        placeholder="Descripción del producto"
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Guardar Producto
                </button>
            </form>
        </div>
    )
}