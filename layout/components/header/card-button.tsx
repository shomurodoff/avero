import clsx from "clsx";
import React from "react";

interface Props {
  main: boolean | undefined;
}

const CardButton: React.FC<Props> = ({ main }) => {
  return (
    <button
      className={clsx(
        "md:bg-white flex items-center gap-2.5 md:px-5 py-[11px] rounded-[100px] font-inter font-medium text-[18px] leading-[18px]",
        main ? "md:bg-opacity-25  text-white" : "md:bg-white text-black"
      )}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_577_5290)">
          <path
            d="M4 16V4H2V2H5C5.26522 2 5.51957 2.10536 5.70711 2.29289C5.89464 2.48043 6 2.73478 6 3V15H18.438L20.438 7H8V5H21.72C21.872 5 22.022 5.03466 22.1586 5.10134C22.2952 5.16801 22.4148 5.26495 22.5083 5.38479C22.6019 5.50462 22.6668 5.6442 22.6983 5.79291C22.7298 5.94162 22.7269 6.09555 22.69 6.243L20.19 16.243C20.1358 16.4592 20.011 16.6512 19.8352 16.7883C19.6595 16.9255 19.4429 17 19.22 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16ZM6 23C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21C4 20.4696 4.21071 19.9609 4.58579 19.5858C4.96086 19.2107 5.46957 19 6 19C6.53043 19 7.03914 19.2107 7.41421 19.5858C7.78929 19.9609 8 20.4696 8 21C8 21.5304 7.78929 22.0391 7.41421 22.4142C7.03914 22.7893 6.53043 23 6 23ZM18 23C17.4696 23 16.9609 22.7893 16.5858 22.4142C16.2107 22.0391 16 21.5304 16 21C16 20.4696 16.2107 19.9609 16.5858 19.5858C16.9609 19.2107 17.4696 19 18 19C18.5304 19 19.0391 19.2107 19.4142 19.5858C19.7893 19.9609 20 20.4696 20 21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z"
            fill={main ? "white" : "black"}
          />
        </g>
        <defs>
          <clipPath id="clip0_577_5290">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="hidden md:block">450 000 UZS</span>
    </button>
  );
};

export default CardButton;
