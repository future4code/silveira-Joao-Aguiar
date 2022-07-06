import { POST_TYPE } from "../PostModel"

export type postInputDTO = {
    image: string,
    description: string,
    type: POST_TYPE
}