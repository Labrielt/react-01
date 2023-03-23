import React from 'react';
import PropTypes from 'prop-types';
import { Contac } from '../../Models/contacs.class';


const ContacComp = ({ Contac }) => {
    return (
        <div>
            <h2>
                Nombre : {Contac.name}   {Contac.lastname}
            </h2>
            <h3>
                Email : {Contac.email}
            </h3>
            <h4>
                Estado : {Contac.conect ? 'Conectado' : 'Desconcetado'}
            </h4>

           
        </div>
    );
};


ContacComp.propTypes = {
  Contac : PropTypes.instanceOf( Contac )

};


export default ContacComp;
