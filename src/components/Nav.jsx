function Nav({ className }) {
  return (
    <nav className={className}>
      <h2>welcome</h2>
      <div>
        <form>
          <label htmlFor="username" style={{ display: "none" }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          ></input>
          <label htmlFor="password" style={{ display: "none" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          ></input>
          <button type="submit">Login</button>
          <button className="profile-btn">Profile</button>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
