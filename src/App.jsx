import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { Departments } from "./pages/Departments";
import { Products } from "./pages/Products";
import { AddNewProduct } from "./pages/AddNewProduct";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/departments" element={<Departments />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:ID" element={<ProductDetail />}></Route>
        <Route path="/addNewProduct" element={<AddNewProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
