import React, { useState } from 'react';

const UseState = () => {
    
    const [sampleWord, setSampleWord] = useState("master");
    const [sampleNo, setSampleNo] = useState(13);
    const [sampleArr, setSampleArr] = useState([1,2,3,4,5]);

    const [sampleObj, setSampleObj] = useState({
        item: "pencil",
        stocks: 5,
        brand: "Fabercastle",
    });

    const [sampleData, setsampleData] = useState([
        {
            id: 1,
            name: "Bill",
            country: "USA",
        },
        {
            id: 2,
            name: "Jimmy",
            country: "Canada",
        },
        {
            id: 3,
            name: "Kate",
            country: "Mexico",
        }]);

        const handleUpdate = () => {
                let dataCopy = [...sampleData];
                dataCopy[1].country = "Saudi Arabia";
                setsampleData(dataCopy);

                setSampleObj({...sampleObj, stocks: 10, brand: "Mongol"})

                setSampleWord("apprentice");
                setSampleNo(47);
                setSampleArr([...sampleArr,6,7,8,9,10]);
        };

    return (
        <div>
            <h5>Array of Object</h5>
            <p>
                {sampleData.map((e) => {
                    return (
                        <p key={e.id}>
                            {e.name} {e.country}
                        </p>
                    )
                })}
            </p>
            <hr></hr>
            <h5>Object</h5>
            <p>{sampleObj.item}</p>
            <p>{sampleObj.stocks}</p>
            <p>{sampleObj.brand}</p>
            <hr></hr>
            <h5>Sample Datatypes</h5>
            <p>String: {sampleWord}</p>
            <p>Number: {sampleNo}</p>
            <p>Array: {sampleArr.map((e) => (
                <>{e}</>
            ))}</p>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UseState;