export type LoginDto = {
    email: string;
    password: string;
};

export type SignupDto = {
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
};

export type Token = {
    accessToken: string;
    refreshToken: string;
};
