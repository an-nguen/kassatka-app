export interface IConverter<A, B> {
  from(obj: A): IConverter<A, B>
  convertTo(): B
}
