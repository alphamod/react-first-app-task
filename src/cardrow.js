import React from 'react';
import { Cards } from './cards';

export function CardRow(props) {
    return (
        <div className="d-flex">
            <Cards className="bg-dark" cardHeading="Responsive" content="Etho oru content. Chumma kuduppen. Apdi than kuduppen. responsive"></Cards>
            <Cards className="bg-secondary" cardHeading="With Love" content="Etho oru content. Apdi than kuduppen. With Love"></Cards>
            <Cards className="bg-dark" cardHeading="One & Multipage" content="Chumma kuduppen. Apdi than kuduppen. Multi page"></Cards>
            <Cards className="bg-secondary" cardHeading="Retina Ready" content="Etho oru content. Chumma kuduppen. retina Ready"></Cards>
        </div>
    )
}