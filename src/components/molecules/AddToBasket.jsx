import React from 'react'

import { AddToBasketIcon } from '../atoms/'

export default function AddToBasket() {
    return (
        <li className="gap flex w-066 h-a al-it-center space-around cover rounded bg-dOrange">
            <p className="gap ">Adicionar ao carrinho.</p>
            <AddToBasketIcon />
        </li>
    )
}
