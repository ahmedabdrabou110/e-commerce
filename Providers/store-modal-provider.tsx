"use client";

import { StoreModal } from "@/components/Modals/store-modal";
import { useState, useEffect } from "react";
export const StoreModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <StoreModal />
    </>
  );
};
