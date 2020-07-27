import React from 'react';

export default function Button(props) {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}