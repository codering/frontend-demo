import { useGetUserById } from "../api/user";

export default function Home() {
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetUserById(1);

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  if (isUserError) {
    return <div>Error fetching user</div>;
  }

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
}
