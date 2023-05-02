import * as Yup from "yup";
import { UserRole } from "../../../models/user";

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Name is required'),
    lastName: Yup.string()
        .min(4, 'Too Short!')
        .max(40, 'Too Long!')
        .required('Lastname is required'),
    userRole: Yup.string().required('Role is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    country: Yup.string()
        .min(4, 'Too Short!')
        .max(20, 'Too Longo!'),
    password: Yup.string()
        .min(4, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Password is required'),
});

export const initialValues = {
    name: '',
    lastName: '',
    userRole: UserRole.ESPIRITU || UserRole.HUECO || UserRole.MALDITO || UserRole.CENIZA || UserRole.CAZADOR || UserRole.SHINOBI || UserRole.TARNISHED,
    email: '',
    country: '',
    password: '',
};