"use client";

import Link from "next/link";

export default function Product({ product }) {
  const ages = [1, 3, 6, 9, 12, 18, 24, 36, 48, 60, 72];
  const randomIndex = Math.floor(Math.random() * ages.length);
  const months = ages[randomIndex];
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const ratings = [3, 4, 5];
  const randomIndexStars = Math.floor(Math.random() * ratings.length);
  const starEmoji = "⭐️";

  return (
    <>
      <Link
        href={`/product/${product?.id}`}
        className="max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto"
      >
        {product?.url ? (
          <img className="rounded cursor-pointer" src={product.url + "/190"} />
        ) : null}

        <div className="pt-2 px-1">
          <div className="font-semibold text-[15px] hover:underline cursor-pointer">
            {product?.title}
          </div>

          <div className="font-extrabold">
            ${(product?.price / 100).toFixed(2)}
          </div>

          <div className="relative flex items-center text-[12px] text-gray-500">
            <div className="line-through">
              ${((product?.price * 1.2) / 100).toFixed(2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
          <p style={{ fontSize: "12px" }}>
            {" "}
            Ratings
            {starEmoji.repeat(ratings[randomIndexStars])}
          </p>
          <p style={{ fontSize: "12px" }}>
            📅 {years > 0 ? `${years} Year${years === 1 ? "" : "s"}` : ""}{" "}
            {remainingMonths > 0
              ? `${remainingMonths} Month${remainingMonths === 1 ? "" : "s"}`
              : ""}{" "}
            Old
          </p>
        </div>
      </Link>
    </>
  );
}
