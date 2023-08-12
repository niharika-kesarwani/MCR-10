import { useInventory } from "../main";

export const Filters = () => {
  const { departments } = useInventory();

  const displayDepartments = ["All Departments", ...departments];

  const sortTags = ["Name", "Price", "Stock"];
  return (
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold">Products</div>
      <select className="border-2 border-black px-5 py-2">
        {displayDepartments?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <label>
        <input type="checkbox" /> Low Stock Items
      </label>
      <select className="border-2 border-black px-5 py-2">
        {sortTags?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <button className="rounded-md bg-blue-500 px-5 py-2 text-white hover:cursor-pointer hover:bg-blue-400">
        New
      </button>
    </div>
  );
};
