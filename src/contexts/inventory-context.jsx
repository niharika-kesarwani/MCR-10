/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useReducer } from "react";
import {
  inventoryReducer,
  initialInventory,
} from "../reducers/inventory-reducer";
import { inventoryConstants } from "../constants/inventory-constants";
import { inventoryData as originalData } from "../data/inventory-data";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useReducer(
    inventoryReducer,
    initialInventory
  );
  const { inventoryData, departmentFilter, lowStockFilter, sortFilter } =
    inventory;

  const { SET_INVENTORY } = inventoryConstants;

  const departments = inventory.inventoryData?.reduce(
    (final, { department }) =>
      final.includes(department) ? final : [...final, department],
    []
  );

  const departmentFilteredInventory =
    departmentFilter === "All Departments"
      ? inventoryData
      : inventoryData?.filter(
          ({ department }) => department === departmentFilter
        );

  const lowStockFilteredInventory = lowStockFilter
    ? departmentFilteredInventory?.filter(({ stock }) => stock <= 10)
    : departmentFilteredInventory;

  const sortFilteredInventory = [...lowStockFilteredInventory]?.sort((a, b) => {
    return sortFilter === "Name"
      ? a.name < b.name
        ? -1
        : b.name < a.name
        ? 1
        : 0
      : sortFilter === "Price"
      ? a.price - b.price
      : a.stock - b.stock;
  });

  useEffect(() => {
    const localStorageInventory = localStorage.getItem("inventory");
    if (localStorageInventory) {
      setInventory({
        type: SET_INVENTORY,
        payload: JSON.parse(localStorageInventory),
      });
    } else {
      localStorage.setItem("inventory", JSON.stringify(originalData));
      setInventory({ type: SET_INVENTORY, payload: originalData });
    }
  }, []);

  return (
    <InventoryContext.Provider
      value={{ inventory, setInventory, departments, sortFilteredInventory }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
