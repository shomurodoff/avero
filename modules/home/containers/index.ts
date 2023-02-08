import dynamic from "next/dynamic";
const HomeContainer = dynamic(() => import("./home-container"), { ssr: false });

export { HomeContainer };
