import React from 'react';

const Hoc = (Prospect) => {
    console.log(Prospect);
    const color =['red', 'orange', 'yellow', 'green', 'blue', ];
    const randomColor = color[Math.floor(Math.random() * color.length)];

    return (props) => {
        return(
        <div class="card-panel" style={{backgroundColor: randomColor}}>
            <Prospect />
        </div>
        )
    } 
};

export default Hoc;