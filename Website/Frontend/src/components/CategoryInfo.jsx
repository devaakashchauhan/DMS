import React from 'react'

function CategoryInfo() {
    return (
        <>
            <section className="pb-20 bg-blueGray-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">

                                        <i class="fa-solid fa-cloud-showers-water"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">Natural Disasters</h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        A natural disaster is an event caused by a natural hazard, which refers to a natural process or phenomenon that can result in loss of life, property damage, and environmental impact.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                        <i class="fa-solid fa-biohazard"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">Man-Made Disasters</h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        Man-made disasters occur when human actions, negligence, or errors lead to catastrophic consequences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                        <i class="fa-solid fa-house-fire"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">Natural and Man-Made (Both)</h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        A hurricane made worse by human-induced climate change or a flood caused by human activities like deforestation. Additionally, some disasters may be classified under multiple categories.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default CategoryInfo