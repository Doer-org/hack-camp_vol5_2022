
interface IUseWebSocket {
  conn: (roomId: string) => WebSocket
  sendEvent: (ws: WebSocket, data: string) => void
  receiveEvent: (ws: WebSocket, eventFunc: (event: MessageEvent) => void) => any
  disconnect: (ws: WebSocket) => void
}

export const useWebSocket = (): IUseWebSocket => {

  // WebSocket と接続
  const conn = (roomID: string): WebSocket => {
    const URL: string = import.meta.env.VITE_WS_BASE_URL
    return new WebSocket(`${URL}/ws?room=${roomID}`)
  }

  // Event を送信
  const sendEvent = (ws: WebSocket, data: string): void => {
    // websocket が開いているとき
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(data)
      return
    }
    // websocket が接続中のとき
    if (ws.readyState === WebSocket.CONNECTING) {
      ws.addEventListener("open", () => sendEvent(ws, data))
    }
  }

  // Event を取得
  const receiveEvent = (ws: WebSocket, eventFunc): any => {
    ws.onmessage = (event) => {
      eventFunc(event)
    }
  }

  // WebSocketを閉じる
  const disconnect = (ws: WebSocket): void => {
    ws.close()
  }

  return { conn, sendEvent, receiveEvent, disconnect }
}