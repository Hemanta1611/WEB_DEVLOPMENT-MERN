// Custom Error Class
export class ExpressError extends Error{
    constructor(message, status){
        super();
        this.message = message;
        this.status = status;
    }
}
