import Users from "./Users";

function UserCard({ user, onDelete }) {
  const { first_name, last_name, email, avatar } = user;
  return (
    <div>
      <section>
        <p>
          {first_name} {last_name}
        </p>
        <p>{email}</p>
        <img src={avatar} alt="user photo" />
        <button onClick={() => onDelete(user)}>Dismiss</button>
      </section>
    </div>
  );
}
export default UserCard;
