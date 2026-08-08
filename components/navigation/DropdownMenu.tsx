"use client";

import Link from "next/link";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownMenuProps = {
  items: DropdownItem[];
};

export default function DropdownMenu({
  items,
}: DropdownMenuProps) {
  return (
    <div
      className="
        absolute
        top-[calc(100%+12px)]
        left-0
        z-50
        w-[180px]
        border
        border-neutral-200
        bg-white
        shadow-sm
        "
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            block
            px-5
            py-3
            text-[15px]
            font-normal
            text-neutral-600
            transition-all
            duration-200
            hover:[text-shadow:0_0_8px_rgba(0,0,0,0.25)]
            hover:text-neutral-900
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}