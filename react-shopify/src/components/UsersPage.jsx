import { useEffect, useState } from "react";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        }
        catch (error) {
            setError("Failed to fetch users");
        }
        finally {
            setLoading(false);
        }
    }   

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchUsers();
    }, [])

    if (loading) {
        return <p>Loading users...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <>
            {
                users.map(user => (
                    <p key={user.id}>{user.name}</p>
                ))
            }
        </>
    )
}

export default UsersPage;   