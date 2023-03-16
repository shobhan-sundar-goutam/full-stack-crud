const UserInfo = require("../model/userInfo");

const home = (req, res) => {
  res.send("hello world");
};

const createInfo = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!(name && email)) {
      res.status(400).send("All fields are required");
      throw new Error("All fields are required");
    }

    const userInfoExists = await UserInfo.findOne({ email });
    if (userInfoExists) {
      res.status(401).send("This email already exists");
      throw new Error("This email already exists");
    }

    const newUserInfo = await UserInfo.create({
      name,
      email,
    });

    res.status(200).json({
      success: true,
      message: "User Information created successfully",
      newUserInfo,
    });
  } catch (error) {
    console.log(error);
    console.log("Error in response");
  }
};

const getInfo = async (req, res) => {
  try {
    const userInfos = await UserInfo.find();

    if (userInfos) {
      res.status(200).json({
        success: true,
        userInfos,
      });
    }
  } catch (error) {
    console.log(error);
    console.log("Error in response");
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const editInfo = async (req, res) => {
  try {
    const userInfo = await UserInfo.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteInfo = async (req, res) => {
  try {
    const userInfo = await UserInfo.findByIdAndDelete(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      userInfo,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { home, createInfo, getInfo, editInfo, deleteInfo };
