export class LogMessage {
    
    private message: string;
    private date: Date;

    constructor(message: string, date: Date) {
        this.message = message;
        this.date = date;
    }    

    public toString(): string {
        return this.date.toLocaleString() + ' - ' + this.message;
    }    
}
