function Dashboard({ user }) {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Dashboard
