import { USER_ROLES } from "./User";

export interface SignUpInterfaceDTO {
    name: string,
    email: string,
    password: string,
    role: USER_ROLES | null | undefined
}