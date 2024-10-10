class Res<D, E> {
    data: D;
    error: E;

    constructor(data: D, error: E) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}

let res = new Res<string, number>("data", 0)

class HTTPResp<F> extends Res<string, number>{
    code: number;
    setCode(code: number){
        this.code = code
    }
}

let res2 = new HTTPResp("data", 0)