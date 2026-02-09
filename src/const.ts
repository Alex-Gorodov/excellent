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
