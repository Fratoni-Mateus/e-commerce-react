import React from 'react'

import { DeliveryIcon } from '../atoms'

export default function Delivery() {
    return (
        <li className="gap flex w-100 h-100 cover rounded">
            <DeliveryIcon />
            Envio para todo Brasil
        </li>
    )
}
