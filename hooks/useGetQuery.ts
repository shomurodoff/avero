import {useQuery} from "@tanstack/react-query";
import {request} from "../services/api";
import {toast} from "react-hot-toast";

const useGetQuery = ({
                         key = "get-all",
                         url = "/",
                         params = {},
                         headers = {},
                         showSuccessMsg = false,
                         showErrorMsg = false,
                         enabled = true,
                         method = 'get',
                     }) => {
    const {isLoading, isError, data, error, isFetching} = useQuery(
        [key, params],
        () => method == 'post' ? request.post(url, {...params}): request.get(url, {params, headers}),
        {
            keepPreviousData: true,
            onSuccess: () => {
                if (showSuccessMsg) {
                    toast.success("SUCCESS");
                }
            },
            onError: (data: Object) => {
                if (showErrorMsg) {
                    toast.error(`ERROR`);
                }
            },
            enabled,
        }
    );

    return {
        isLoading,
        isError,
        data,
        error,
        isFetching,
    };
};

export default useGetQuery;
