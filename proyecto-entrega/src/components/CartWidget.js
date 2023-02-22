import React from 'react'

export default function CartWidget({cantidadCarrito}) {
return (
    <div>
        <button class="btn btn-dark">Carrito</button> 
        <p>{cantidadCarrito}</p>
    </div>
)
}
