"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

let getTodos = async () => {
  let res = await fetch(`http://localhost:3001/todos`);
  res = await res.json();

  return res;
};

const page = () => {
  const { data, isLoading, isError, isFetched } = useQuery<any>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  console.log(data);
  return (
    <div>
      {data?.map((todo: any) => (
        <div key={todo.id}>{todo?.title}</div>
      ))}
    </div>
  );
};

export default page;
