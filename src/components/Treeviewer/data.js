async function fetchData() {
  const data = [];
  const response = await fetch("http://localhost:3001/treeviewer");
  const result = await response.json();

  data.push(...result);
  return data;
}

const data = await fetchData();

export default data;
