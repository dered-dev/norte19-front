import React from 'react';
import { Fade } from 'react-awesome-reveal';
import classnames from 'classnames';
import SpecialIcons from '../SpecialIcons/SpecialIcons';

// ** Interfaces
interface RenderCardWithSwipperProps<T> {
    card: T;
    index: number;
    swipper: boolean;
    iconName: string;
    renderContent: (card: T) => React.ReactNode;
}

/**
 * A functional component that renders a card for a swipper or a grid layout.
 *
 * If swipper is false and index is 0, the component returns null.
 *
 * The component renders a div with a class of `col-lg-6 col-12` and a key of the index.
 * The class is modified with `mt-30` if the swipper is false and the index is odd.
 *
 * Inside the div, the component renders a Fade component from react-awesome-reveal with a direction of 'up' and triggerOnce set to true.
 *
 * Inside the Fade component, the component renders a div with a class of `service-item position-relative`.
 * Inside the div, the component renders an img with the src of the image at the index in the images array and an alt of 'metas'.
 * After the img, the component renders a div with a class of `color-gray mt-30` and the result of calling the renderContent function with the card as an argument.
 */
const RenderCardWithSwipper = <T,>({ card, index, swipper, iconName, renderContent }: RenderCardWithSwipperProps<T>): React.JSX.Element | null => {

    if (!swipper && index === 0) {
        return null;
    }

    return (
        <div
            key={index}
            className={classnames("col-lg-6 col-12", {
                'mt-30': !swipper && (index + 1) % 2 !== 0
            })}
        >
            <Fade direction="up" triggerOnce>
                <div className="service-item position-relative">
                    <SpecialIcons iconName={iconName} />
                    <div className="color-gray mt-30">
                        {renderContent(card)}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default RenderCardWithSwipper;
