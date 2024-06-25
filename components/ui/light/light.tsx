import React from "react";

type Props = {
    variant: "red" | "green" | "yellow"
}

const Light = ( {variant = 'red'}: Props) => {
    return (
        <div style={{
            width: 70,
            height: 70,
            backgroundColor: variant,
            borderRadius: "50%",
        }}>   
        </div>
    )
}

export default Light