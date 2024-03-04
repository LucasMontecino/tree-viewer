import TreeViewer from "./components/Treeviewer";
import data from "./components/Treeviewer/data";

function App() {
  console.log(data);
  return (
    <>
      <TreeViewer data={data} />
    </>
  );
}

export default App;
