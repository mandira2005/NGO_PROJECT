import React from "react";
import Impact from "./ImpactPage";


const Prop = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="prop-card p-3">
                            <Impact


                                // img='pic1.webp'
                                description = "I was so happy to get a good meal. Thank you for helping us. - Raju, 8 years"
                                des = "Food for children"
                            />
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="prop-card p-3">
                            <Impact


                                // img='pic2.jpg'
                                description = "This food means a lot for me. It gives me strength and hope. - Saraswati Devi, 62 years"
                                des = "Food for Elderly"
                            />
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="prop-card p-3">
                            <Impact
                                // img='pic1.webp'
                                description = "You are not just giving food, you are giving us a better future. - Asha's Family"
                            />
                        </div>
                    </div>

                </div>
            </div>

        
        </>
    )
}

export default Prop