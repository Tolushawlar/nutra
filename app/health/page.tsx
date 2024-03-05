import React from 'react'
import Header from '../(Components)/Header'
import { yam } from "@/app/Assets"
import MealPlans from '../(Components)/Menu/MealPlans'
import Link from 'next/link'

function HealthPage() {
    return (
        <>
            <Header />
            <div className="w-full">
                <div className=" w-full p-5 bg-bg-pri text-text-color">
                    <div className="hero-content flex-col lg:flex-row w-full">
                        <div className="w-1/2">
                            <h1 className="text-8xl font-bold">tasty diabetes-friendly meals you can enjoy.</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                                et a id nisi.
                            </p>
                            <button className="btn border-none bg-bg-black text-text-color">
                                Book a consulation
                            </button>
                            <Link href="#ourMeals">
                                <button className="btn border-none bg-bg-sec text-text-color" >
                                    See our meals
                                </button>
                            </Link>
                        </div>
                        <div className="flex md:grid grid-cols-2 gap-2 w-1/2">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <figure className=" ">
                                        {
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                style={{
                                                    objectFit: "contain",
                                                    // width: "300px",/
                                                }}
                                                src={yam.src}
                                                alt=" w-[500px] border object-center object-fill"
                                            />
                                        }
                                    </figure>
                                    <h2 className="card-title">Diabetes Meals</h2>
                                    <p>Info about the condition</p>
                                    <div className="card-actions justify-end">
                                        <Link href="/health/Diabetes">
                                            <button className="btn btn-success">Order Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <figure className=" ">
                                        {
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                style={{
                                                    objectFit: "contain",
                                                    // width: "300px",/
                                                }}
                                                src={yam.src}
                                                alt=" w-[500px] border object-center object-fill"
                                            />
                                        }
                                    </figure>
                                    <h2 className="card-title">Asthma Meals</h2>
                                    <p>Info about the condition</p>
                                    <div className="card-actions justify-end">
                                        <Link href="/health/Asthma">
                                            <button className="btn btn-success">Order Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <figure className=" ">
                                        {
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                style={{
                                                    objectFit: "contain",
                                                    // width: "300px",/
                                                }}
                                                src={yam.src}
                                                alt=" w-[500px] border object-center object-fill"
                                            />
                                        }
                                    </figure>
                                    <h2 className="card-title">Hypertension Meals</h2>
                                    <p>Info about the condition</p>
                                    <div className="card-actions justify-end">
                                        <Link href="/health/Hypertension">
                                            <button className="btn btn-success">Order Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <figure className=" ">
                                        {
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                style={{
                                                    objectFit: "contain",
                                                    // width: "300px",/
                                                }}
                                                src={yam.src}
                                                alt=" w-[500px] border object-center object-fill"
                                            />
                                        }
                                    </figure>
                                    <h2 className="card-title">Additive-free diets.</h2>
                                    <p>Info about the condition</p>
                                    <div className="card-actions justify-end">
                                        <Link href="/health/free-diets">
                                            <button className="btn btn-success">Order Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center p-10 ' id='ourMeals'>
                <p className='text-7xl text-center text-black'>
                    Our Healthy Meal Plans
                </p>
                <MealPlans
                    imageSrc={yam.src} // Replace with your actual image URL
                    mainText="Diabetes"
                    subText="SLiving with diabetes requires careful attention to dietary choices to maintain blood sugar levels within a healthy range. A well-balanced diet can contribute significantly to managing diabetes effectively. Here's a simple guide to help individuals make informed food choices."
                    buttonText="View Meals"
                />

                <MealPlans
                    imageSrc="https://placekitten.com/200/300"  // Replace with your actual image URL
                    mainText="Main Title"
                    subText="Sub Title or Description"
                    buttonText="Click me"
                />
            </div>
        </>

    )
}

export default HealthPage