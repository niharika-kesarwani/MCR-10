import { inventoryData } from "../data/inventory-data";
import { inventoryConstants } from "../constants/inventory-constants";

const { SET_INVENTORY } = inventoryConstants;

export const inventoryReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_INVENTORY:
      return { ...state, inventoryData: payload };
    default:
      return state;
  }
};

export const initialInventory = {
  inventoryData: localStorage.getItem("inventory")
    ? JSON.parse(localStorage.getItem("inventory"))
    : inventoryData,
};
