"use client";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
//   if (!isOpen) return null;

 return (
  <div
    className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen
        ? "pointer-events-auto opacity-100"
        : "pointer-events-none opacity-0"
    }`}
    >
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={onClose}
    />

    {/* Drawer */}
    <div className={`absolute right-0 top-0 h-full w-[450px] bg-white shadow-xl
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-8 py-6">
        <h2 className="text-3xl tracking-[0.18em]">
          CART
        </h2>

        <button
          onClick={onClose}
          className="text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 items-center justify-center">
        <p className="text-lg tracking-[0.2em] uppercase">
          Your Cart Is Empty
        </p>
      </div>

    </div>
  </div>
);
}