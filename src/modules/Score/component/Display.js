import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDelData } from "../../actions";
import TextField from "@mui/material/TextField";


function searchFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

const Display = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const userScore = useSelector((state) => {
    return state.userScore;
  });
  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(userScore));
  }, [userScore]);

  const handleDelete = (id) => {
    dispatch(onDelData(id));
  };

  const handleSearch = (e) => {
    setTerm(e.target.value);
  };

  return (
    <>
      <TextField
        id="searchName"
        label="Search"
        variant="outlined"
        placeholder="Search name"
        type="text"
        onChange={handleSearch}
        
      />
      {userScore.filter(searchFor(term)).map((e) => {
        return (
          <div key={e.id}>
            <p>
              {e.name} : {e.score}{" "}
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Display;
