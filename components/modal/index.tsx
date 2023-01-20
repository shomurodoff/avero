import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  open: boolean | null;
  setOpen: any | null;
  children: ReactNode;
}

const Index = ({ open, setOpen, children }: Props) => {
  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      {open && (
        <motion.div
          className="backdrop w-full h-full absolute top-[18vh] left-0 z-[100] px-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-full min-h-[72vh] bg-white shadow-2xl rounded-3xl p-10"
            variants={{
              hidden: {
                y: "-100vh",
                opacity: 0,
              },
              visible: {
                y: "0",
                opacity: 1,
                transition: {
                  duration: 0.1,
                  type: "spring",
                  damping: 25,
                  stiffness: 500,
                },
              },
              exit: {
                y: "100vh",
                opacity: 0,
              },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex  justify-between">
              <div>
                <h2 className="text- text-[32px] font-montserrat font-semibold">
                  Sendvich va salatlar
                </h2>
                <p className="max-w-sm text-[#7C7C7C] font-inter text-base font-normal">
                  Engage active clients at the right time and save time chasing
                  unqualified leads
                </p>
              </div>
              <div className="text-[#FDFDFE] font-inter font-bold text-sm leading-[16px]">
                <div className="flex gap-[10px]">
                  <button className=" bg-primary-blue px-7 py-4 rounded-[10px]">
                    Saqlash
                  </button>
                  <button className=" bg-primary-red px-7 py-4 rounded-[10px]">
                    Hoziroq to’lash
                  </button>
                  <button
                    className="bg-[#ECEEF2] px-3 rounded-[10px]"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_429_1477)">
                        <path
                          d="M14.9999 13.2324L21.1874 7.04492L22.9549 8.81242L16.7674 14.9999L22.9549 21.1874L21.1874 22.9549L14.9999 16.7674L8.81242 22.9549L7.04492 21.1874L13.2324 14.9999L7.04492 8.81242L8.81242 7.04492L14.9999 13.2324Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_429_1477">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
