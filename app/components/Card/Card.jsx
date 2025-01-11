import { Button } from "..";

export const Card = ({ title, description, classNames, ...rest }) => {
  return (
    <div
      className="flex flex-col bg-white rounded-xl p-4 w-80 shadow-xl gap-4"
      {...rest}
    >
      <div
        className={`flex items-center justify-center h-48 rounded-xl ${classNames}`}
      >
        <h1 className="text-white text-3xl font-bold">{title}</h1>
      </div>
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-sm">{description}</p>
      <div className="flex w-full justify-end">
        <Button
          label="JOIN NOW"
          className="bg-orange-400 text-white rounded-xl border-none w-30 text-md"
        />
      </div>
    </div>
  );
};
