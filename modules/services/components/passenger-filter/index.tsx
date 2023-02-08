import React from "react";
import { Container } from "../../../../UI";

const Index = () => {
  return (
    <div className="bg-[#F1F3F6] pt-7 xl:pt-12">
      <Container>
        <nav className="bg-white flex flex-col lg:flex-row gap-3 lg:gap-10 xl:gap-16 lg:justify-between p-5 rounded-[15px] font-poppins">
          <div className="flex justify-between flex-wrap flex-grow lg:gap-4 xl:gap-10">
            <div className="order-1">
              <h5 className="text-lg xl:text-xl font-semibold mb-2">14:20</h5>
              <p className="lg:text-xs xl:text-sm font-medium">31-Avg, Bar</p>
            </div>
            <div className="order-3 lg:order-2 w-full lg:w-auto flex justify-between mt-5 lg:mt-0 border-b-2 border-primary-red py-2.5 flex-grow">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_577_8904)">
                    <path
                      d="M8.73168 9.69414L4.97335 3.80081L6.58251 3.36914L12.375 8.71914L16.76 7.54414C17.0803 7.45839 17.4215 7.50336 17.7085 7.66918C17.9956 7.83499 18.2051 8.10806 18.2908 8.42831C18.3766 8.74856 18.3316 9.08975 18.1658 9.37684C18 9.66393 17.7269 9.87339 17.4067 9.95914L4.93001 13.3008L4.28335 10.8858L4.48418 10.8316L6.54001 12.8691L4.35168 13.4558C4.17223 13.5039 3.98186 13.4907 3.81079 13.4182C3.63972 13.3457 3.49778 13.2182 3.40751 13.0558L1.22168 9.11747L2.42918 8.79414L4.48418 10.8316L8.73168 9.69331V9.69414ZM3.33335 15.8341H16.6667V17.5008H3.33335V15.8341Z"
                      fill="#FF354D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_577_8904">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h6 className="text-base font-semibold">2h, 40s</h6>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_577_8907)">
                    <path
                      d="M8.54499 8.72523L8.23665 1.74023L9.84749 2.1719L12.1892 9.70107L16.5733 10.8761C16.7319 10.9185 16.8805 10.9918 17.0108 11.0917C17.141 11.1916 17.2503 11.3162 17.3324 11.4584C17.4146 11.6005 17.4679 11.7574 17.4893 11.9202C17.5108 12.0829 17.4999 12.2483 17.4575 12.4069C17.415 12.5655 17.3417 12.7141 17.2418 12.8444C17.1419 12.9746 17.0173 13.0839 16.8752 13.166C16.733 13.2481 16.5761 13.3014 16.4134 13.3229C16.2506 13.3443 16.0852 13.3335 15.9267 13.2911L3.44999 9.94773L4.09665 7.53273L4.29832 7.5869L5.05999 10.3786L2.87082 9.79273C2.69143 9.74446 2.53332 9.63763 2.42159 9.48922C2.30986 9.3408 2.25093 9.15931 2.25415 8.97357L2.32915 4.47107L3.53665 4.7944L4.29832 7.5869L8.54499 8.72523ZM3.33332 15.8336H16.6667V17.5002H3.33332V15.8336Z"
                      fill="#FF354D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_577_8907">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="order-2">
              <h5 className="text-lg xl:text-xl font-semibold mb-2">14:20</h5>
              <p className="lg:text-xs xl:text-sm font-medium">
                31-Avg, Los A.
              </p>
            </div>
          </div>
          <div className="bg-primary-gray w-[1px] hidden lg:block"></div>
          <div className="flex flex-col lg:flex-row justify-between flex-grow items-center">
            <div>
              <h5 className="text-lg xl:text-xl font-semibold mb-2">
                Jumayev M.
              </h5>
              <p className="lg:text-xs xl:text-sm font-medium">
                CHR — 250 2103163081
              </p>
            </div>
            <button className="flex gap-2.5 items-center py-3 xl:py-4  bg-[#F1F3F7] rounded-[25px] px-7 w-full justify-center lg:w-auto lg:text-xs xl:text-sm font-medium">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_577_5700)">
                    <path
                      d="M11 21C11 20.6022 10.842 20.2206 10.5607 19.9393C10.2794 19.658 9.89782 19.5 9.5 19.5C9.10218 19.5 8.72064 19.658 8.43934 19.9393C8.15804 20.2206 8 20.6022 8 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C8 3.39782 8.15804 3.77936 8.43934 4.06066C8.72064 4.34196 9.10218 4.5 9.5 4.5C9.89782 4.5 10.2794 4.34196 10.5607 4.06066C10.842 3.77936 11 3.39782 11 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V9.5C21.337 9.5 20.7011 9.76339 20.2322 10.2322C19.7634 10.7011 19.5 11.337 19.5 12C19.5 12.663 19.7634 13.2989 20.2322 13.7678C20.7011 14.2366 21.337 14.5 22 14.5V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H11ZM9.5 10.5C9.89782 10.5 10.2794 10.342 10.5607 10.0607C10.842 9.77936 11 9.39782 11 9C11 8.60218 10.842 8.22064 10.5607 7.93934C10.2794 7.65804 9.89782 7.5 9.5 7.5C9.10218 7.5 8.72064 7.65804 8.43934 7.93934C8.15804 8.22064 8 8.60218 8 9C8 9.39782 8.15804 9.77936 8.43934 10.0607C8.72064 10.342 9.10218 10.5 9.5 10.5ZM9.5 16.5C9.89782 16.5 10.2794 16.342 10.5607 16.0607C10.842 15.7794 11 15.3978 11 15C11 14.6022 10.842 14.2206 10.5607 13.9393C10.2794 13.658 9.89782 13.5 9.5 13.5C9.10218 13.5 8.72064 13.658 8.43934 13.9393C8.15804 14.2206 8 14.6022 8 15C8 15.3978 8.15804 15.7794 8.43934 16.0607C8.72064 16.342 9.10218 16.5 9.5 16.5Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_577_5700">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Yo’lovchini o’zgartirish
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Index;
