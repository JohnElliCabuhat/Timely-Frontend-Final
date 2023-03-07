import * as actions from "./actionType";
import axios from "axios";

export const onGetData = (data) => {
  return {
    type: actions.GET_DATA,
    payload: data,
  };
};

export const onDelData = (id) => {
  return {
    type: actions.DELETE_DATA,
    payload: id,
  };
};

export const onGetApi = () => {
  const options = {
    method: 'GET',
    url: 'https://sofascores.p.rapidapi.com/v1/players/statistics/result',
    params: {
      unique_tournament_id: '34',
      player_stat_type: 'overall',
      seasons_id: '37167',
      player_id: '12994'
    },
    headers: {
      'X-RapidAPI-Key': '4ae42770cbmshf6c97860647e504p1bd4abjsn6c6752a18f3c',
      'X-RapidAPI-Host': 'sofascores.p.rapidapi.com'
    }
  };

  return (dispatch) => {
    axios
      .request(options)
      .then((res) => {
        console.log("Response: ", res);
        dispatch(
          ((data) => {
            return {
              type: actions.GET_API,
              payload: { httpResponse: data },
            };
          })(res.data)
        );
      })
      .catch(err => {
        console.error("Error:" ,err);
      });
  };
};
