import { Link, useLocation, useNavigate } from "react-router-dom";

const SmoothScrollLink = ({ to, children, ...props }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (pathname === to) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  return (
    <Link className="link" to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
