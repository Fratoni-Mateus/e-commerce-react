import React from 'react'

import clock from "../../assets/Alarm.png";

export default function SecondaryImage() {
    return (
            <img
            className="gap h-35px cover rounded bg-lOrange"
            src={clock}
            alt="Relógio"
            />
    )
}
