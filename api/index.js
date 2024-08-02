const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port =8082;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose
  .connect("mongodb://localhost:27017/Employee", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect success");
  })
  .catch((error) => {
    console.log("Errorconnecting to mongoDB", error);
  });
app.listen(port, () => {
  console.log("server is running on port 8082");
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

//endpoint to register an employee
app.post("/addEmployee", async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;

    // create new Employee
    const newEmployee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });
    //save the Employee to the dataBase
    await newEmployee.save();
    //send it to the result
    res
      .status(201)
      .json({ message: "Employee saved successfully", employee: newEmployee });
  } catch (error) {
    console.log("error creating employee", error);
    res
      .status(500)
      .json({ message: "failed to add an eployee", error: error.message });
  }
});
//endpoint to fetch all the employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "failed to retrieve the employees",
        error: error.message,
      });
  }
});
