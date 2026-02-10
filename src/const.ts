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

export enum Roles {
  Admin = "Admin",
  SalesRep = "Sales representative",
  Customer = "Customer"
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
