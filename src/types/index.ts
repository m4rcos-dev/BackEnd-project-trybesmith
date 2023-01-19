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

export type TOrders = {
  id?: number,
  userId: number,
  productsIds: number
};

export type TOrderCreated = {
  id?: number,
  userId: number,
  productsIds: number[]
};

export type TCurrentUser = {
  currentUser: {
    id: number,
    username: string,
    iat: number,
    exp: number
  }
} & TOrderCreated;
