import { ReactComponent as Search } from "../../assets/img/icons/search.svg";
import { ReactComponent as Filters } from "../../assets/img/icons/filters.svg";
import { ReactComponent as Upload } from "../../assets/img/icons/upload.svg";
import { InputField } from "../../components/InputField/InputField";
import Layout from "../../components/Layout/Layout";
import { useEffect, useRef, useState } from "react";
import { CustomCheckbox } from "../../components/CustomCheckbox/CustomCheckbox";
import { ProductTypes } from "../../const";
import { products } from "../../assets/mocks/products";
import { ItemWithImage } from "../../components/ItemWithImage/ItemWithImage";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { Product } from "../../types/product";

export function ProductsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [isFiltersOpened, setFiltersOpened] = useState(false);
  const [isOutOfStockVisible, setOutOfStockVisible] = useState(false);
  const [openedProduct, setOpenedProduct] = useState<Product | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        formRef.current &&
        !formRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setFiltersOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setFiltersOpened(false);
      };

      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEsc);
      };
  }, []);

  return (
    <Layout>
      <div className="section">
        <div className="section__header products__header">
          <div className="products__search-wrapper">
            <h1 className="title products__title">Products</h1>
            <InputField className="products" id={"products-search"} name="Search" label={""} type={"text"} value={searchValue} placeholder="Search" disabled={false} icon={<Search/>} onChange={(e) => setSearchValue(e.target.value)}/>
            <div className="products__filters">
              <button className="button button--secondary button--with-icon" onClick={() => setFiltersOpened(!isFiltersOpened)} ref={buttonRef}>
                <Filters/>
                <span>Filters</span>
              </button>
              {
                isFiltersOpened
                &&
                <form className="products__filters-form" ref={formRef}>
                  <label className="products__toggler" htmlFor="out-of-stock">
                    <span>Out of stock</span>
                    <input className="visually-hidden" type="checkbox" name="out-of-stock" id="out-of-stock" onChange={() => setOutOfStockVisible(!isOutOfStockVisible)}/>
                    <span className={`toggler ${isOutOfStockVisible ? 'toggler--active' : ''}`}>
                      <span className="toggler__pin"></span>
                    </span>
                  </label>
                  <label className="filters-form__input" htmlFor="category-search">
                    <span>Category</span>
                    <input className="filters-form__category-search" placeholder="Enter category" type="text" name="category-search" id="category-search" />
                  </label>
                  <div className="filters-form__category-list">
                    {
                      ProductTypes.map((t) => {
                        return (

                          <CustomCheckbox label={t}/>
                        )
                      })
                    }
                  </div>
                  <div className="filters-form__buttons-wrapper">
                    <button className="button" type="submit">Save</button>
                    <button className="button button--secondary" type="reset">Reset</button>
                  </div>
                </form>
              }
            </div>
          </div>
          <div className="products__buttons-wrapper">
            <button className="button button--with-icon">
              <Upload/>
              <span>Import product list</span>
            </button>
            <button className="button button--secondary">Add new product</button>
          </div>
        </div>
        <div className="table">
          <div className="table__header table__line table__line--products">
            <span>SKU</span>
            <span>Product name</span>
            <span>In stock</span>
            <span>Unit type</span>
            <span>Price</span>
            <span>Description</span>
            {/* <span>7</span>
            <span>8</span>
            <span>9</span> */}
          </div>
            {
              products.map((p, index) => {
                return (
                  <div key={p.id} className="table__line table__line--products" onClick={() => setOpenedProduct(p)} style={{ pointerEvents: openedProduct ? 'none' : 'all'}}>
                    <p>
                      {index + 1}
                    </p>
                    <ItemWithImage image={p.image} text={p.name}/>
                    <p>
                      {p.stock}
                    </p>
                    <p>
                      {p.unit}
                    </p>
                    <p>
                      {p.price}
                    </p>
                    <p>
                      {p.description}
                    </p>
                  </div>
                )
              })
            }
        </div>
        {
          openedProduct
          &&
          <ProductItem product={openedProduct} onClose={() => setOpenedProduct(null)}/>
        }
      </div>
    </Layout>
  )
}
