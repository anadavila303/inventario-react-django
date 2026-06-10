import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="py-4 mb-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-950">
                    Productos App
                </Link>

                <Link
                    to="/nuevo-producto"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Nuevo Producto
                </Link>
            </div>
        </nav>
    );
}