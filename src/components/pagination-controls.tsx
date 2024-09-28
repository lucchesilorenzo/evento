import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPage: string;
  nextPage: string;
};

const btnStyles =
  "flex items-center justify-center gap-x-2 rounded-md bg-white/5 px-5 py-3 text-sm text-white opacity-75 transition hover:opacity-100";

export default function PaginationControls({
  previousPage,
  nextPage,
}: PaginationControlsProps) {
  return (
    <section className="flex w-full justify-between">
      {previousPage ? (
        <Link href={previousPage} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPage && (
        <Link href={nextPage} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
