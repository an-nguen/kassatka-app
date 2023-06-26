export interface IConverter<A, B> {
  convert(src: A): B;
}
