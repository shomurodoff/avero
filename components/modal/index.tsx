import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReactModal from "react-modal";

interface Props {
  open: boolean;
  setOpen: any | null;
  children: ReactNode;
}

const Index = ({ open, setOpen, children }: Props) => {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      shouldCloseOnOverlayClick={true}
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-[100]"
      overlayElement={(props, contentElement) => (
        <div className="fixed bg-slate-700 inset-0 z-[100]" {...props}>
          {contentElement}
        </div>
      )}
      className="fixed container  bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 translate-x-1/2 right-1/2"
      contentElement={(props) => <div {...props}>{children}</div>}
    />
  );
};

export default Index;
