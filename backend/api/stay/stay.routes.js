const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
// const { log } = require('../../middlewares/logger.middleware')
const { getStays, getStayById, addStay, updateStay, removeStay,  getLabels } = require('./stay.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
// router.use(requireAdmin)

router.get('/', getStays)
router.get('/label', getLabels)
router.get('/:id', getStayById)
// router.post('/', addStay)
// router.put('/:id', updateStay)
// router.delete('/:id', removeStay)
router.post('/', requireAuth, requireAdmin, addStay)
router.put('/:id', requireAuth, requireAdmin, updateStay)
router.delete('/:id', requireAuth, requireAdmin, removeStay)

module.exports = router