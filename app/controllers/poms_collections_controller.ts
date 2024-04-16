// import type { HttpContext } from '@adonisjs/core/http'

import PomCollection from '#models/pom_collection'

export default class PomsCollectionsController {
  index() {
    return PomCollection.query()
      .withCount('poms')
      .preload('productType', async (query) => query.select('name'))
  }
}
