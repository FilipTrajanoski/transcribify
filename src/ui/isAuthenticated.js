export function isAuthenticated(){
    const token = localStorage.getItem("jwt");
    return !!token;
}