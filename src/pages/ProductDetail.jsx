import { useParams } from "react-router-dom";
import { useInventory } from "../main";

export const ProductDetail = () => {
  const { ID } = useParams();
  const {
    inventory: { inventoryData },
  } = useInventory();

  const selectedProduct = inventoryData?.find(({ id }) => id == ID);

  const {
    id,
    department,
    name,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
    imageUrl,
  } = selectedProduct;

  return (
    <div className="flex h-screen w-full flex-col gap-5 overflow-y-auto p-10">
      <div className="text-xl font-bold">{name}</div>
      <img src={imageUrl} className="h-72 w-60" />
      <div>Price: ${price}</div>
      <div>Stock: {stock}</div>
      <div>Supplier: {supplier}</div>
      <div>Department: {department}</div>
      <div>SKU: {sku}</div>
      <div>Delivered: {delivered}</div>
      <div>Description: {description}</div>
    </div>
  );
};
