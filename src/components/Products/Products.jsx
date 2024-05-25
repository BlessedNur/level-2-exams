"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./Products.module.css";
import Image from "next/image";
import { productContext } from "@/context/ApiContext";
import { useRouter } from "next/navigation";

function Products() {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useContext(productContext);
  const navigate = useRouter();
  console.log(selected);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  console.log(products);

  useEffect(() => {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((card) => {
      const boxx = card.querySelector(".box");
      card.addEventListener("mouseover", () => {
        boxx.classList.add("hovered");
      });
      card.addEventListener("mouseleave", () => {
        boxx.classList.remove("hovered");
      });
    });
  });

  return (
    <main className={style.main}>
      <h1>Explore Inspiring Designs</h1>
      <div className={style.products}>
        {products.map((product) => (
          <div
            className={`${style.product} `}
            onClick={() => {
              navigate.push("/details");
              setSelected(product);
            }}
            key={product._id}
          >
            <div className={`${style.imageBox} boxes`}>
              <Image
                alt={"image"}
                src={product["product-image"]}
                width={300}
                height={300}
                alt={product.name}
                className={style.productImage}
              />
              <div className={`${style.desc} box`}>
                <p>{product.description.slice(0, 12)}...</p>
                <div className={style.rightD}>
                  <div className={style.fav}>
                    <i class="fa-regular fa-bookmark" aria-hidden="true"></i>
                  </div>
                  <div className={style.liking}>
                    <i class="fa-regular fa-heart" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.details}>
              <div className={style.leftD}>
                <div className={style.profileImageBox}>
                  <Image
                    alt={"image"}
                    src={"/images/blank-profile-picture-973460_960_720.webp"}
                    width={10}
                    height={10}
                    className={style.profileImage}
                  />
                </div>
                <h3>{product.producer}</h3>
                <div className={style.pro}>
                  {product.likes < 120 ? "PRO" : "TEAM"}
                </div>
              </div>
              <div className={style.rightD}>
                <div className={style.likes}>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                  <p>{product.likes}</p>
                </div>
                <div className={style.views}>
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  <p>{product.views}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
