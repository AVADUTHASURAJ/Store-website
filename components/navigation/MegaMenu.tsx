import Link from "next/link";
import Image from "next/image";

type MenuLink = {
  label: string;
  href: string;
};

type FeaturedItem = {
  title: string;
  image: string;
  href: string;
};

type MegaMenuProps = {
  data: {
    mens: MenuLink[];
    womens: MenuLink[];
    featured: FeaturedItem[];
  };
};
export default function MegaMenu({
    data,
}: MegaMenuProps) {
  return (
    <div
      className="
        absolute
        left-1/2
        top-full
        z-50
        mt-3
        w-screen
        max-w-[1400px]
        -translate-x-1/2
        border-t
        border-neutral-200
        bg-white
        px-25
        py-8
        shadow-sm
      "
    >
      <div className="grid grid-cols-[220px_260px_340px_340px] gap-10">
        {/* Men's Wear */}
        <div>
          <h3 className="mb-6 text-[14px] font-semibold uppercase tracking-[0.22em]">
            Mens Wear
          </h3>

          <ul className="space-y-4 text-[16px] text-neutral-500">
            {data.mens.map((item) => (
            <li key={item.href}>
                <Link
                href={item.href}
                className="
                    transition-colors
                    duration-200
                    hover:text-black
                "
                >
                {item.label}
                </Link>
            </li>
            ))}
          </ul>
        </div>

        {/* Women's Wear */}
        <div>
          <h3 className="mb-6 text-[14px] font-semibold uppercase tracking-[0.22em]">
            Womens Wear
          </h3>

          <ul className="space-y-4 text-[16px] text-neutral-500">
            {data.womens.map((item) => (
            <li key={item.href}>
                <Link
                href={item.href}
                className="
                    transition-colors
                    duration-200
                    hover:text-black
                "
                >
                {item.label}
                </Link>
            </li>
            ))}
          </ul>
        </div>

        {/* Women's Image */} {/* Men's Image */}
        <div className="col-span-2 grid grid-cols-2 gap-8">
        {data.featured.map((item) => (
            <div key={item.href}>
            <Link href={item.href}>
                <Image
                src={item.image}
                alt={item.title}
                width={340}
                height={260}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
            </Link>

            <Link
                href={item.href}
                className="
                mt-5
                block
                text-center
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                "
            >
                {item.title}
            </Link>
            </div>
        ))}
        </div>

      </div>
    </div>
  );
}