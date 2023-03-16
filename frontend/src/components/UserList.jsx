import { useEffect, useState } from "react";

const UserList = () => {
  const [infos, setInfos] = useState(null);

  const getInfos = async () => {
    const res = await fetch("/getinfo", {
      method: "GET",
    });
    const { userInfos } = await res.json();

    if (userInfos.length > 0) {
      setInfos(userInfos);
    }
    console.log(userInfos);
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
                        <button className="hover:text-green-500">Edit</button>
                      </td>
                      <td className="px-4 py-3 text-lg text-gray-900">
                        <button className="hover:text-red-500">Delete</button>
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
