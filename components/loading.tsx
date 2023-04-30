import { CSSProperties, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function Loading() {
    return (
        <BarLoader
            color="#ffffff"
            loading={true}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}