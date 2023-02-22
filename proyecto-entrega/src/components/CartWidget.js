import React from 'react'

export default function CartWidget({cantidadCarrito}) {
return (
    <div>
        <button class="btn btn-dark"><i class="bi bi-cart"></i></button> 
        <p>{cantidadCarrito}</p>
    </div>
)
}
