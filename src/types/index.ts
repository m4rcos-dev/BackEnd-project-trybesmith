export type TProducts = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type TUsers = {
  id?: number,
  username: string,
  vocation: string,
  level?: number,
  password: string,
};

export type TLogin = {
  username: string,
  password: string,
};
