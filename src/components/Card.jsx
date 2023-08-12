/* eslint-disable react/prop-types */
export const Card = ({ children }) => {
  return (
    <div className="m-10 h-min w-52 flex-wrap rounded-lg bg-gray-200 px-10 py-5 text-center">
      {children}
    </div>
  );
};
