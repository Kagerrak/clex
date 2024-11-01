import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import {
  VisionMissionModal,
  CoreValuesModal,
  ContactModal,
} from "@/components/modals/company-modals";

export const CompanyModals = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book your flight
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <VisionMissionModal />
          </ModalContent>
        </ModalBody>
      </Modal>

      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book your flight
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <CoreValuesModal />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};
