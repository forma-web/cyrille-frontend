export type TLoginValues = {
  email: string;
  password: string;
};

export type TRegisterValues = TLoginValues & {
  name: string;
};
