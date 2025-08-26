// Local declaration so TypeScript knows about Node's captureStackTrace without installing @types/node
declare global {
    interface ErrorConstructor {
        captureStackTrace?: (targetObject: object, constructorOpt?: Function) => void;
    }
}

class ApiError extends Error{
    statusCode: number;
    data: any;
    message: string;
    success: boolean;
    errors: any;
    stack?: string;

    constructor(
        statusCode: number,
        message: string= "Something went wrong",
        errors: any=[],
        stack: string = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors


        if(stack){
            this.stack = stack
        }else if (typeof Error.captureStackTrace === "function"){
            Error.captureStackTrace(this, this.constructor)
        } else {
            this.stack = new Error(message).stack
        }

    }
}

export {ApiError}