import { CompanyStatistics } from "../../types/companyStatistics";

interface HomePageStatsProps {
  c: CompanyStatistics;
}

export default function HomePageStats({c}: HomePageStatsProps) {
  return (
    <ul className="home-stats">
      <li className="home-stats__item">
        <span className="home-stats__value">{c.created} orders</span>
        <span className="home-stats__label home-stats__label--neutral">Create</span>
      </li>
      <li className="home-stats__item">
        <span className="home-stats__value">{c.shipping} orders</span>
        <span className="home-stats__label home-stats__label--neutral">Shipping</span>
      </li>
      <li className="home-stats__item">
        <span className="home-stats__value">{c.canceled} orders</span>
        <span className="home-stats__label home-stats__label--negative">Canceled</span>
      </li>
      <li className="home-stats__item">
        <span className="home-stats__value">{c.delivered} orders</span>
        <span className="home-stats__label home-stats__label--positive">Delivered</span>
      </li>
      <li className="home-stats__item">
        <span className="home-stats__value">{c.partialDelivered} orders</span>
        <span className="home-stats__label home-stats__label--negative">Partial delivered</span>
      </li>
      <li className="home-stats__item">
        <span className="home-stats__value">{c.notAccepted} orders</span>
        <span className="home-stats__label home-stats__label--negative">Not accepted</span>
      </li>
    </ul>
  )
}
