import React, { useState } from "react";

function Users() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="Users">
      <h1>Welcome to my app!</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      {isLoggedIn ? (
        <h2>Hello you!</h2>
      ) : (
        <div>
          <h2>Please log in to continue</h2>
        </div>
      )}
    </div>
  );
}

export default Users;
