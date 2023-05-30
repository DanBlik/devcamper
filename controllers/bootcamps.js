// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access public
export const getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'})
}

// @desc Get bootcamp
// @route GET /api/v1/bootcamps/:id
// @access public
export const getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}`})
}

// @desc Create new bootcamp
// @route POST /api/v1/bootcamps/
// @access public
export const createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg:  'Create bootcamp'})
}

// @desc Update new bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access public
export const updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`})
}

// @desc Delete new bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access public
export const deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`})
}