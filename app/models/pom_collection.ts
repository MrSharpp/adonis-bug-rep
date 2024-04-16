import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Pom from './pom.js'

import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import ProductType from './product_type.js'

export default class PomCollection extends BaseModel {
  static table = 'pomcollections'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare public_name: string

  @column()
  declare name: string

  @column()
  declare producttype_id: number

  @column()
  declare row_count: number

  @column()
  declare column_count: number

  @column()
  declare group_by_hue: number

  @column.dateTime({ autoCreate: true })
  declare created: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare modified: DateTime

  @manyToMany(() => Pom, {
    pivotTable: 'pomcollections_poms',
    pivotForeignKey: 'pomcollection_id',
    pivotRelatedForeignKey: 'pom_id',
  })
  poms!: ManyToMany<typeof Pom>

  @belongsTo(() => ProductType, {
    foreignKey: 'producttype_id',
    localKey: 'id',
  })
  productType!: BelongsTo<typeof ProductType>

  serializeExtras() {
    return {
      pomsCount: this.$extras.poms_count,
    }
  }
}
