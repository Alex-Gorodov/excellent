import { CompanyStatistics } from "../../types/companyStatistics";

interface HomePageStatsProps {
  c: CompanyStatistics;
}

export default function HomePageStats({c}: HomePageStatsProps) {
  return (
    <ul className="home-stats">
      <li className="home-stats_item">
        <span className="home-stats_value">{c.created} orders</span>
        <span className="home-stats_label home-stats_label--neutral">Create</span>
      </li>
      <li className="home-stats_item">
        <span className="home-stats_value">{c.shipping} orders</span>
        <span className="home-stats_label home-stats_label--neutral">Shipping</span>
      </li>
      <li className="home-stats_item">
        <span className="home-stats_value">{c.canceled} orders</span>
        <span className="home-stats_label home-stats_label--negative">Canceled</span>
      </li>
      <li className="home-stats_item">
        <span className="home-stats_value">{c.delivered} orders</span>
        <span className="home-stats_label home-stats_label--positive">Delivered</span>
      </li>
      <li className="home-stats_item">
        <span className="home-stats_value">{c.partialDelivered} orders</span>
        <span className="home-stats_label home-stats_label--negative">Partial delivered</span>
      </li>
      <li className="home-stats_item">
        <span className="home-stats_value">{c.notAccepted} orders</span>
        <span className="home-stats_label home-stats_label--negative">Not accepted</span>
      </li>
    </ul>
  )
}
