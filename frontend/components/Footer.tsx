import React from 'react';

export default function Footer() {
    const date = new Date().getFullYear();

    // const count = UseCounterStore((state) => state.count);
    // const increment = UseCounterStore((state) => state.increment);
    // const decrement = UseCounterStore((state) => state.decrement);

    return (
        // <div>
            <footer className="text-center pt-20 pb-6 text-white">
                {/* <div className="mt-30">{count}</div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button> */}

                <div className="md:flex md:flex-row sm:flex sm:flex-col items-center justify-center leading-8 pb-4">
                    <h3 className="px-3 uppercase"><a href="">Contact Us</a></h3>
                    <h3 className="px-3 uppercase"><a href="">Food Location</a></h3>
                    <h3 className="px-3"><a href="">SIGN-Up</a></h3>
                    <h3 className="px-3 uppercase"><a href="">Follow Us</a></h3>
                </div>
                <p className="text-sm text-gray-400 sm:px-4">
                © {date} FOODIE MOSNNY. All Right Reserved.
                </p>
            </footer>
        // </div>
    )
}