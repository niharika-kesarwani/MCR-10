import { useState } from "react";
import { useInventory } from "../contexts/inventory-context";
import { v4 as uuid } from "uuid";
import { inventoryConstants } from "../constants/inventory-constants";

export const AddNewProduct = () => {
  const initialFormDetails = {
    id: "",
    department: "Kitchen",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  };
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const { setInventory, departments } = useInventory();
  const { ADD_INVENTORY } = inventoryConstants;
  const inputClassName = "border-2 border-black p-2 w-96";

  const formSubmitHandler = () => {
    setInventory({
      type: ADD_INVENTORY,
      payload: {
        ...formDetails,
        id: uuid(),
        price: Number(formDetails.price),
        stock: Number(formDetails.stock),
      },
    });
    setFormDetails(initialFormDetails);
  };

  const changeFormData = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen w-full flex-col gap-3 overflow-y-auto p-10">
      <div className="text-xl font-bold">Add New Product</div>
      <form className="w- flex flex-col gap-3" onSubmit={formSubmitHandler}>
        <label>Department</label>
        <select
          className={inputClassName}
          name="department"
          onChange={(e) => changeFormData(e)}
          defaultValue={formDetails?.department}
        >
          {departments?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label>Name:</label>
        <input
          className={inputClassName}
          name="name"
          type="text"
          onChange={(e) => changeFormData(e)}
          defaultValue={formDetails?.name}
          required
        />
        <label>Description:</label>
        <input
          className={inputClassName}
          name="description"
          type="text"
          onChange={(e) => changeFormData(e)}
          defaultValue={formDetails?.description}
          required
        />
        <label>Price:</label>
        <input
          className={inputClassName}
          name="price"
          type="number"
          onChange={(e) => changeFormData(e)}
          defaultValue={formDetails?.price}
          required
        />
        <label>Stock:</label>
        <input
          className={inputClassName}
          name="stock"
          type="number"
          onChange={(e) => changeFormData(e)}
          defaultValue={formDetails?.stock}
          required
        />
        <label>SKU:</label>
        <input
          className={inputClassName}
          name="sku"
          type="text"
          onChange={(e) => changeFormData(e)}
          defaultValue={formDetails?.sku}
          required
        />
        <label>Supplier:</label>
        <input
          className={inputClassName}
          name="supplier"
          type="text"
          onChange={(e) => changeFormData(e)}
          defaultValue={formDetails?.supplier}
          required
        />
        <label>Delivered:</label>
        <input className={inputClassName} type="text" disabled value={0} />
        <label>Image URL:</label>
        <input
          className={inputClassName}
          name="imageUrl"
          type="url"
          onChange={(e) => changeFormData(e)}
          defaultValue={formDetails?.imageUrl}
          required
        />
        <button
          type="submit"
          className="mt-5 w-96 rounded-md bg-blue-500 px-5 py-2 text-white hover:cursor-pointer hover:bg-blue-400"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
