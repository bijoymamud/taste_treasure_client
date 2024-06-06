import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {

  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      return res.json()
    }
  })

  if (isLoading) {

  }


  return (
    <div>
      <h2 className="uppercase">Total users: {users.length}</h2>
    </div>
  );
};

export default AllUsers;
