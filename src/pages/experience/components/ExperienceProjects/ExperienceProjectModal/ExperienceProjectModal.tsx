import React from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

// ** Interfaces
import { Proyect } from "../../../interfaces/Experience";

// ** Styles
import './ExperienceProjectModal.css'
import RenderParagraphs from "../../../../../components/RenderParagraphs/RenderParagraphs";

interface ExperienceProjectModalProps {
    modal: boolean;
    toggle: () => void;
    selectProject: Proyect
}


/**
 * A functional component that renders a modal for a specific project.
 * It renders the project's image, title, and description.
 * The modal is toggleable and can be accessed by clicking on a project's card.
 *
 * @param {{ modal: boolean; toggle: () => void; selectProject: Proyect }} props
 * @returns {React.JSX.Element} - The rendered modal
 */
const ExperienceProjectModal = ({
    modal,
    toggle,
    selectProject
}: ExperienceProjectModalProps): React.JSX.Element => {

    return (
        <Modal isOpen={modal} toggle={toggle} size='lg' className='modal-team'>
            <ModalHeader className='container-close-modal'>
                <button onClick={toggle} type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </ModalHeader>
            <ModalBody className='p-0'>
                <div className="col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-12">
                            <img className="img-project" src={selectProject.image?.data?.attributes?.url} />
                        </div>
                        <div className="col-12">
                            <div className="container-info-modal">
                                <div className="title-modal-project">
                                    {selectProject.proyect}
                                </div>
                                <div className="mt-2">
                                    <RenderParagraphs data={selectProject.description} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ExperienceProjectModal