import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import Layout from "../../components/Layout/Layout";

export function PageNotFound() {
  return (
    <Layout>
      <div className="not-found">
        <h1 className="title">
          Page not found
        </h1>
        <Link to={AppRoute.Root} className="button">
          Go to main
        </Link>
      </div>
    </Layout>
  )
}
