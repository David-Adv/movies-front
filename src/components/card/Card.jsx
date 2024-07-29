import React from 'react'

export const Card = () => {
  return (
//     <div className="card bg-base-100 w-96 shadow-xl">
//   <figure className="px-10 pt-10">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" 
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions">  
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

<>
<div class="product">
											<div class="product-img">
												{/* <img src="" height="365px" alt=""> */}
												<div class="product-label">
													<span class="sale"></span>
													<span class="new"></span>
												</div>
											</div>
											<div class="product-body">
												<p class="product-category">Kids</p>
												<h3 class="product-name"><a href="#">Silly jokes for kids</a></h3>
												<h4 class="product-price">$12.0 <del class="product-old-price"></del></h4>
												<div class="product-rating">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</div>
												<div class="product-btns">
													
													<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
												</div>
											</div>
											<div class="add-to-cart">
												<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
</>
  )
}
