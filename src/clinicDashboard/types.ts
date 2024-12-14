import { ModelType } from "@core/types.ts"

export type BaseUserType = ModelType & {
    email: string
    firstName: string
    lastName: string
    avatar?: string
}
