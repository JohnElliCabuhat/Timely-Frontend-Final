import React from "react";
import { useSelector } from "react-redux";
import ReactExport from "react-export-excel";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DisplayData = () => {
  const sampleData = useSelector((state) => state.sampleData.value);

  const dataList = sampleData.map((data) => {
    return (
      <div key={data.id}>
        <p>{data.name}</p>
        <p>{data.designation}</p>
      </div>
    );
  });

  return (
    <div>
      <div>{dataList}</div>
      <ExcelFile element={<button>Download Data</button>}>
        <ExcelSheet data={sampleData} name="Employees">
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="Designation" value="designation" />
        </ExcelSheet>
      </ExcelFile>
      <hr></hr>

    </div>
  );
};

export default DisplayData;
