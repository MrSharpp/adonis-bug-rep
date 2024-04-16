// import type { HttpContext } from '@adonisjs/core/http'

import Pom from '#models/pom'

export default class PomsController {
  index() {
    return Pom.all()
  }
}
