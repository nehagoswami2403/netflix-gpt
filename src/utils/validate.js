export const checkValidEmail =(email) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

    if (!isEmailValid) return "Email ID is not valid";
    return null;
}

export const checkValidPassword =(password) => {
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if (!isPasswordValid) return "Password is not valid";
    return null;
}