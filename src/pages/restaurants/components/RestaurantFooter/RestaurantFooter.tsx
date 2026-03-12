import React from "react";
import { Fade } from "react-awesome-reveal";

// ** Interfaces
import { Footer } from "../../interfaces/Restaurants";

// ** Custom components
import RenderParagraphs from "../../../../components/RenderParagraphs/RenderParagraphs";


const RestaurantFooter = ({ data }: { data: Footer }): React.JSX.Element => {

    return (
        <div className="about responsive-margin restaurant__footer">

            <div className="container">

                <div className="row">

                    <div className="col-lg-12 content text-center">
                        <Fade direction="up" triggerOnce>
                            <h5 className="mt-3 mb-4 "><b>{data.title}</b></h5>
                            <RenderParagraphs data={data.description} />
                        </Fade>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default RestaurantFooter