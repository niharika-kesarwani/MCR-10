import { useNavigate } from "react-router-dom";
import { useInventory } from "../main";
import { inventoryConstants } from "../constants/inventory-constants";

export const Filters = () => {
  const {
    inventory: { departmentFilter, lowStockFilter, sortFilter },
    setInventory,
    departments,
  } = useInventory();
  const navigate = useNavigate();
  const { SET_DEPARTMENT_FILTER, SET_LOW_STOCK_FILTER, SET_SORT_FILTER } =
    inventoryConstants;

  const displayDepartments = ["All Departments", ...departments];
  const sortTags = ["Name", "Price", "Stock"];

  return (
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold">Products</div>
      <select
        className="border-2 border-black px-5 py-2"
        defaultValue={departmentFilter}
        onChange={(e) =>
          setInventory({ type: SET_DEPARTMENT_FILTER, payload: e.target.value })
        }
      >
        {displayDepartments?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label>
        <input
          className="hover:cursor-pointer"
          type="checkbox"
          defaultChecked={lowStockFilter}
          onChange={(e) =>
            setInventory({
              type: SET_LOW_STOCK_FILTER,
              payload: e.target.checked,
            })
          }
        />{" "}
        Low Stock Items
      </label>
      <select
        className="border-2 border-black px-5 py-2"
        defaultValue={sortFilter}
        onChange={(e) =>
          setInventory({ type: SET_SORT_FILTER, payload: e.target.value })
        }
      >
        {sortTags?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button
        className="rounded-md bg-blue-500 px-5 py-2 text-white hover:cursor-pointer hover:bg-blue-400"
        onClick={() => navigate("/addNewProduct")}
      >
        New
      </button>
    </div>
  );
};
