import React from 'react'

export default function Product() {
  return (
    <Default>
    <header class="container-header bg-dCyan align-center">
        <ul class="flex space-between list-none align-center pd-12 font-24 h-100px">
            
            <li><a href="./index.html"><img class="img-logo" src="assets/logo.png" alt="Logo"/></a></li>
            <li><a class="flex h-35px" href="#"><img class="h-35px margin-right align-center" src="assets/catalogo.png" alt="catalogo"/></a></li>
            <li><input class="search-bar h-35px icon rounded" type="text" placeholder="BUSCAR"/></li>
            <li><a href="login.html" target="_self">ENTRE</a></li>
            <li><a href="#"><img class="icon-50" src="./assets/Shopping-cart.png"/></a></li>
        </ul>
    </header>
        
    </Default>
  )
}
