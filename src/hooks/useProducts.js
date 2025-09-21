import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getproductById } from "../network/products";

export const useProducts = (externalID) => {
  const { data, refetch, isFetching, isRefetching, isLoading, error } =
    useQuery({
      queryKey: ["product"],
      queryFn: () => getproductById(externalID),
    });

  const product = useMemo(() => data);
  return {
    product,
    isLoading,
    error,
    isFetching,
    isRefetching,
    refetch,
  };
};
