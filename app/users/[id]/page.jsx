async function getUser(id) {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();
  return data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="p-10 rounded-md bg-sky-900">
      <img src={user.image} alt="" className="m-auto my-4 w-28" />
      <h3 className="text-3xl font-bold">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-gray-300">
        Email: <b>{user.email}</b>
      </p>
      <p className="text-gray-300">
        Phone: <b>{user.phone}</b>
      </p>
    </div>
  );
}

export default UserPage;
