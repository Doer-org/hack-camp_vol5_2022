import {EventEmitter} from 'events'

export default class Socket {
    constructor(ws = new WebSocket(), ee = new EventEmitter()){
        this.ws = ws;
        this.ee = ee;

        ws.onmessage = this.message.bind(this);
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
        ws.onerror = this.error.bind(this);
    };

    // eName という名前で eventの登録
    on(eName, fn){
        this.ee.on(eName, fn);
    };

    // eNameのeventの削除
    off(eName,fn){
        this.ee.removeListener(eName, fn);
    };

    // connect event の実行
    open(){
        this.ee.emit('connect');
    };

    // disconnect event の実行
    close(){
        this.ee.emit('disconnect');
    };

    // errを引数にとりlog出力
    error(err){
        console.log("web socket error : ",err);
    };

    // websocketで送信をする
    send(data) {
        this.ws.send(data)
    }

    // serverからmessageを受け取ったら実行
    message(e){
        try{
            // message eventの実行
            this.ee.emit("message",e.data)
        }
        catch(err){
            // error eventの実行
            this.ee.emit('error',err)
            console.log(Date().toString()+" : ",err)
        }
    }
}