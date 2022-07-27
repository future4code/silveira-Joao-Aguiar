import { USER_ROLES } from "./User";

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
};