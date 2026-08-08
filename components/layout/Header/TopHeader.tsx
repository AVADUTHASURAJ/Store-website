import { User, Search, ShoppingBag, ChevronDown } from "lucide-react";





export default function TopHeader() {
  return (
    <div className="grid grid-cols-3 items-center">
      {/* Left Placeholder */}
      <div />

      {/* Brand Logo */}
      <div className="text-center">
        <h1 className="text-2xl font-serif">
          SWATHI VELDANDI
        </h1>
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

          <ShoppingBag size={22} />

      </div>
    </div>
  );
}