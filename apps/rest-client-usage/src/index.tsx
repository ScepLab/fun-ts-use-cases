import React from "react";
import ReactDOM from "react-dom/client";
import { randomNumber } from "common";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <div>
            {"Hello Developer " + randomNumber(0, 100)}
        </div>
    </React.StrictMode>
);
