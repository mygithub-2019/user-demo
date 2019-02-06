const userinfo = {
    isUserLoggedIn: true,
    setUserData: (data) => {
        this.isUserLoggedIn = data;
    },
    getUserData: () => {
        return this.isUserLoggedIn;
    }

}
module.exports = { 
    userinfo
}