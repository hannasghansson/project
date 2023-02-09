// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Breadcrumb = () => {
//   const location = useLocation();
//   return (
//     <nav>
//       <Link
//         to="/"
//         className={
//           location.pathname === "/"
//             ? "breadcrumb-active"
//             : "breadcrumb-not-active"
//         }
//       >
//         Home
//       </Link>
//       <Link
//         to="/about"
//         className={
//           location.pathname === "/"
//             ? "breadcrumb-active"
//             : "breadcrumb-not-active"
//         }
//       >
//         About
//       </Link>
//     </nav>
//   );
// };

// export default Breadcrumb;

import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const routes = [
  { path: "/home", breadcrumb: "Example 1" },
  { path: "/about", breadcrumb: "About" },
];

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <nav>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.url} to={match.url}>
          {breadcrumb} /
        </Link>
      ))}
    </nav>
  );
};

export default Breadcrumb;
