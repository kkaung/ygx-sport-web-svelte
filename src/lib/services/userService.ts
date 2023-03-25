import { env } from '$env/dynamic/public';
import axios from 'axios';
import { Response } from '$lib/commons/models';
const api = axios.create({ baseURL: 'http://localhost:3001/api/users' });

type Role = 'admin' | 'user';

type User = {
    id: number;
    fullName: string;
    userName: string;
    email: string;
    profileUrl: string | null;
    role: Role;
    disabled: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export const createUser = async (
    email: string,
    fullName: string
): Promise<Response<any>> => {
    const res = new Response();

    try {
        const { data } = await api.post('', { email, fullName });
        res.data = data;
    } catch (err: any) {
        res.ok = false;
        res.status = err.response.status;
        res.message = err.response.data.message;
    }

    return res;
};

export const getUserByEmail = async (
    email: string
): Promise<Response<User>> => {
    const res = new Response<User>();

    try {
        const { data } = await api.get('?email=' + email);
        res.data = data;
    } catch (err: any) {
        res.ok = false;
        res.status = err.response.status;
        res.message = err.response.data.message;
    }

    return res;
};

export async function getMe() {}
