
import { useState, useEffect } from "react";
import { fetchData } from "./services/Api";

const  App=()=> {
    const [users, setUsers] = useState([]); // initial state

    useEffect(() => {
        fetchData()
            .then((data) => {
                setUsers(data); // store data in state
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name} - {user.email}
                </div>
            ))}
        </div>
    );
}


export default App;
