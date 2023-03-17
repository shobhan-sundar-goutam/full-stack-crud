import { useEffect, useState } from "react";

const UserList = ({ BASE_URL }) => {
  const [infos, setInfos] = useState(null);

  const getInfos = async () => {
    const res = await fetch(`${BASE_URL}/getinfo`, {
      method: "GET",
    });
    const { userInfos } = await res.json();

    setInfos(userInfos);
  };

  const editInfo = async (id) => {
    const name = prompt("Enter the updated name:-");
    const email = prompt("Enter the updated email:-");

    if (!(name && email)) {
      return alert("Empty fields are not allowed");
    }

    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (!regEx.test(email)) {
      return alert("Invalid email");
    }

    const res = await fetch(`${BASE_URL}/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    console.log(data);
  };

  const deleteInfo = async (id) => {
    const res = await fetch(`${BASE_URL}/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getInfos();
  }, [infos]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Users
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {infos &&
                infos.map((info) => {
                  const { _id, name, email } = info;
                  return (
                    <tr key={_id}>
                      <td className="px-4 py-3">{name}</td>
                      <td className="px-4 py-3">{email}</td>
                      <td className="px-4 py-3">
                        <button
                          className="hover:text-green-500"
                          onClick={() => editInfo(_id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-4 py-3 text-lg text-gray-900">
                        <button
                          className="hover:text-red-500"
                          onClick={() => deleteInfo(_id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserList;
