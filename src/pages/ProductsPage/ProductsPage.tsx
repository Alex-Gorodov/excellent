import { ReactComponent as Search } from "../../assets/img/icons/search.svg";
import { InputField } from "../../components/InputField/InputField";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";

export function ProductsPage() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Layout>
      <div className="section">
        <div className="section_header">
          <div className="products_search-wrapper">
            <h1 className="title">Products</h1>
            <InputField className="products" id={"products-search"} name="Search" label={""} type={"text"} value={searchValue} placeholder="Search" disabled={false} icon={<Search/>} onChange={(e) => setSearchValue(e.target.value)}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
