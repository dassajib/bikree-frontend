export const validatePasswords = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
        return 'Passwords do not match!';
    }
    if (password.length < 6) {
        return 'Password must be greater than 5 characters!';
    }
    return '';
};