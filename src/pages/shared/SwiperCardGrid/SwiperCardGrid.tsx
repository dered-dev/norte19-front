import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules'
import RenderCardWithSwipper from "../RenderCardWithSwipper/RenderCardWithSwipper";

interface SwiperCardGridProps<T> {
    cards: T[];
    renderContent: (card: T) => React.JSX.Element;
}

/**
 * A reusable component for rendering a swiper slider of cards.
 * 
 * @template T - The type of the card data.
 * @param {{ cards: T[], renderContent: (card: T) => React.JSX.Element }} props - The props containing the card data, images, and render function.
 * @returns {React.JSX.Element} - The JSX element representing the card slider.
 */
const SwiperCardGrid = <T extends { id: string | number, icon: string }>({
    cards,
    renderContent,
}: SwiperCardGridProps<T>): React.JSX.Element => (
    <div className="testimonials d-md-none mt-30">
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
            }}
            autoplay={{ delay: 5000 }}
            className="card-slider"
        >
            {cards.map((card, index) => (
                <SwiperSlide key={card.id}>
                    <RenderCardWithSwipper
                        key={card.id}
                        card={card}
                        index={index}
                        swipper={true}
                        iconName={card.icon}
                        renderContent={renderContent}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default SwiperCardGrid;
