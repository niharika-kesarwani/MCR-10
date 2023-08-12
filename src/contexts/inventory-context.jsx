/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useReducer } from "react";
import {
  inventoryReducer,
  initialInventory,
} from "../reducers/inventory-reducer";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useReducer(
    inventoryReducer,
    initialInventory
  );

  const departments = inventory.inventoryData?.reduce(
    (final, { department }) =>
      final.includes(department) ? final : [...final, department],
    []
  );

  return (
    <InventoryContext.Provider value={{ inventory, setInventory, departments }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
