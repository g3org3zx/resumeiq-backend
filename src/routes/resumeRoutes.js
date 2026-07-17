const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const validateResume = require("../validators/resumeValidator");

const {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");

// Get all resumes for logged in user
exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      owner: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: resumes.length,
      resumes,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
router.post("/", auth, validateResume, createResume);
router.get("/", auth, getResumes);
router.get("/:id", auth, getResumeById);

router.put("/:id", auth, validateResume, updateResume);

router.delete("/:id", auth, deleteResume);
module.exports = router;