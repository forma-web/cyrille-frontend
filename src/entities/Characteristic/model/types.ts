type TCharacteristicProperty<T> =
  | string
  | (() => string | number)
  | ((original: T) => string | number);

export type TCharacteristic<T> = {
  title: string;
  value: TCharacteristicProperty<T>;
  caption: TCharacteristicProperty<T>;
};
