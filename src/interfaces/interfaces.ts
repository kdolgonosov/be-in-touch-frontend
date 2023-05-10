export interface IUser {
    _id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    age?: number;
    city: string;
    university?: string;
    avatar?: string;
    friends: string[];
}

export interface IPost {
    _id: string;
    title: string;
    text: string;
    image?: string;
    owner: IUser;
    likes: string[];
    createdAt: Date;
    updatedAt: string;
}
