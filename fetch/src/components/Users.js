import React, { useState, useEffect } from "react";
import User from "./User";

const Users = () => {
    const [state, setState] = useState({
        users: [],
        error: null,
        isLoaded: false,
        totalPages: 0,
        page: 1
    });

    useEffect(() => fetchUsers(state.page), []);

    const fetchUsers = (page) => {
        fetch("https://reqres.in/api/users?page=" + page)
            .then(result => result.json())
            .then(
                result => setState({
                    users: result.data,
                    page: result.page,
                    totalPages: result.total_pages,
                    isLoaded: true
                }),
                error => setState({
                    error: error,
                    isLoaded: true
                })
            );
    }

    return (
        <div>
            {(() => {
                if (state.error) {
                    return (
                        <div>{state.error}</div>
                    )
                } else if (!state.isLoaded) {
                    return (
                        <div>Loading...</div>
                    )
                } else {
                    return (
                        <div>
                            <button onClick={() => fetchUsers(state.page - 1)}>Prev</button>
                            <button onClick={() => fetchUsers(state.page + 1)}>Next</button>
                            {state.users.map((user, i) =>
                            <User key={i}
                                id={user.id}
                                email={user.email}
                                firstName={user.first_name}
                                lastName={user.last_name}
                                avatar={user.avatar} />
                            )}
                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default Users;
