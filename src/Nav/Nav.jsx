
import { Link } from "react-router-dom";

const Links = [
  { name: "HOME", link: "/" },
  { name: "SUBJECT", link: "/subject" },
];

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Subject Review</h1>
        <ul className="flex space-x-4">
          {Links.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className="text-white hover:text-gray-400 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
