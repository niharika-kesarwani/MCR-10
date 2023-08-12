import { useNavigate, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarText = ["Dashboard", "Departments", "Products"];

  return (
    <div className="flex h-screen w-1/5 flex-col items-center gap-10 bg-black p-10 text-gray-500 opacity-90">
      {sidebarText?.map((item, index) => {
        const onSameRoute = location.pathname === "/" + item.toLowerCase();
        return (
          <div
            key={index}
            className={`hover:cursor-pointer ${
              onSameRoute && "font-bold text-white"
            }`}
            onClick={() => navigate(`/${item.toLowerCase()}`)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
