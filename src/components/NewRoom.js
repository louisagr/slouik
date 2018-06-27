import React from 'react'

class NewRoom extends React.Component {
    render () {
        return (
            <div className="new-room">
                <form>
                    <input
                        type="text" 
                        placeholder="NewRoom" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>
        )
    }
}

export default NewRoom