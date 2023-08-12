import { useInventory } from "../main";

export const ProductsTable = () => {
  const { sortFilteredInventory } = useInventory();

  const headlingClassName = "border bg-blue-100 px-8 py-4";
  const rowClassName = "border px-8 py-4";

  return (
    <table className="table-auto border-separate border bg-white shadow-lg">
      <thead>
        <tr>
          <th className={headlingClassName}>
            <p>Image</p>
          </th>
          <th className={headlingClassName}>
            <p>Name</p>
          </th>
          <th className={headlingClassName}>
            <p>Description</p>
          </th>
          <th className={headlingClassName}>
            <p>Price</p>
          </th>
          <th className={headlingClassName}>
            <p>Stock</p>
          </th>
          <th className={headlingClassName}>
            <p>Supplier</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortFilteredInventory?.map((item) => {
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
          } = item;
          return (
            <tr key={id} className="hover:bg-gray-100">
              <td className="h-32 w-20 border">
                <img src={imageUrl} />
              </td>
              <td className={rowClassName}>{name}</td>
              <td className={rowClassName}>{description}</td>
              <td className={rowClassName}>{price}</td>
              <td className={rowClassName}>{stock}</td>
              <td className={rowClassName}>{supplier}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
