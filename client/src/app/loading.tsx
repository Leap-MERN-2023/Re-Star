import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col space-y-3 w-screen h-screen gap-8 justify-center items-center">
      <span className="loading loading-spinner text-primary w-40"></span>
      <h1>Loading...</h1>
    </div>
  );
}
