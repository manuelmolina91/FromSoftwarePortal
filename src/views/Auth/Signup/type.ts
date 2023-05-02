import {UserRole} from '../../../models/user'

export type SignUpProps = {
    name: string;
    email: string;
    password: string;
    lastName: string;
    userRole: UserRole;
    country: string;
};

export type FieldProps = {
    field: {
        value: string;
        name: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    };
    meta: {
        error?: string;
        touched: boolean;
    };
};