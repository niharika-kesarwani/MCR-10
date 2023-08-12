import { Card } from "../components/Card";
import { useInventory } from "../main";

export const Departments = () => {
  const {
    inventory: { inventoryData },
  } = useInventory();

  const departments = inventoryData?.reduce(
    (final, { department }) =>
      final.includes(department) ? final : [...final, department],
    []
  );

  return (
    <div className="flex font-bold">
      {departments?.map((item, index) => (
        <Card key={index}>{item}</Card>
      ))}
    </div>
  );
};
