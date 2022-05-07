import UserCard from "./UserCard";

function Users({ data, onDelete }) {
  return (
    <div>
      <div className="card">
        {data.map((user) => (
          <UserCard
            user={user}
            onDelete={onDelete}
            //   key={user.id}
            //   email={user.email}
            //   firstName={user.first_name}
            //   lastName={user.last_name}
            //   avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
}
export default Users;
