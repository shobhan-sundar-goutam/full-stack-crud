import Form from "./components/Form";
import UserList from "./components/UserList";
import { Toaster } from "react-hot-toast";

const BASE_URL = 'https://full-stack-crud-yzdh.onrender.com';

function App() {
  return (
    <div>
      <Form BASE_URL={BASE_URL} />
      <UserList BASE_URL={BASE_URL} />
      <Toaster />
    </div>
  );
}

export default App;
