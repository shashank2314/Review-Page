import { useState } from "react";
import { SlGraph } from "react-icons/sl";
import { FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import { products } from "../data";

export default function Review() {
    const date = new Date();

    const month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
    const year = date.getFullYear();
    const [currentMonth, setcurrentMonth] = useState(`${year}-${month}`)
    const [totalReview, setTotalReview] = useState("10.0k");
    const [AverageRating, setAverageRating] = useState("4.0");
    const [increment, setIncrement] = useState("21");
    return (
        <div className="w-[98vw] min-h-screen px-20 py-10 flex flex-col gap-5">
            {/* heading and filter */}
            <div className="w-full flex justify-between">
                <div className="text-4xl font-bold">Reviews</div>
                <div className="p-2 rounded-md shadow-md font-semibold">
                    March 2021 - February 2022
                </div>
            </div>
            {/* description */}
            <div className="w-full flex justify-between">
                <div className="flex flex-col items-start gap-2">
                    <div className="text-xl font-semibold"> Total Reviews</div>
                    <div className="text-4xl font-bold flex gap-4 items-center">{totalReview}<span className="text-sm bg-green-300 px-1 h-[70%] flex items-center rounded-lg gap-1">{increment}%<SlGraph className="text-sm" /></span></div>
                    <div className="text-lg text-gray-600">Growth in review on this year</div>
                </div>
                <div className="w-[2px] h-[100px] bg-gray-600"></div>
                <div className="flex flex-col items-start gap-2">
                    <div className="text-xl font-semibold">Average Rating</div>
                    <div className="text-4xl font-bold flex gap-4 items-center">{AverageRating}
                        <div className="flex gap-2"><ReactStars
                            count={5}
                            value={AverageRating}
                            size={25}
                            edit={false}
                            activeColor="#ffd700"
                            emptyIcon={<FaStar />}
                            fullIcon={<FaStar />}
                        /></div>
                    </div>
                    <div className="text-lg text-gray-600">Average Rating on this Year</div>
                </div>
                <div className="w-[2px] h-[100px] bg-gray-600"></div>
                <div className="flex">
                    <ul className="list-disc flex flex-col">
                        <li className="flex justify-start items-center gap-2">
                            <span>5</span>
                            <div className="w-[200px] h-2 bg-green-600 rounded-md"></div>
                            <span>2.0k</span>
                        </li>
                        <li className="flex justify-start items-center gap-2">
                            <span>4</span>
                            <div className="w-[160px] h-2 bg-pink-600 rounded-md"></div>
                            <span>1.0k</span>
                        </li>
                        <li className="flex justify-start items-center gap-2">
                            <span>3</span>
                            <div className="w-[120px] h-2 bg-yellow-600 rounded-md"></div>
                            <span>500</span>
                        </li>
                        <li className="flex justify-start items-center gap-2">
                            <span>2</span>
                            <div className="w-[80px] h-2 bg-blue-600 rounded-md"></div>
                            <span>200</span>
                        </li>
                        <li className="flex justify-start items-center gap-2">
                            <span>1</span>
                            <div className="w-[40px] h-2 bg-orange-600 rounded-md"></div>
                            <span>0k</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-[100%] h-[2px] bg-gray-600"></div>
            {/* Reviews */}
            <div className="flex flex-col items-center w-full">
                {
                    products.map((product) => (
                        <div className="flex flex-col items-center w-full gap-7">
                            <div className="flex flex-row items-start w-full gap-10">
                                <div className="flex w-[70%] items-center">
                                    <div className="w-[150px] aspect-square flex justify-center items-center">
                                        <img src={product?.image} alt="image" width="100px" height="100px" className="aspect-square" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xl font-semibold">{product?.title}</div>
                                        <div className="text-lg text-gray-600">Total spend:<span className="text-black">${product?.price}</span> </div>
                                        <div className="text-lg text-gray-600">Total review:<span className="text-black">{product?.rating?.count}</span></div>
                                    </div>
                                </div>
                                <div className="w-[130%] pt-6">
                                    <div className="flex gap-3 items-center">
                                        <div><ReactStars
                                            count={5}
                                            value={product?.rating?.rate}
                                            size={30}
                                            edit={false}
                                            activeColor="#ffd700"
                                            emptyIcon={<FaStar />}
                                            fullIcon={<FaStar />}
                                        /></div>
                                        <div>{product?.date}</div>
                                    </div>
                                    <div className="w-[80%] text-left text-lg">
                                        {product?.review}
                                    </div>
                                </div>
                            </div>
                            <div className="w-[95%] h-[2px] bg-gray-600"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}