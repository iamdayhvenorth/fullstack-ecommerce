"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Files } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { RiVisaLine } from "react-icons/ri";

interface PaymentProps {
  cardNumber: string;
  expiryDate?: string;
  cvv?: string;
  cardHolderName: string;
  cardColor: string;
  cardBrand: any;
  balance: string;
}

export default function PaymentCard(props: PaymentProps) {
  const { cardNumber, cardHolderName, cardColor, cardBrand, balance } = props;
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleCopyToClipBoard = async () => {
    try {
      if (spanRef.current?.textContent) {
        const textToCopy = spanRef.current?.textContent;
        await navigator.clipboard.writeText(textToCopy);
      }
    } catch (error) {
      console.error("Failed to copy payment card number: ", error);
    }
  };
  return (
    <div
      className={`p-4 border rounded-sm flex flex-col gap-4 text-white w-[296px] relative ${cardColor}`}
    >
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold">
          {`$${balance}`}
          <span className="font-normal"> USD</span>
        </span>

        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="cursor-pointer text-lg tracking-wider">
                  ...
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-white rounded-[2px] p-0 absolute right-0 top-1/2 w-[100px]">
                <ul className="w-full">
                  <li className="p-2 text-sm font-normal text-dark hover:bg-gray-300 cursor-pointer">
                    Edit Card
                  </li>
                  <li className="p-2 text-sm font-normal text-dark hover:bg-gray-300 cursor-pointer">
                    Delete Card
                  </li>
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div>
        <span className="text-xs uppercase font-medium">Card Number</span>
        <span className="flex items-center gap-2">
          <span ref={spanRef}>{cardNumber}</span>
          <Files
            size={16}
            className="cursor-pointer"
            onClick={() => handleCopyToClipBoard()}
          />
        </span>
      </div>

      <div className="flex items-center justify-between">
        {/* <h4>Visa</h4> */}
        {/* <RiVisaLine className="text-3xl" /> */}
        <div className="w-10 h-10">
          <Image
            src={cardBrand}
            alt="Master Card"
            width={60}
            height={40}
            className="w-full object-cover"
          />
        </div>
        <span className="text-sm font-medium">{cardHolderName}</span>
      </div>
    </div>
  );
}
