import Categoryitem from "./Categoryitem";

export interface Category {
  name: string;
  value: string;
}
export default function CategoryComponent({ item }: { item: Category[] }) {
  return (
    <div className="flex gap-3 justify-center items-center">
      {item.map((item) => (
        <Categoryitem
          name={item.name}
          value={item.value}
          key={item.value}
        ></Categoryitem>
      ))}
    </div>
  );
}
