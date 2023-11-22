export class LogMessage {
    
    private message: string;
    private date: Date;

    constructor(message: string, date?: Date) {
        this.message = message;
        if (date) {
            this.date = date;
        }
        else {
            this.date = new Date();
        }
    }    

    public get toString(): string {
        return this.date.toLocaleString() + ' - ' + this.message;
    }    
}
