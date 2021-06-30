import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import {useState} from 'react'
 

export function TransactionsTable() {


    return (
       <Container>
           <table>
               <thead>
               <tr>
                   <th>Titulo</th>
                   <th>Valor</th>
                   <th>Categoria</th>
                   <th>Data</th>
               </tr>
               </thead>

               <tbody>
                   
                   {transactions.map((transaction,index) => {
                       return (
                           <tr key={index}>
                               <td>{transaction.title}</td>
                               <td className={transaction.type}>
                                   {new Intl.NumberFormat('pt-BR', {
                                       style: 'currency',
                                       currency: 'BRL'
                                   }).format(transaction.amount)}
                               </td>
                               <td>{transaction.category}</td>
                               <td>
                               {new Intl.DateTimeFormat('pt-BR').format(
                                   
                                   new Date(transaction.createdAt)
                               )}
                                   </td>
                           </tr>
                       )
                   })}


               </tbody>
           </table>
       </Container>
    )
}
