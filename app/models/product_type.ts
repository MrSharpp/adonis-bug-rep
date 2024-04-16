import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProductType extends BaseModel {
  static table = 'producttypes'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare admin_menu_name: string
}
