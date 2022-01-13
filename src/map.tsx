import React from 'react';
import Clunch from 'clunch';
import map from './ui-map';

Clunch.series('ui-map', map);

class Index extends React.Component {
    render() {
        return <div id="canvas" style={{ width: '500px', height: '500px' }}></div>;
    }
    componentDidMount() {



    }
}

export default Index;
