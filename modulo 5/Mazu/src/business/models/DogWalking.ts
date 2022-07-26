export enum WalkTime {
    MIN_WALK = 30,
    MAX_WALK = 60
}

export enum WalkStatus {
    WALKING = "PASSEANDO",
    WAITING = "EM ESPERA",
    FINISHED = "FINALIZADO"
}

export interface DogWalking {
status: WalkStatus,
walkDate: string,
price: number,
duration: WalkTime,
latitude: number,
longitude: number,
pets: string[],
walkStart: string,
walkEnd: string  
}