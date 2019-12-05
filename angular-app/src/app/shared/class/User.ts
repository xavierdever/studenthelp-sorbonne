export interface UserDetails {
    _id: string;
    email: string;
    name: string;
    exp: number;
    iat: number;
    profile?: {
        name: string,
        firstname: string,
        location: string,
        picture: string
    };
}

export interface ProfileInterface {
    name: string;
    firstname: string;
    location: string;
    picture: string;
}

interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    email: string;
    password: string;
    name?: string;
}
