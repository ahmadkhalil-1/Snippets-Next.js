"use client";

import React from "react";

const ErrorPage = ({ error }: { error: Error }) => {
    return (
        <div>
            {error.message}
        </div>
    );
};

export default ErrorPage;
