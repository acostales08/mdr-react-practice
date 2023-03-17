import React from "react";
import { Container } from "@mui/system";

export const ControlledContainer = ({style, children}) => {

    return (
        <Container style={{style,}}>
            {children}
        </Container>
    )
}