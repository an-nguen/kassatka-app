export interface IConverter<A, B> {
  from(src: A): IConverter<A, B>
  convertTo(): B
}
