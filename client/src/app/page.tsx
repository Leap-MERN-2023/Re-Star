import { CategoryCard } from "@/components/sections/home/CategoryCard";
import { CollectionCard } from "@/components/sections/home/CollectionCard";
import Search from "@/components/sections/home/Search";
import RestaurantCard from "@/components/sections/restaurantCard";

export default function Home() {
  return (
    <div className="bg-[#fdf4ed] w-screen overflow-y-hidden">
      <Search />
      <CategoryCard />
      <CollectionCard />
    </div>
  );
}
