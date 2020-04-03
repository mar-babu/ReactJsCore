import React from 'react';


const Links = (props) => (
    <div className='Links'>
        <h3>Social Links: </h3>
        <ul>
            <li>
                <a href='#'>{props.linkA}</a>
            </li>
            <li>
                <a href='#'>{props.linkB}</a>
            </li>
            <li>
                <a href='#'>{props.linkC}</a>
            </li>
            <li>
                <a href='#'>{props.linkD}</a>
            </li>
        </ul>
    </div>
);

export default Links;