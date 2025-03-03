import axios from 'axios'
import { useState } from 'react'

const ChatInput = ({ user, clickedUser, getUsersMessages, getClickedUsersMessages }) => {
    const [textArea, setTextArea] = useState("")
    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id

    const addMessage = async () => {
        const message = {
            timestamp: new Date().toISOString(),
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        }

        try {
            await axios.post('http://localhost:8000/message', { message })
            getUsersMessages()
            getClickedUsersMessages()
            setTextArea("")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="chat-input">
            <textarea value={""} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="secondary-button" onClick={addMessage}>Submit</button>
        </div>
    )
}

export default ChatInput