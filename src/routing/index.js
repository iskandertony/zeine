import DashBoard from "../pages/dashboard";


export default {
    welcomePage: {
        path: "/",
        element: <DashBoard />, //
        protected: false,
        role: "all",
    },
};