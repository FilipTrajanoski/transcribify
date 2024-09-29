export function isAuthenticated(){
    const token = localStorage.getItem("user");
    return !!token;
}