import React from 'react';
import { onUpdate } from './action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function UpdateFunc(props) {

    const dispatch = useDispatch();
    const empData = useSelector((state) => {
        return state.empData;
    })

    function handleUpt(props) {
        dispatch(onUpdate({ id: 3, name: "Rose", gender: "female" }));
    }

    console.log(props);
    return (
        <>
            <h3>Functional Component</h3>
            <p>
                {empData.map((e) => { 
                    return (
                        <div key={e.id}>
                            <p>{e.name}</p>
                            <p>{e.gender}</p>
                        </div>
                    )
                })}
            </p>
            <p><button onClick={handleUpt}>Update</button></p>

        </>
    );
}


export default (UpdateFunc);
