import React from 'react';
import SmallCard from './SmallCard';

let productsInDataBase = {
    color:   "primary",
    titulo: "Productos en Base de Datos",
    valor: 21,
    icono: "fas fa-mountain",
}

let usersInDB ={
    color:   "success",
    titulo: "usuarios registrados",
    valor: 79,
    icono: "fas fa-hiking",
}

let categories = {
    color:   "warning",
    titulo: "Categorias totales",
    valor: 49,
    icono: "fas fa-bookmark",
}

let cardProps = [productsInDataBase,usersInDB,categories];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;