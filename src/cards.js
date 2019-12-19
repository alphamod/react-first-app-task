import React from 'react';

export function Cards(props) {
    return (
        <div className={`card flex-fill text-white rounded-0 mt-0 pt-0 ${props.className}`}>
            <div className="h3 text-center p-3">{props.cardHeading}</div>
            <p className="m-4 text-center p-3">{props.content}</p>
        </div>
    )
}