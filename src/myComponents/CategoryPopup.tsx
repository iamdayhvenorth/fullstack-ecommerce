import { categories } from "@/data";
import Link from "next/link";

export default function CategoryPopup() {
  return (
    <div className="bg-white absolute text-dark  rounded-sm top-12 left-0 z-10 shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)] popup invisible transition-all duration-300 ease-in ">
      <div>
        <ul className="flex flex-col">
          {categories.map((cat) => (
            <li
              key={cat.id}
              className={`overflow-hidden ${cat.sub_cat ? "relative" : ""}`}
            >
              <Link
                href={`#`}
                className="block w-full text-sm text-nowrap hover:bg-[#f2f4f5] cursor-pointer p-2"
              >
                {cat.name}
              </Link>
              {/* sub category */}
              {cat.sub_cat ? (
                <ul className="border absolute border-red-700 bg-red-600 z-50 left-0">
                  {cat.sub_cat.map((subCat) => (
                    <li key={subCat.id} className="">
                      <Link
                        href={`#`}
                        className="block w-full text-sm text-nowrap hover:bg-[#f2f4f5] cursor-pointer p-2"
                      >
                        {subCat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
