import React from "react";

const User = (props) => {
    const { id, email, firstName, lastName, avatar } = props;

    return (
        <p>
            <img src={avatar} alt="" /><br />
            <b>{firstName} {lastName} (id: {id})</b><br />
            <a href="mailto:{email}">{email}</a>
        </p>
    );
}

export default User;
