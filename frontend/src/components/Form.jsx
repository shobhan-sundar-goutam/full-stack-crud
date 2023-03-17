import { useState } from "react";

const Form = ({ BASE_URL }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const submitData = async () => {
    try {
      const { name, email } = input;

      if (!(name && email)) {
        return alert("Empty fields are not allowed");
      }

      const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

      if (!regEx.test(email)) {
        return alert("Invalid email");
      }

      const res = await fetch(`${BASE_URL}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        window.alert("User info created successfully");
        console.log("User info created successfully");
      }
    } catch (error) {
      window.alert(error.message);
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitData();
    setInput({ name: "", email: "" });
  };

  return (
    <form>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Create User
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={input.name}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Form;
