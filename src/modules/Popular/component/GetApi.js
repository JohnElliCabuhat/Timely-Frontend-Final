import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetApi } from "../../actions";

const GetApi = () => {
  const scores = useSelector((state) => state.scoreApi.data);
  console.log(scores);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetApi());
  }, []);
  const scoreList = scores ? (
    <div key={scores.player_id}>
      <h3>Popular Record: </h3>
      <p>Rating: {scores.statistics.rating}</p>
      <p>Total Rating: {scores.statistics.totalRating}</p>
      <p>Goals: {scores.statistics.goals}</p>
    </div>
  ) : (
    <p>No post yet</p>
  );
  return <div>{scoreList}</div>;
};

export default GetApi;
