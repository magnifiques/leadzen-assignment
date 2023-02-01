import { useEffect, useState } from "react";
import Users from "./components/Users/Users";
import ReactPaginate from "react-paginate";

function App() {
  const [userData, setUserData] = useState([]);
  const [PageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUserData(data);
    };
    getUserData();
  }, []);

  const usersPerPage = 5;
  const pagesVisited = PageNumber * usersPerPage;
  const pageCount = Math.ceil(userData.length / usersPerPage);
  const currentUsers = userData.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );

  const changePageNumber = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main className="main">
      <Users userData={currentUsers} />
      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        pageCount={pageCount}
        onPageChange={changePageNumber}
        containerClassName="paginator-button"
        activeClassName="active-button"
      />
    </main>
  );
}

export default App;
