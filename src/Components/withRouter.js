import React from 'react';
import { useParams } from 'react-router-dom';

const withRouter = (Wrapper) => (props) => {
    const params = useParams();
    return (
        <Wrapper {...props} params={params} />
    );
};

export default withRouter;