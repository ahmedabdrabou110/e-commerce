"use client";
import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "../ui/Modal";

export const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();
  return (
    <Modal
      title="Create a new store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onClose}
    >
      Furtue Create Store Form
    </Modal>
  );
};
