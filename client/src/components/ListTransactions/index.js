import { useState } from 'react'
import api from '../../services/api'
import { Container } from '../FileList/style'
import { Button } from './styles'

const ListTransactions = () => {
    const [ list, setList ] = useState([])
    const typeOne = []
    const typeTwo = []
    const typeThree = []
    const typeFour = []

    const transactions = () => {
        api.get(`/affiliates`)
        .then((response) => setList(response.data))
        .catch((err) => console.log(err))
    }

    list.forEach((transaction) => {
        if (transaction.type === '1') {
            typeOne.push(transaction)
        }

        if (transaction.type === '2') {
            typeTwo.push(transaction)
        }

        if (transaction.type === '3') {
            typeThree.push(transaction)
        }

        if (transaction.type === '4') {
            typeFour.push(transaction)
        }
    })

    return (
        <div>
            <Container>
                {typeOne.length > 0 && 
                <div className='title'>
                    <span>Producers Sails</span>
                </div>}
                {typeOne.map((transactions) => {
                    return <li key={transactions.id}>
                        {transactions.seller}
                        <span>{Number(transactions.sum).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </li>
                })}

                {typeTwo.length > 0 && 
                <div className='title'>
                    <span>Affiliates Sails</span>
                </div>}
                {typeTwo.map((transactions) => {
                    return <li key={transactions.id}>
                        {transactions.seller}
                        <span>{Number(transactions.sum).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </li>
                })}

                {typeThree.length > 0 && 
                <div className='title'>
                    <span>Commission Paid</span>
                </div>}
                {typeThree.map((transactions) => {
                    return <li key={transactions.id}>
                        {transactions.seller}
                        <span>{Number(transactions.sum).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </li>
                })}

                {typeFour.length > 0 && 
                <div className='title'>
                    <span>Commission Received</span>
                </div>}
                {typeFour.map((transactions) => {
                    return <li key={transactions.id}>
                        {transactions.seller}
                        <span>{Number(transactions.sum).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </li>
                })}
            </Container>
            <Button onClick={transactions}>Calculate</Button>
        </div>
    )
}

export default ListTransactions