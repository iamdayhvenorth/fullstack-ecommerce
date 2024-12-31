import { X } from "lucide-react";
import React from "react";
import ProductDetailsCard from "./ProductDetailsCard";
import { ProductType } from "../../types";

interface HandleModalProps {
  handleOpenModal: () => void;
}

export default function ProductPreview({
  prod,
  handleOpenModal,
}: {
  prod: ProductType;
  handleOpenModal: React.MouseEventHandler;
}) {
  console.log(prod);

  return (
    <section className="fixed bg-black/80 top-0 left-0 w-full bottom-0 h-screen-auto z-50 flex items-center justify-center ">
      {/* Product detail card */}
      <ProductDetailsCard
        cName="bg-white p-5 rounded-sm flex gap-5 max-w-[900px]"
        prod={prod}
      />

      {/* close icon */}
      <span className="absolute right-5 top-5 border-2 text-white hover:text-[#fa8232] hover:border-[#fa8232] cursor-pointer transition-colors duration-150 ease-linear rounded-full">
        <X size={24} onClick={handleOpenModal} />
      </span>
    </section>
  );
}
