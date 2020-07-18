const proxy = [
    {
        context: "/api",
        target: "http://localhost:8080/",
        secure: false
    }
];
module.exports = proxy;
