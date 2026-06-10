import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/foto-gratis/fondo-gran-almacen-moderno-esta-borroso_1385-1609.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        <div className="container mx-auto px-4">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/nuevo-producto" element={<ProductForm />} />
            <Route path="/editar-producto/:id" element={<ProductForm />} />
          </Routes>
          <Toaster/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;