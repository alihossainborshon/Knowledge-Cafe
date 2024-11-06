import "./index.css";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import Boolmarks from "./Components/Bookmarks/Boolmarks";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex w-10/12 mx-auto">
        <Blogs></Blogs>
        <Boolmarks></Boolmarks>
      </div>
    </>
  );
}

export default App;
