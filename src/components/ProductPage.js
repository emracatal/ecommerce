import React from 'react'
import ProductListHeader from './ProductListHeader'

export default function ProductPage() {
  return (
    <>
    <ProductListHeader />
    <div className="flex justify-center max-w-[1440px]">
        <div className="container bg-verylightgray3 flex justify-start items-center max-w-[1440px] min-h-[92px] px-10">
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i class="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="">Shop</h6>
          </div>
        </div>
      </div>
    </>
  )
}
