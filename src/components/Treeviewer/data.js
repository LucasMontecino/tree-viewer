async function fetchData() {
  try {
    const data = [];
    const response = await fetch("http://localhost:3001/treeviewer");
    const result = await response.json();

    data.push(...result);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const data = await fetchData();

export default data;
