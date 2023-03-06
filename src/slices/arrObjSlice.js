import { createSlice } from "@reduxjs/toolkit";


export const arrObjSlice = createSlice({
  name: "sampleData",
  initialState: {
    value: [
      {
        id: 1,
        name: "Billy",
        designation: "Back-end Developer",
      },
      {
        id: 2,
        name: "Joe",
        designation: "Talent Acquisition",
      },
      {
        id: 3,
        name: "Mike",
        designation: "Front-end Developer",
      },
    ],
  },
});

console.log(arrObjSlice);

export default arrObjSlice.getInitialState;
