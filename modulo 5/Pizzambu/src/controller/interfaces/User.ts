export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
};

export interface UserSignUpDTO {
    email: string,
    name: string,
    password: string,
    role: USER_ROLES
};

export interface UserLoginDTO {
    email: string,
    password: string
};