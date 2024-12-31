import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PaymentCard from "@/myComponents/PaymentCard";
import { ArrowRight, X } from "lucide-react";

export default function PaymentOptions() {
  return (
    <section className="w-full flex flex-col gap-4">
      <section className="border divide-y">
        <div className="flex p-2 justify-between">
          <h3 className="font-medium text-dark text-sm uppercase">
            Payment Options
          </h3>

          {/* add payment card section */}
          <button className="flex items-center text-sm text-[#fa8232] gap-2 font-medium">
            <span>Add Card</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* cards */}
        <div className="p-2 flex gap-4">
          <PaymentCard
            balance={"95, 400.00"}
            cardBrand={"/images/visa.png"}
            cardHolderName="Kevin Gilbert"
            cardColor="bg-gradient-to-b from-[#1b6392] to-[#124261]"
            cardNumber="**** **** **** 4567"
          />

          <PaymentCard
            balance={"87, 583.00"}
            cardBrand={"/images/master_card.png"}
            cardHolderName="Kevin Gilbert"
            cardColor="bg-gradient-to-b from-[#248e1d] to-[#2db224]"
            cardNumber="**** **** **** 1761"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        {/* billing address */}
        <div className="border divide-y">
          <h4 className="font-medium text-dark text-sm p-2 uppercase">
            Billing Address
          </h4>

          <div className="p-2">
            <h5 className="text-dark font-medium text-xs mb-2">
              Kevin Gilbert
            </h5>
            <p className="text-dark font-normal text-xs">
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
              Flat No. 5D, Dhaka - 1200, Bangladesh
            </p>

            <p className="text-dark font-medium text-xs my-2">
              Phone Number:{" "}
              <span className="font-normal"> +1-202-555-0118</span>
            </p>
            <p className="text-dark font-medium text-xs">
              Email:{" "}
              <span className="font-normal"> kevin.gilbert@gmail.com</span>
            </p>

            <div className="mt-3">
              <button className="text-xs py-2 px-4 border border-[#2da5f3] uppercase font-semibold text-[#2da5f3] hover:bg-[#2da5f3] hover:text-white transition-colors duration-200 ease-linear cursor-pointer w-fit rounded-[2px]">
                Edit Address
              </button>
            </div>
          </div>
        </div>

        {/* shipping address */}
        <div className="border divide-y">
          <h4 className="font-medium text-dark text-sm p-2  uppercase">
            Shipping Address
          </h4>

          <div className="text-sm p-2">
            <h5 className="text-dark font-medium text-xs mb-2">
              Kevin Gilbert
            </h5>
            <p className="text-dark font-normal text-xs">
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
              Flat No. 5D, Dhaka - 1200, Bangladesh
            </p>

            <p className="text-dark font-medium text-xs my-2">
              Phone Number:{" "}
              <span className="font-normal"> +1-202-555-0118</span>
            </p>
            <p className="text-dark font-medium text-xs">
              Email:{" "}
              <span className="font-normal"> kevin.gilbert@gmail.com</span>
            </p>

            <div className="mt-3">
              <button className="text-xs py-2 px-4 border border-[#2da5f3] uppercase font-semibold text-[#2da5f3] hover:bg-[#2da5f3] hover:text-white transition-colors duration-200 ease-linear cursor-pointer w-fit rounded-[2px]">
                Edit Address
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
