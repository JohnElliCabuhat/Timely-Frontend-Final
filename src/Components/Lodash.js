import { isEqual, uniqWith, xorBy } from 'lodash';
import React, { useState } from 'react';


const Lodash = () => {

    let arrOne = [
        {
            id: 20,
            name: 'alex',
        },
        {
            id: 30,
            name: 'alina',
        }];

    let arrTwo = [
        {
            id: 40,
            name: 'hello',
        },

        {
            id: 30,
            name: 'world',
        }];

        let str=['u', 'ec'];
        let arr = [
            {
                storageVal: 'u',
                table:['E','F']
            },

            {
                storageVal: 'data',
                table:['E','F']
            },
        
            {
                storageVal: 'ec',
                table:['E']
            }
        ]

        let a = [['E'], ['F']];
        let t = [['E', 'F'], [['F'], ['G']]]; 

    let getResult = _.filter(arr, ['storageVal', _.includes])
    console.log("4.b: ", getResult);
    let result4c = _.flatten(a);
    console.log("4.c: ", result4c);
    let flat4d = _.flattenDeep(t);
    let result4d = _.union(flat4d, ['F']);
    console.log("4.d: ", result4d);
    // let result1 = _.map(arrOne,'id');
    // let result2 = _.map(arrTwo, 'id');
    // let trueResult = _.union(result1,result2);
    // let trueResult2 = _.difference(trueResult, [30]);
    // let dispResult = _.find(arrOne, trueResult2);
    // console.log(result1);
    // console.log(result2);
    // console.log(trueResult);
    // console.log(trueResult2);
    // console.log(dispResult);

    return (
        <div>  
            <h5>Use console for result</h5>
        </div>
    );
};

export default Lodash;