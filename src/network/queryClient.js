import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error) => {
        console.log(error?.response?.data?.message);
      },
    },
  },
});

export default queryClient;
