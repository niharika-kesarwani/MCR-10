import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { useInventory } from "../main";
import { inventoryConstants } from "../constants/inventory-constants";

export const Departments = () => {
  const { setInventory, departments } = useInventory();
  const navigate = useNavigate();
  const { SET_DEPARTMENT_FILTER } = inventoryConstants;

  return (
    <div className="flex font-bold">
      {departments?.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setInventory({ type: SET_DEPARTMENT_FILTER, payload: item });
            navigate("/products");
          }}
          className="hover:cursor-pointer"
        >
          <Card>{item}</Card>
        </div>
      ))}
    </div>
  );
};
