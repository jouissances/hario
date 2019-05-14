import React from 'react';
import { NavLink } from '../../node_modules/react-router-dom';

const Tools = props => {
    return (
        <div>
            {props.tools.map((tool, idx) => 
            <div key={idx}>
                <h2>{tool.tool}</h2>
                <p>{tool.short_description}</p>

                <NavLink to={`/tools/${tool.id}`}>Try it!</NavLink>
            </div>
            )}
        </div>
    )
}

export default Tools