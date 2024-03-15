import { CategoryCard } from "@/components/sections/home/CategoryCard";
import { CollectionCard } from "@/components/sections/home/CollectionCard";
import Search from "@/components/sections/home/Search";

export default function Home() {
  return (
    <div className="bg-[#fdf4ed]">
      <Search />
      <CategoryCard />
      <CollectionCard />
    </div>
  );
}
