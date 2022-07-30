export enum WalkTime {
    MIN_WALK = 30,
    MAX_WALK = 60
}

export enum WalkStatus {
    WALKING = "PASSEANDO",
    WAITING = "EM ESPERA",
    FINISHED = "FINALIZADO",
    CANCELED = "CANCELADO"
}

export interface DogWalking {
petNames: string[],
walkDate: string,
duration: WalkTime
}