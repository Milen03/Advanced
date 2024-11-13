function setUserDate(userDate) {
    sessionStorage.setItem('userData', JSON.stringify(userDate))
}

function getUserData() {
    return sessionStorage.getItem('userData') && JSON.parse(sessionStorage.getItem('userData'))
}

function cleareUserData() {
    return sessionStorage.removeItem('userData')
}

function getUserToken() {
    const userData = getUserData()
    return userData?.accessToken
}
function getUserId() {
    const userData = getUserData()
    return userData?._id
}

function hasOwner(ownerId) {
    const id = getUserId()
    return ownerId === id
}

export const userHelper = {
    getUserData,
    cleareUserData,
    getUserToken,
    getUserId,
    hasOwner,
    setUserDate
}
