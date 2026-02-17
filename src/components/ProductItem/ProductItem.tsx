import { useEffect, useRef } from "react";
import { Product } from "../../types/product";

interface ProductItemProps {
  product: Product;
  onClose: () => void;
}

export function ProductItem({product, onClose}: ProductItemProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <div className="product__wrapper">
      <div className="product" ref={ref}>
        {product.name}
      </div>
    </div>
  )
}
