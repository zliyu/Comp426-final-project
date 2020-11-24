import React from "react";
let message = "whatever message??"
const Message = (message) (
    <div>
        <div className="alert alert-success" role="alert">
            <span className="glyphicon glyphicon-thumbs-up"></span>
            <span className="message">{message}</span>
        </div>
    </div>
)

export default Message;