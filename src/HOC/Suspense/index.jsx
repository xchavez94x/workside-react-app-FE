import React, { Suspense } from "react";

export default function SuspenseContainer(props) {
    const { fallBackComponent, children } = props
    return (
        <Suspense fallback={fallBackComponent}>
            {children}
        </Suspense>
    );
}
