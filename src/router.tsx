import { createBrowserRouter } from "react-router-dom";
import Form from "./pages/Form";
import ServerTime from "./pages/ServerTime";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Form />
    },
    {
        path: '/time',
        element: <ServerTime />
    }
])

export default router;