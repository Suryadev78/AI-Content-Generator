export interface Category {
  name: string;
  value: string;
}
export default function CategoryComponent({ item }: { item: Category[] }) {
  return (
    <div className="flex justify-center items-center">
      {item.map((item) => (
        <div key={item.value} className="mr-4">
          {item.name}
        </div>
      ))}
    </div>
  );
}
