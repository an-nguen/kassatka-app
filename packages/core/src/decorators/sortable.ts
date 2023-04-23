import 'reflect-metadata'

const sortableMetadataKey = Symbol('Sortable')

export function Sortable() {
  return (target: object, propertyKey: string) => {
    let properties = Reflect.getMetadata(sortableMetadataKey, target)

    if (properties) properties.push(propertyKey)
    else {
      properties = [propertyKey]
      Reflect.defineMetadata(sortableMetadataKey, properties, target)
    }
  }
}

export function getSortableClassProps(target: object) {
  return Reflect.getMetadata(sortableMetadataKey, target)
}
