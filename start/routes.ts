/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PomsCollectionsController = () => import('#controllers/poms_collections_controller')
const PomsController = () => import('#controllers/poms_controller')
import router from '@adonisjs/core/services/router'
import swagger from '#config/swagger'
import AutoSwagger from 'adonis-autoswagger'

// returns swagger in YAML
router.get('/swagger-yaml', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

// Renders Swagger-UI and passes YAML-output of /swagger
router.get('/swagger', async () => {
  return AutoSwagger.default.ui('/swagger-yaml', swagger)
})

// Renders Scalar-UI
router.get('/docs', async () => {
  return AutoSwagger.default.scalar('/swagger-yaml')
})

router.resource('poms/collections', PomsCollectionsController)
router.resource('poms', PomsController)
