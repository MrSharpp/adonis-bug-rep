import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pom extends BaseModel {
  static table = 'poms'

  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare created: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare modified: DateTime
}
