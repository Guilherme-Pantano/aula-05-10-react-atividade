export default function Banner2(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 text-center mt-8">
            <div className="mx-4 mb-4 md:justify-self-end">
                <button className="bg-[#d52349] text-white font-bold w-full md:w-64 py-2 rounded-md">
                    Get Started
                </button>
            </div>

            <div className="mx-4 mb-4 md:justify-self-start">
                <button className="bg-[#252122] text-white font-bold w-full md:w-64 py-2 rounded-md">
                    Learn More
                </button>
            </div>
        </div>
    );
}