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
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-[100]"
      contentElement={() => (
        <div className="absolute inset-x-0 top-20  md:inset-y-56 bottom-0 md:bottom-20 ">
          <div className="container mx-auto">
            <div className="bg-white md:mx-[15px] rounded-t-[20px] md:rounded-[20px] p-10">
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 order-1 md:order-1 mb-8">
                  <h2>Sendvich va salatlar</h2>
                  <p>
                    Engage active clients at the right time and save time
                    chasing unqualified leads
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 order-3 md:order-2 shadow"  >
                  <div className="flex md:justify-end gap-4">  
                  <button className="bg-primary-blue  py-4  px-8 rounded-[10px]">Saqlash</button>
                  <button className="bg-primary-red  py-4  px-8 rounded-[10px]">Hoziroq to’lash</button>
                  <button className="bg-[#ECEEF2] px-4  rounded-[10px] hidden md:block">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_577_4881)">
                        <path
                          d="M14.9999 13.2324L21.1874 7.04492L22.9549 8.81242L16.7674 14.9999L22.9549 21.1874L21.1874 22.9549L14.9999 16.7674L8.81242 22.9549L7.04492 21.1874L13.2324 14.9999L7.04492 8.81242L8.81242 7.04492L14.9999 13.2324Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_577_4881">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button></div>
                </div>
                <div className="col-span-12 order-2 md:order-3 overflow-auto h-[80vh]">{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Index;
