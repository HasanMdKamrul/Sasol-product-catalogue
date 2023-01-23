import { useQuery } from "@tanstack/react-query";
import React from "react";
import Heading from "../core/Heading";
import LoadingSpinner from "../core/LoadingSpinner";

const AllUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["auth", "users"],
    queryFn: async () => {
      try {
        const response = await fetch(`http://localhost:8000/auth/users/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("auth_token")}`,
          },
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Heading>All Users</Heading>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>UserName</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user?.username}</td>
                <td>{user?.email}</td>
                <td>{user?.first_name}</td>
                <td>{user?.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
