import { Card } from "../components/Card";
import { useInventory } from "../main";

export const Dashboard = () => {
  const {
    inventory: { inventoryData },
  } = useInventory();

  const totalStock = inventoryData?.reduce((sum, { stock }) => sum + stock, 0);

  const totalDelivered = inventoryData?.reduce(
    (sum, { delivered }) => sum + delivered,
    0
  );

  const lowStockItems = inventoryData?.filter(
    ({ stock }) => stock <= 10
  ).length;

  return (
    <div className="flex">
      <Card>
        <div className="flex flex-col items-center gap-3">
          <div className="text-lg font-bold text-green-700">{totalStock}</div>
          <div>Total Stock</div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col items-center gap-3">
          <div className="text-lg font-bold text-orange-500">
            {totalDelivered}
          </div>
          <div>Total Delivered</div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col items-center gap-3">
          <div className="text-lg font-bold text-red-600">{lowStockItems}</div>
          <div>Low Stock Items</div>
        </div>
      </Card>
    </div>
  );
};
