"use client";

import { useState } from "react";
import TopHeader from "./TopHeader";
import Navigation from "./Navigation";
import CartDrawer from "@/components/cart";



export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header>
      <TopHeader onCartClick={openCart} />
      <Navigation />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </header>
  );
}