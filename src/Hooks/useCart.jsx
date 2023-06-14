import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {
  const {user} = useContext(AuthContext)
  const { isLoading, refetch,  data:carts=[] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/${user.email}`)
     
      return response.json()
    },
  })

  return [carts, isLoading, refetch]
};

export default useCart;