import Link from "next/link"

function Users({users}) {
  return (
    <ul>
      {users.map(user => (
        <Link key={user.id} href={`/users/${user.id}`}>
            <li className="flex justify-between p-4 mb-2 rounded-md bg-sky-900">
            <div>
                <h3 className="font-bold">{user.firstName} {user.lastName}</h3>
                <p className="text-gray-300">Email: <b>{user.email}</b></p>
                <p className="text-gray-300">Phone: <b>{user.phone}</b></p>
            </div>
            <img src={user.image} alt="porfile" className="w-24 rounded-full"/>
            </li>
        </Link>
        ))}
    </ul>
  )
}

export default Users