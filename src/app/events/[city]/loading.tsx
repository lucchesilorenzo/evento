import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="flex max-w-[1100px] flex-wrap items-center justify-center gap-20 px-[20px] py-24">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
