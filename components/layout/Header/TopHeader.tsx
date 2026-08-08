"use client";

import { User, Search, ShoppingBag, ChevronDown } from "lucide-react";
import Image from "next/image"



type TopHeaderProps = {
  onCartClick: () => void;
};

export default function TopHeader({
                          onCartClick,
                        }: TopHeaderProps) {
  return (
    <div>
      <div className="mx-auto max-w-7xl grid grid-cols-3 items-center h-20 px-6">
        {/* Left Placeholder */}
        <div className="flex items-center">
          <h1
            className="
              font-[family:var(--font-cormorant)]
              text-[25px]
              font-medium
              tracking-[0.22em]
              uppercase
              leading-none
              text-neutral-900
            "
          >
            SWATHI VELDANDI
          </h1>
        </div>

        {/* Brand Logo */}
        <div className="flex justify-center">
          <Image
            src="/logos/finalLogo-cropped.svg"
            alt="Swathi Veldandi Designer Studio"
            width={40}
            height={10}
            priority
          />
        </div>

        
        {/* Header Actions */}
        <div className="flex items-center justify-end gap-6">

            Country

            <div className="flex items-center gap-1 text-sm">
                🇮🇳
                <span>INR ₹</span>
                <ChevronDown size={16} />
            </div>

            <User size={22} />

            <Search size={22} />

            <button
              type="button"
              onClick={onCartClick}
              className="cursor-pointer transition-opacity duration-200 hover:opacity-70"
            >
              <ShoppingBag size={22} />
            </button>

        </div>
      </div>
    </div>
  );
}