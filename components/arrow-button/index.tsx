import React from "react";

interface Props {
  rest?: [];
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Index: React.FC<Props> = ({ onClick, ...rest }) => {
  return (
    <button
      className="py-2 px-5 border-2 border-black rounded-2xl cursor-pointer"
      {...rest}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_429_107)">
          <path
            d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_429_107">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default Index;
