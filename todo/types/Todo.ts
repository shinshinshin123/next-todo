import { User } from './User';

export type TodoProps = {
    id: number;
    title: string;
    content: string;
    users: User[];
};
