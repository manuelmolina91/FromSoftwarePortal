export type ProfileInput = {
    name: string;
    lastName: string;
    email: string;
    country: string;
};

export enum UserRole {
    ESPIRITU = 'ESPIRITU',
    HUECO = 'HUECO',
    MALDITO = 'MALDITO',
    CENIZA = 'CENIZA',
    CAZADOR = 'CAZADOR',
    SHINOBI = 'SHINOBI',
    TARNISHED = 'TARNISHED', 
}

export const normalizeProfile = (input: any) => {
    return {
        name: (input?.name || '') as string,
        lastName: (input?.lastName || '') as string,
        email: (input?.email || '') as string,
        country: (input?.country || '') as string,
        id: (input?.id || '') as string
    };
};

export type Profile = ReturnType<typeof normalizeProfile>;