import React, { Component } from "react"
import Dropzone from "react-dropzone"
import { DropContainer, UploadMessage } from "./styles"

export default class Upload extends Component {
    
    renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return <UploadMessage>Drag your file here</UploadMessage>
        }

        if (isDragReject) {
            return <UploadMessage type="error">Unsupported file</UploadMessage>
        }

        return <UploadMessage type="success">Drop your file here</UploadMessage>
    }

    render() {
        const { onUpload } = this.props

        return (
            <Dropzone accept={{'text/*': ['.txt']}} onDropAccepted={onUpload}>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject}) => (
                    <DropContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
                        <input {...getInputProps()}/>
                        
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        )
    }
}