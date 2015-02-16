class ResForm {
    err:number;
    msg:string;
    data:any;

    constructor(err:Error, data) {
        if (err) {
            this.err = 1;
            this.data = undefined;
            this.msg = err.message;
        }
        else {
            this.err = 0;
            this.data = data;
            this.msg = undefined;
        }
    }
}

export = ResForm;