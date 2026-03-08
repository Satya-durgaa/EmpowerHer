const express = require('express')
const router = express.Router()
const supabase = require('../supabaseClient')
const validateEnrollment = require('../middleware/validateEnrollment')

/*
GET /courses
*/
router.get('/courses', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')

    if (error) throw error

    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/*
POST /enroll
*/
router.post('/enroll', validateEnrollment, async (req, res) => {
  try {
    const { student_name, course_id } = req.body

    const { data, error } = await supabase
      .from('enrollments')
      .insert([{ student_name, course_id }])

    if (error) throw error

    res.json({
      message: "Enrollment successful",
      data
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/*
GET /courses/:id/enrollments
*/
router.get('/courses/:id/enrollments', async (req, res) => {
  try {
    const { id } = req.params

    const { data, error } = await supabase
      .from('enrollments')
      .select('student_name, course_id')
      .eq('course_id', id)

    if (error) throw error

    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
