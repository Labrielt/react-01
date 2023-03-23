import { Contac } from "../../Models/contacs.class"
import React from 'react';

import ContacComp from "../pures/contacs";


const ContacList = () => {
   
    const example = new Contac('Gabriel', 'Zamora','abc@mail.com', true);
    return (
        <div>
            <h1> Lista de Contactos </h1>
        {/* NPI*/}
        <ContacComp Contac={example}></ContacComp>
        </div>
    );
};





export default ContacList;

