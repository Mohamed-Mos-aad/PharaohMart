export default [
    {
        method: "POST",
        path: "/custom-register",
        handler: "register.register",
        config: {
        auth: false,
        },
    },
];