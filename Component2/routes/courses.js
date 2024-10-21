const express = require('express')
const router = express.Router()
const Course = require('../models/course')


router.get('/', async (req, res) => {
    try{
        const courses = await Course.find()
        res.json(courses)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


router.get('/:id', getCourse, async (req, res) => {
    res.json(res.course);
});


router.post('/', async (req, res) => {
    const newCourse = new Course({
      title: req.body.title,
      description: req.body.description,
      instructor: req.body.instructor,
      duration: req.body.duration,
      category: req.body.category,
    });

    try {
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});


router.put('/:id', getCourse, async (req, res) => {
    if (req.body.title != null) {
        res.course.title = req.body.title;
      }

      if (req.body.description != null) {
        res.course.description = req.body.description;
      }

      if (req.body.instructor != null) {
        res.course.instructor = req.body.instructor;
      }
      if (req.body.duration != null) {
        res.course.duration = req.body.duration;
      }
      if (req.body.category != null) {
        res.course.category = req.body.category;
      }

      try {
        const updatedCourse = await res.course.save();
        res.json(updatedCourse);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
});


router.delete('/:id', getCourse, async (req, res) => {

    try {
        await res.course.deleteOne();
        res.json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Middleware function to get a single course by ID
async function getCourse(req, res, next) {
    let course;
    try {
        course = await Course.findById(req.params.id);
        if (course == null) {
            return res.status(404).json({ message: 'Cannot find course' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.course = course;
    next();
  }

module.exports = router

