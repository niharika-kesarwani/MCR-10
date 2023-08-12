import { Card } from "../components/Card";
import { useInventory } from "../main";

export const Departments = () => {
  const { departments } = useInventory();

  return (
    <div className="flex font-bold">
      {departments?.map((item, index) => (
        <Card key={index}>{item}</Card>
      ))}
    </div>
  );
};
