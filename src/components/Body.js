import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
    // routing in body
    const appRouter = createBrowserRouter(
        [
            {
                path: "/",
                element: <Login />,
            },

            {
                path: "/browse",
                element: <Browse />,

            }
        ]
    );

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;