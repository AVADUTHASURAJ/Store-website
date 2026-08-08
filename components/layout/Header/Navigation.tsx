"use client";

import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import {DropdownMenu, MegaMenu} from "@/components/navigation";
import { useEffect, useRef, useState  } from "react";

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(null);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (

    <nav className="border-b border-gray-200 bg-white">
      <ul ref = {navRef} 
      className="mx-auto flex h-14 max-w-7xl items-center justify-center gap-10">
        {navigationItems.map((item) => (
          <li
            key={item.id}
            className="group relative cursor-pointer"
          >
            {item.children || item.megaMenu? (
              <button
                type="button"
                onClick={() =>
                setOpenDropdown(openDropdown === item.id ? null : item.id)
                }
                className="
                  relative
                  inline-block
                  cursor-pointer
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-neutral-800
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-full
                    origin-center
                    scale-x-0
                    bg-neutral-900
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </button>
            ) : (
              <Link
                href={item.href}
                className="
                  relative
                  inline-block
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-neutral-800
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-full
                    origin-center
                    scale-x-0
                    bg-neutral-900
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </Link>
            )}

            {item.children && openDropdown === item.id && (
              <DropdownMenu items={item.children} />
            )}

            {item.megaMenu && openDropdown === item.id && (
                <MegaMenu data={item.megaMenu}/>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}