import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../services/api";
import { toast } from "react-hot-toast";
import { isArray, get, forEach } from "lodash";

const postRequest = (url: string, attributes: {}, config = {}) =>
  request.post(url, attributes, config);

const usePostQuery = ({ hideSuccessToast = false, listKeyId = "" }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error } = useMutation(
    ({ url, attributes, config = {} }: any) =>
      postRequest(url, attributes, config),
    {
      onSuccess: (data) => {
        if (!hideSuccessToast) {
          toast.success(data?.data?.message || "SUCCESS");
        }

        if (listKeyId) {
          if (isArray(listKeyId)) {
            forEach(listKeyId, (val: any) => {
              queryClient.invalidateQueries(val);
            });
          } else {
            // @ts-ignore
            queryClient.invalidateQueries(listKeyId);
          }
        }
      },
      onError: (data: any) => {
        if (isArray(get(data, "response.data"))) {
          forEach(get(data, "response.data"), (val) => {
            toast.error(
              get(val, "message", "ERROR"), { position: "top-right" }
            );
          });
        } else {
          toast.error(data?.response?.data?.message || "ERROR");
        }
      },
    }
  );

  return {
    mutate,
    isLoading,
    isError,
    error,
  };
};
export default usePostQuery;
