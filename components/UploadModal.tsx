"use client"

import {Modal} from "@/components/Modal";
import {useUploadModal} from "@/hooks/useUploadModal";

export const UploadModal = () => {
    const uploadModal = useUploadModal();

    const onChange = (open:boolean)=> {
        if(!open) {
            uploadModal.onClose();
        }
    }
    return(
        <Modal isOpen={uploadModal.isOpen} onChange={onChange} title={"Upload modal title"} description={"Upload modal description"}>
            Upload Content
        </Modal>
    )
}