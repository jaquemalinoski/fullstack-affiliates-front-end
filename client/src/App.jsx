import React, { Component } from "react";
import { v4 as uuid } from "uuid"
import { filesize } from 'filesize'

import GlobalStyle from './style/global'
import { Container, Content } from './styles'

import Upload from "./components/Upload"
import FileList from './components/FileList'

import api from './services/api'
import ListTransactions from "./components/ListTransactions";

class App extends Component {
    state = {
        uploadedFiles: []
    }

    handleUpload = files => {
        const uploadedFiles = files.map((file) => ({
            file,
            id: uuid(),
            name: file.name,
            readbleSize: filesize(file.size),
            progress: 0,
            uploaded: false,
            error: false,
        }))

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        })

        uploadedFiles.forEach(this.processUpload)
    }

    updateFile = (id, data) => {
        this.setState({uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
            return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile
        })})
    }

    processUpload = (uploadedFile) => {
        const data = new FormData()

        data.append('file', uploadedFile.file, uploadedFile.name)

        api.post('affiliates', data, {
            onUploadProgress: event => {
                const progress = parseInt(Math.round((event.loaded * 100) / event.total))

                this.updateFile(uploadedFile.id, {
                    progress,
                })
            }
        }).then(response => {
            this.updateFile(uploadedFile.id, {
                uploaded: true,
                id: response.data._id,
            })
        }).catch(() => {
            this.updateFile(uploadedFile.id, {
                error: true
            })
        })
    }

    render() {
        const { uploadedFiles } = this.state

        return (
            <Container>
                <Content>
                    <Upload onUpload={this.handleUpload}/>
                    { !!uploadedFiles.length && <FileList files={uploadedFiles}/>}
                <ListTransactions/>
                </Content>
                <GlobalStyle/>
            </Container>
        )
    }
}

export default App;