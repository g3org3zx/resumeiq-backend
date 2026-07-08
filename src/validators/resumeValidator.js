const { body, validationResult } = require("express-validator");

const validateResume = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("skills")
    .optional()
    .isArray()
    .withMessage("Skills must be an array"),

  body("experience")
    .optional()
    .isArray()
    .withMessage("Experience must be an array"),

  body("education")
    .optional()
    .isArray()
    .withMessage("Education must be an array"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

module.exports = validateResume;