'use client'
import Chat from "../components/Chat/Chat"
export default function Chatroom() {
    const name = 'YourName';
    const room = 'YourRoom';
    return (
    <main className="w-full h-full backgroundColor">
        <Chat location={{name,room}}></Chat>
    </main>
    )
}
