import { isEqual } from "lodash";

export const getLayoutName = (pathname: string) => {
  if (isEqual(pathname, "/")) {
    return "main";
  }
  if (/^\/services(?=\/|$)/i.test(pathname)) {
    return "services";
  }
  if (/^\/payment(?=\/|$)/i.test(pathname)) {
    return "payment";
  }
};
