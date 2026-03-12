import React from "react"

// ** Styles
import './RestaurantTabContent.css'

// ** Interfaces
import { DataPage } from "../../../interfaces/RestaurantsPages"

// ** Components
import RestaurantTabContentTypeGray from "./RestaurantTabContentTypeGray/RestaurantTabContentTypeGray"
import RestaurantTabContentTypeCard from "./RestaurantTabContentTypeCard/RestaurantTabContentTypeCard"
import RestaurantTabContentTypeText from "./RestaurantTabContentTypeText/RestaurantTabContentTypeText"

import imageFakeParallax from '/assets/images/all/fake__parallax.png'


const RestaurantTabContent = ({ tab, background_url }: { tab: DataPage, background_url: string }): React.JSX.Element => {
    const { attributes } = tab;
    const { page } = attributes;

    return (
        <div className="item__tab__info">
            {
                page.map((item, index) => (
                    <div key={item.id} className={`item__tab__content ${item.background_color !== 'gray' && item.__component === "restaurant.restaurant-section-with-image" ? 'item__tab__middle' : ''}`}>
                        {
                            item.background_color === 'gray' && item.__component === "restaurant.restaurant-section-with-image" && (
                                <RestaurantTabContentTypeGray page={item} />
                            )
                        }
                        {
                            item.background_color !== 'gray' && item.__component === "restaurant.restaurant-section-with-image" && (
                                <RestaurantTabContentTypeCard page={item} />
                            )
                        }
                        {
                            item.__component === "restaurant.restaurant-block-of-text" && (
                                <RestaurantTabContentTypeText page={item} />
                            )
                        }
                        {
                            index === 1 && (
                                <div className="mt-5 mb-5 image-home dark-background">
                                    {/* TODO replace src image {background_url} */}
                                    <img src={imageFakeParallax}
                                        alt={item.title} className="img-restaurant" />
                                </div>
                            )
                        }

                    </div>
                ))

            }

        </div>

    )
}

export default RestaurantTabContent