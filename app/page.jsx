import Users from "@/components/Users";

async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users;
}

async function HomePage() {

  const users = await fetchUsers();

  return (
    <body>
      <Users users={users} />
    </body>    
  )
}

export default HomePage