const express = require('express')
const profilesService = require('./profiles-service')

const profilesRouter = express.Router()

profilesRouter
  .route('/profiles')
  .get((req, res, next) => {
    profilesService.getAllProfiles(req.app.get('db'))
      .then(profiles => {
        res.json(profiles)
      })
      .catch(next)
  })

profilesRouter
  .route('/:profile_id')
  .all(checkProfileExists)
  .get((req, res) => {
    res.json(ProfilesService.serializeProfiles(res.product))
  })

async function checkProfileExists(req, res, next) {
  try {
    const product = await ProfilesService.getById(
      req.app.get('db'),
      req.params.profile_id
    )

    if (!profile)
      return res.status(404).json({
        error: `Profile doesn't exist`
      })

    res.profile = profile
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = profilesRouter