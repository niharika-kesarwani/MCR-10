import { inventoryData } from "../data/inventory-data";
import { inventoryConstants } from "../constants/inventory-constants";

const {
  SET_INVENTORY,
  SET_DEPARTMENT_FILTER,
  SET_LOW_STOCK_FILTER,
  SET_SORT_FILTER,
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
    default:
      return state;
  }
};

export const initialInventory = {
  inventoryData: localStorage.getItem("inventory")
    ? JSON.parse(localStorage.getItem("inventory"))
    : inventoryData,
  departmentFilter: "All Departments",
  lowStockFilter: false,
  sortFilter: "Name",
};
