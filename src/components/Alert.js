import React from 'react'

function Alert(props) {

    const capitialize =(word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.Alertmsg && <div>
             <div className={`alert alert-${props.Alertmsg.type} alert-dismissible fade show`}role="alert">
            <strong>{capitialize(props.Alertmsg.type)}</strong> : {props.Alertmsg.msg}
            </div>
        </div>
    )
}

export default Alert

