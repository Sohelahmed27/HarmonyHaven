import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://harmony-haven-server.vercel.app/carts?email=${user?.email}`
      );

      return response.json();
    },
  });

  return [carts, refetch];
};

export default useCart;
