"use client";
import React, { useEffect, useState } from "react";

function todo() {
  const [todo, setToDo] = useState({});

  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1" , 
      {
        // cache : "no-store"
        next : {
          revalidate : 120
        }
      }
    );
    const result = await response.json();
    setToDo(result);
  }, []);
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}

export default todo;
