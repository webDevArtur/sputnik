import React from 'react';
import type { IProduct, CurrencyType } from '../../types/product';
import fallbackImage from '../../assets/noImage.jpg';
import './ProductCard.css';

const CURRENCY_MAP: Record<CurrencyType, string> = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
};

const LOCALE_MAP: Record<CurrencyType, string> = {
  RUB: 'ru-RU',
  USD: 'en-US',
  EUR: 'fr-FR', 
};

export const ProductCard: React.FC<IProduct> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
  className = '',
}) => {
  const locale = LOCALE_MAP[currency];

  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: CURRENCY_MAP[currency],
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price / 100);

  const imageSrc = imageUrl || fallbackImage;

  return (
    <article className={`product-card ${className}`}>
      <img
        src={imageSrc}
        alt={title}
        className="product-image"
        loading="lazy"
        width="120"
        height="120"
      />
      
      <div className="product-details">
        <h3 className="product-title">{title}</h3>

        <p className="product-origin">Страна: {origin}</p>
        
        <p className="product-price">
          {formattedPrice}
        </p>
      </div>
    </article>
  );
};