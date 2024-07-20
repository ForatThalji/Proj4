// import React, { useState } from "react";
// import { Check, CreditCard } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// const PayPalIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="w-8 h-8"
//   >
//     <path d="M7 11C7 11 7.5 14.5 10 14.5C13.5 14.5 15 11 15 11C15 11 14.5 7.5 12 7.5C8.5 7.5 7 11 7 11Z" />
//     <path d="M10.5 16.5H8.5L7.5 20.5H9.5L10.5 16.5Z" />
//     <path d="M12 4.5L11 8.5C11 8.5 11.5 9.5 13.5 9.5C16.5 9.5 18 6.5 18 6.5C18 6.5 17 3.5 14 3.5C11 3.5 12 4.5 12 4.5Z" />
//   </svg>
// );

// const CheckOut = () => {
//   const [paymentMethod, setPaymentMethod] = useState("credit-card");
//   const [couponCode, setCouponCode] = useState("");
//   const [cardInfo, setCardInfo] = useState({
//     cardNumber: "",
//     cardName: "",
//     expiryDate: "",
//     cvv: "",
//   });
//   const navigate = useNavigate();
//   const [orderDetails] = useState({
//     items: [
//       { name: "Product 1", price: 19.99, quantity: 1 },
//       { name: "Product 2", price: 29.99, quantity: 2 },
//     ],
//     subtotal: 79.97,
//     tax: 8.0,
//     shipping: 5.99,
//     total: 93.96,
//   });

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   const handleCouponCodeChange = (e) => {
//     setCouponCode(e.target.value);
//   };

//   const handleCardInfoChange = (e) => {
//     setCardInfo({
//       ...cardInfo,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Checkout submitted", {
//       paymentMethod,
//       couponCode,
//       cardInfo,
//       orderDetails,
//     });
//     navigate("/Booking");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="md:flex">
//             <div className="md:w-2/3 p-8">
//               <h1 className="text-3xl font-bold mb-6">Checkout</h1>

//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
//                 <div className="space-y-4">
//                   <label className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
//                     <input
//                       type="radio"
//                       className="form-radio text-blue-500"
//                       checked={paymentMethod === "credit-card"}
//                       onChange={() => handlePaymentMethodChange("credit-card")}
//                     />
//                     <CreditCard className="w-8 h-8 ml-4 text-gray-600" />
//                     <span className="ml-4 font-medium">Credit Card</span>
//                   </label>
//                   <label className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
//                     <input
//                       type="radio"
//                       className="form-radio text-blue-500"
//                       checked={paymentMethod === "paypal"}
//                       onChange={() => handlePaymentMethodChange("paypal")}
//                     />
//                     <PayPalIcon />
//                     <span className="ml-4 font-medium">PayPal</span>
//                   </label>
//                 </div>
//               </div>

//               {paymentMethod === "credit-card" && (
//                 <div className="mb-8 space-y-4">
//                   <h2 className="text-xl font-semibold mb-4">
//                     Credit Card Information
//                   </h2>
//                   <div>
//                     <label
//                       htmlFor="cardNumber"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Card Number
//                     </label>
//                     <input
//                       type="text"
//                       id="cardNumber"
//                       name="cardNumber"
//                       value={cardInfo.cardNumber}
//                       onChange={handleCardInfoChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="1234 5678 9012 3456"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="cardName"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Name on Card
//                     </label>
//                     <input
//                       type="text"
//                       id="cardName"
//                       name="cardName"
//                       value={cardInfo.cardName}
//                       onChange={handleCardInfoChange}
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div className="flex space-x-4">
//                     <div className="flex-1">
//                       <label
//                         htmlFor="expiryDate"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Expiry Date
//                       </label>
//                       <input
//                         type="text"
//                         id="expiryDate"
//                         name="expiryDate"
//                         value={cardInfo.expiryDate}
//                         onChange={handleCardInfoChange}
//                         className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="MM/YY"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <label
//                         htmlFor="cvv"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         CVV
//                       </label>
//                       <input
//                         type="text"
//                         id="cvv"
//                         name="cvv"
//                         value={cardInfo.cvv}
//                         onChange={handleCardInfoChange}
//                         className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="123"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Have a coupon?</h2>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     value={couponCode}
//                     onChange={handleCouponCodeChange}
//                     placeholder="Enter coupon code"
//                     className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
//                     Apply
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
//               >
//                 Place Order
//               </button>
//             </div>

//             <div className="md:w-1/3 bg-gray-50 p-8">
//               <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//               <div className="space-y-4">
//                 {orderDetails.items.map((item, index) => (
//                   <div key={index} className="flex justify-between">
//                     <span>
//                       {item.name} x{item.quantity}
//                     </span>
//                     <span>${(item.price * item.quantity).toFixed(2)}</span>
//                   </div>
//                 ))}
//                 <div className="border-t pt-4">
//                   <div className="flex justify-between">
//                     <span>Subtotal</span>
//                     <span>${orderDetails.subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Tax</span>
//                     <span>${orderDetails.tax.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Shipping</span>
//                     <span>${orderDetails.shipping.toFixed(2)}</span>
//                   </div>
//                 </div>
//                 <div className="border-t pt-4">
//                   <div className="flex justify-between font-semibold text-lg">
//                     <span>Total</span>
//                     <span>${orderDetails.total.toFixed(2)}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;
/////////////
import React, { useState } from "react";
import { Check, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PayPalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M7 11C7 11 7.5 14.5 10 14.5C13.5 14.5 15 11 15 11C15 11 14.5 7.5 12 7.5C8.5 7.5 7 11 7 11Z" />
    <path d="M10.5 16.5H8.5L7.5 20.5H9.5L10.5 16.5Z" />
    <path d="M12 4.5L11 8.5C11 8.5 11.5 9.5 13.5 9.5C16.5 9.5 18 6.5 18 6.5C18 6.5 17 3.5 14 3.5C11 3.5 12 4.5 12 4.5Z" />
  </svg>
);

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [couponCode, setCouponCode] = useState("");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const navigate = useNavigate();
  const [orderDetails] = useState({
    items: [
      { name: "Product 1", price: 19.99, quantity: 1 },
      { name: "Product 2", price: 29.99, quantity: 2 },
    ],
    subtotal: 79.97,
    tax: 8.0,
    shipping: 5.99,
    total: 93.96,
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleCardInfoChange = (e) => {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // تخزين معلومات الحجز في sessionStorage
    sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    sessionStorage.setItem("paymentMethod", paymentMethod);
    sessionStorage.setItem("cardInfo", JSON.stringify(cardInfo));
    sessionStorage.setItem("couponCode", couponCode);

    console.log("Checkout submitted", {
      paymentMethod,
      couponCode,
      cardInfo,
      orderDetails,
    });
    navigate("/Booking");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold mb-6">Checkout</h1>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                    <input
                      type="radio"
                      className="form-radio text-blue-500"
                      checked={paymentMethod === "credit-card"}
                      onChange={() => handlePaymentMethodChange("credit-card")}
                    />
                    <CreditCard className="w-8 h-8 ml-4 text-gray-600" />
                    <span className="ml-4 font-medium">Credit Card</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                    <input
                      type="radio"
                      className="form-radio text-blue-500"
                      checked={paymentMethod === "paypal"}
                      onChange={() => handlePaymentMethodChange("paypal")}
                    />
                    <PayPalIcon />
                    <span className="ml-4 font-medium">PayPal</span>
                  </label>
                </div>
              </div>

              {paymentMethod === "credit-card" && (
                <div className="mb-8 space-y-4">
                  <h2 className="text-xl font-semibold mb-4">
                    Credit Card Information
                  </h2>
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardInfo.cardNumber}
                      onChange={handleCardInfoChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cardName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={cardInfo.cardName}
                      onChange={handleCardInfoChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label
                        htmlFor="expiryDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={cardInfo.expiryDate}
                        onChange={handleCardInfoChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={cardInfo.cvv}
                        onChange={handleCardInfoChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Have a coupon?</h2>
                <div className="flex">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={handleCouponCodeChange}
                    placeholder="Enter coupon code"
                    className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Place Order
              </button>
            </div>

            <div className="md:w-1/3 bg-gray-50 p-8">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${orderDetails.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${orderDetails.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${orderDetails.shipping.toFixed(2)}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;