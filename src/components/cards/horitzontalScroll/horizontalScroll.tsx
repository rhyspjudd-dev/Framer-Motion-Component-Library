import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import "./styles.scss";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

export default function HorizontalScrollCards() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users.slice(0, 9))) // Get the first 9 users
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <section id="horizontal-scroll-cards">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        {users.map(user => (
          <li key={user.id}>
            <div className="card">
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <div className="card-info">
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
