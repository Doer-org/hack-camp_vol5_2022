import { check, sleep } from 'k6';
import http from 'k6/http';
import { FormData } from "https://jslib.k6.io/formdata/0.0.2/index.js";
import { Rate } from 'k6/metrics';


const failRate = new Rate('failed requests');
export const options = {
  thresholds: {
    'failed requests': ['rate<0.05'], // リクエストのエラー率が5%未満
    'http_req_duration': ['p(95)<500'] // 95%のリクエストの応答時間が500msec未満
  },
};


// const API_ENDPOINT = `http://localhost:80`;
const API_ENDPOINT = `http://34.146.212.161:80`;

export default function () {
    // 1. ユーザー名とパスワードを取得
    // const { username, password } = getUser();

    const createRoomData = new FormData();
    createRoomData.append("name", "test");
    createRoomData.append("max_count", "3");

    const resCreateRoom = http.post(`${API_ENDPOINT}/room/new`, createRoomData.body(), {
        headers: { 'Content-Type': 'multipart/form-data; boundary=' + createRoomData.boundary },
        });
    check(resCreateRoom, {
        'resCreateRoom : is status 200': (r) => r.status === 200,
    });

    const { roomId, name, max_count, status, created_at } = resCreateRoom.json().data;

    const newMemberData = new FormData();
    newMemberData.append("name", "mahiro");
    newMemberData.append("question", "好きなプログラミング言語は?");

    // ユーザーデータの入力に何秒かかるか
    sleep(10)

    // userデータ作成
    const resMemberNew = http.post(`${API_ENDPOINT}/member/new?room=${roomId}`, newMemberData.body(), {
        headers: { 'Content-Type': 'multipart/form-data; boundary=' + newMemberData.boundary },
    });
    check(resMemberNew, {
        'resMemberNew : is status 200': (r) => r.status === 200,
    });

    // // room情報の取得 際リロード時
    // const resRoom = http.get(`${API_ENDPOINT}/room/${roomId}`);
    // check(resRoom, {
    //     'is status 200': (r) => r.status === 200,
    // });


    // roomのメンバー情報取得
    const resMemberAll = http.get(`${API_ENDPOINT}/member/all?room=${roomId}`);
    check(resMemberAll, {
        'resMemberAll : is status 200': (r) => r.status === 200,
    });

    // ほかのユーザー待ち
    sleep(5)

    // roomのメンバー情報取得
    const resRoomFinish = http.get(`${API_ENDPOINT}/room/finish/${roomId}`);
    check(resRoomFinish, {
        'resRoomFinish : is status 200': (r) => r.status === 200,
    });

    // イベント進行
    sleep(20)


    // イベント終了後
    // room情報の取得
    const resRoom2 = http.get(`${API_ENDPOINT}/room/${roomId}`);
    check(resRoom2, {
        'resRoom2 : is status 200': (r) => r.status === 200,
    });
    // roomのメンバー情報取得
    const resRoomFinish2 = http.get(`${API_ENDPOINT}/room/finish/${roomId}`);
    check(resRoomFinish2, {
        'resRoomFinish2 : is status 200': (r) => r.status === 200,
    });

}

// 10000, 0.001前後  = k6 run scenario.js  --vus 50000 ==> 50000*6/30s = 10000(req/s)
