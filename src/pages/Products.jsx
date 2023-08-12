import { Filters } from "../components/Filters";
import { ProductsTable } from "../components/ProductsTable";

export const Products = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-5 overflow-y-auto p-10">
      <Filters />
      <ProductsTable />
    </div>
  );
};
