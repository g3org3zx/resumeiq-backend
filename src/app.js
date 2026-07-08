const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const authRoutes = require("./routes/authRoutes");

const resumeRoutes = require("./routes/resumeRoutes");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/resumes", resumeRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ResumeIQ API Running"
  });
});

module.exports = app;