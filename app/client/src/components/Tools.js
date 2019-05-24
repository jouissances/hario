import React from 'react';
import { NavLink } from 'react-router-dom';

const Tools = props => {
    return (
        <div>
            {props.tools.map((tool, idx) => 
            <div key={idx} className='tool-wrapper'>
                <h2>{tool.tool}</h2>
                <p>{tool.short_description}</p>

                <NavLink to={`/tools/${tool.id}`} className='tool-link'>Try it!</NavLink>
            </div>
            )}
        </div>
    )
}

export default Tools