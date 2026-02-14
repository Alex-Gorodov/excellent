import { CompanyStatistics } from "./companyStatistics";
import { User } from "./user";

export type Company = {
  id: string;
  name: string;
  customers: User[];
  stats: CompanyStatistics;
}
