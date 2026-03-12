import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// ** Components
import CorporateBoardModal from './CorporateBoardModal/CorporateBoardModal'
import ButtonViewMoreLess from '../ButtonViewMoreLess/ButtonViewMoreLess'

// ** Styles
import './CorporateBoard.css'

// ** Interfaces
import { Leader } from '../../leaders/interfaces/Leaders'

// ** Assets
import avatar from "./assets/avatarDefault.png"

const MAX_CARDS = 8


/**
 * Renders a component that displays a list of leaders, with a button to show/hide more information
 * and a modal to display the information of the selected leader.
 * 
 * The component accepts a single prop, `leaders`, which should be an array of objects with the following properties:
 * - name: string
 * - position_title: string
 * - image: object with a `url` property, which is the URL of the image to display
 * - biography: string
 * 
 * The component will display up to `MAX_CARDS` cards on the page, and will render a button to show/hide more information
 * if there are more than `MAX_CARDS` leaders. If the button is clicked, it will toggle the `viewMore` state and re-render
 * the list of leaders.
 * 
 * When a leader is clicked, the component will set the `selectBoard` state to the selected leader and toggle the `modal` state.
 * The modal will display the information of the selected leader.
 * 
 * @param {Leader[]} leaders - An array of objects with the information of the leaders
 * @returns {React.JSX.Element} - The JSX element of the component
 */
const CorporateBoard = ({ leaders }: { leaders: Leader[] }): React.JSX.Element => {

    const [modal, setModal] = useState(false)
    const [selectBoard, setSelectBoard] = useState({} as Leader)
    const [viewMore, setViewMore] = useState(false)

    const toggle = () => setModal(!modal)


    /**
     * Function to handle the selection of a member of the board of directors
     * 
     * @param {Employee} board - The employee object with the information of the member of the board
     */
    const handleSelectBoard = (board: Leader) => {
        setSelectBoard(board)
        toggle()
    }


    const renderCards = (employee: Leader): React.JSX.Element => {
        return (
            <div key={employee.name}
                className="col-lg-4 col-md-6 space-card mb-5 ps-4 pe-4">
                <Fade direction="up" triggerOnce>
                    <div
                        className="member cursor-pointer"
                        aria-label='member-info'
                        onClick={() => handleSelectBoard(employee)}>
                        {
                            <img src={avatar} className="img-fluid img-member" alt="" loading="lazy" />
                            // !employee.image?.data?.attributes?.url 
                            // ? <img src={avatar} className="img-fluid img-member" alt="" loading="lazy" /> 
                            // : <img src={employee.image?.data?.attributes?.url} className="img-fluid img-member" alt="" loading="lazy" />
                        }

                        <div className="member-info">
                            <h4 className='member__name'>{employee.name}</h4>
                            <span className='member__position'>{employee.position_title}</span>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
    return (
        <div className="about section responsive-margin">
            <div className="container">
                <div className="row">
                    <div className="row content team d-none d-md-flex justify-content-center">
                        {
                            leaders.slice(0, viewMore ? leaders.length : MAX_CARDS).map((employee) => {
                                return (
                                    renderCards(employee)
                                )
                            })
                        }

                        <div className="text-center mb-30 mt-60" style={{ visibility: leaders.length > MAX_CARDS ? 'visible' : 'hidden' }}>
                            <ButtonViewMoreLess viewMore={viewMore} setViewMore={setViewMore} />
                        </div>

                    </div>
                    <div className='d-md-none team'>
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
                        >
                            {leaders.map((employee) => (
                                <SwiperSlide key={employee.name}>
                                    {renderCards(employee)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {
                        modal && (
                            <CorporateBoardModal
                                modal={modal}
                                toggle={toggle}
                                selectBoard={selectBoard}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CorporateBoard