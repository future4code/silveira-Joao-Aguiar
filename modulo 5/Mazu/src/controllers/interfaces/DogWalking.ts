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
status: WalkStatus,
walkDate: string,
price: number,
duration: WalkTime,
latitude: string,
longitude: string,
pet: string,
walkStart: string,
walkEnd: string  
}