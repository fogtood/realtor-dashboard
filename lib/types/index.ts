export interface AuthRequest {
    email: string;
    password: string;
    name?: string;
}

export interface User {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
    allProperties: []
}

export interface AuthResponse {
    data: User;
    message: string;
    success: boolean;
}