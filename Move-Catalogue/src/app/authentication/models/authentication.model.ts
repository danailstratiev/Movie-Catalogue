export interface UserRequestModel {
    email: string;
    password: string;
}

export interface LoginResponseModel {
    token: string;
    userId: string;
    isAdmin: boolean;
}