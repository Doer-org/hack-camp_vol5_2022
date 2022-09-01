import { EventEmitter } from "events"

interface IUseWebSocket {
  conn: (roomId: string) => WebSocket
  addEvent: (eventName: string, eventFunc) => void
  sendEvent: (ws: WebSocket, data: string) => void
}

export const useWebSocket = (): IUseWebSocket => {
  const EE = new EventEmitter()

  // WebSocket と接続
  const conn = (roomID: string): WebSocket => {
    const URL: string = import.meta.env.VITE_WS_BASE_URL
    return new WebSocket(`${URL}/ws?room=${roomID}`)
  }

  // Event を追加
  const addEvent = (eventName: string, eventFunc: any): void => {
    EE.on(eventName, eventFunc)
  }

  // Event を送信
  const sendEvent = (ws: WebSocket, data: string): void => {
    ws.send(data)
  }

  return { conn, addEvent, sendEvent }
}