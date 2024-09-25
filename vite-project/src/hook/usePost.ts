import { LoggedUserResponse } from "@/lib/apiCalls/type";
import useRequest from "./useRequest";
import { GeneralResponse, QueryParams } from "@/utils/genType";
import { headers } from "@/utils/general";
import UseToken from "./useToken";

export function useLoggedInUser() {
  const {token} = UseToken();
  const { data, error, isValidating, isLoading, mutate } = useRequest<
    GeneralResponse<LoggedUserResponse>
  >(
    {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      url: "/api/User/loggedInUser",
      method: "GET",
      // params,
    },
    {
      dedupingInterval: 50000,
    }
  );
console.log(data, 'datatatatat');

  return {
    data: data?.data,
    // pageMeta: data?.pageMeta,
    error,
    isValidating,
    isLoading,
    mutate,
  };
}
