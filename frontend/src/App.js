import Form from "./components/Form";
import UserList from "./components/UserList";

const BASE_URL = "https://full-stack-crud-production-9122.up.railway.app";

function App() {
  return (
    <div>
      <Form BASE_URL={BASE_URL} />
      <UserList BASE_URL={BASE_URL} />
    </div>
  );
}

export default App;
