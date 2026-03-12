import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

// ** Interfaces
import { Leader } from '../../../leaders/interfaces/Leaders';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';

// ** Assets
import avatar from "./../assets/avatarDefault.png"

interface InvestorESGCorporateBoardModalProps {
    modal: boolean;
    toggle: () => void;
    selectBoard: Leader
}

/**
 * CorporateBoardModal
 * 
 * This component renders a modal for a specific leader selected from the Corporate Board component.
 * It renders the leader's name, biography, and image.
 * The modal is toggleable and can be accessed by clicking on a leader's card.
 * 
 * @param {object} props
 * @param {boolean} props.modal - Whether the modal is open or not
 * @param {function} props.toggle - Function to toggle the modal
 * @param {object} props.selectBoard - The leader whose information will be rendered in the modal
 * @returns {React.JSX.Element} - The rendered modal
 */
const CorporateBoardModal = ({
    modal,
    toggle,
    selectBoard
}: InvestorESGCorporateBoardModalProps): React.JSX.Element => {

    const backgroundImageUrl = selectBoard.image?.data?.attributes?.url || avatar;

    return (
        <Modal isOpen={modal} toggle={toggle} size='lg' className='modal-team'>
            <ModalHeader className='container-close-modal d-md-none'>
                <button onClick={toggle} type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </ModalHeader>
            <ModalBody className='p-0'>
                <div className="col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 back-luis" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="btn-modal container-close-modal d-md-block d-none">
                                <button onClick={toggle} type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="container-info-modal">
                                <p className="color-gray"><b>{selectBoard.name}</b></p>
                                <RenderParagraphs data={selectBoard.biography} />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default CorporateBoardModal