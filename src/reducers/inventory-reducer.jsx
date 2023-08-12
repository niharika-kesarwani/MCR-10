/* eslint-disable no-case-declarations */
import { inventoryData } from "../data/inventory-data";
import { inventoryConstants } from "../constants/inventory-constants";

const {
  SET_INVENTORY,
  SET_DEPARTMENT_FILTER,
  SET_LOW_STOCK_FILTER,
  SET_SORT_FILTER,
  ADD_INVENTORY,
} = inventoryConstants;

export const inventoryReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_INVENTORY:
      return { ...state, inventoryData: payload };
    case SET_DEPARTMENT_FILTER:
      return { ...state, departmentFilter: payload };
    case SET_LOW_STOCK_FILTER:
      return { ...state, lowStockFilter: payload };
    case SET_SORT_FILTER:
      return { ...state, sortFilter: payload };
    case ADD_INVENTORY:
      const updatedInventoryData = [...state.inventoryData, payload];
      localStorage.setItem("inventory", JSON.stringify(updatedInventoryData));
      return { ...state, inventoryData: updatedInventoryData };
    default:
      return state;
  }
};

export const initialInventory = {
  inventoryData: inventoryData,
  departmentFilter: "All Departments",
  lowStockFilter: false,
  sortFilter: "Name",
};
