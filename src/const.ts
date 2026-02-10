export enum AppRoute {
  Orders = "/excellent/Orders",
  Products = "/excellent/Products",
  Clients = "/excellent/Clients",
  Stats = "/excellent/Stats",
  Settings = "/excellent/Settings",
  Profile = "/excellent/Profile",
  Root = "/excellent",
}

export enum AuthorizationStatus {
  Unknown = 'UNKNOWN',
  NoAuth = 'NO_AUTH',
  Auth = 'AUTH',
}

export const CURRENT_DATE = new Date();

export enum Roles {
  Admin = "Admin",
  SalesRep = "Sales representative",
  Customer = "Customer"
}

export enum OrderStatuses {
  Created = "Created",
  Shipping = "Shipped",
  Canceled = "Canceled",
  Delivered = "Delivered",
  PartialDelivered = "Partial Delivered",
}

export const Titles: Record<string, string> = {
  [AppRoute.Root]: "Excellent",
  [AppRoute.Orders]: "Excellent | Orders",
  [AppRoute.Products]: "Excellent | Products",
  [AppRoute.Clients]: "Excellent | Clients",
  [AppRoute.Profile]: "Excellent | Profile",
  [AppRoute.Settings]: "Excellent | Settings",
  [AppRoute.Stats]: "Excellent | Stats",
};
