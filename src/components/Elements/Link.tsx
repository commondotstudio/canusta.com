import useIsLoadingStore from "@/utils/is-loading-store";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

export function LinkWithStore({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const router = useRouter();
  const { setPageLoading, pageLoading } = useIsLoadingStore();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    setPageLoading(true);
    router.push(href);
    setPageLoading(false);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default LinkWithStore;
