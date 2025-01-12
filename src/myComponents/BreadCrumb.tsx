"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  console.log(pathname);
  console.log(segments);

  const str = segments.map((seg, ide) => {
    const path = "/" + segments.slice(0, ide + 1).join("/");
    return path;
  });

  console.log(str);

  return (
    <div>
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <ul className="flex gap-4">
          {segments.map((oat) => (
            <Breadcrumb key={oat}>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`${oat}`}>{oat}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbList>
            </Breadcrumb>
          ))}
        </ul>
      </div>
    </div>
  );
}
