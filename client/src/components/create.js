import { useState } from "react";
import axios from "axios";
import httpClient from "http-client";

export const Create = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSummit = async (e) => {
    e.preventDefault();
    const respuesta=await axios.get("http://localhost:3001/users", {
      headers: { Authorization: "Bearer " + localStorage.getItem('SavedToken') },
    });
    console.log(respuesta.data)
  };

  return (
    <div>
      <form>
        <input
          name="email"
          onChange={(event) =>
            setInput({ ...input, email: event.target.value })
          }
        ></input>
        <input
          name="password"
          onChange={(event) =>
            setInput({ ...input, password: event.target.value })
          }
        ></input>
        <button onClick={(e) => handleSummit(e)}></button>
      </form>
    </div>
  );
};
export default Create;
