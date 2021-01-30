import { gql } from 'graphql-request'

const operations = {
    getPrices:  gql`
        query{
            getPrices{
            id
            cryptocurrency
            buyPricePerCoin
            minBuy
            maxBuy
            expiresAt
            }
        }
    `,
    getOrder: gql`
    query getOrder($id: ID!){
        node(id: $id) {
          id
          ... on Order {
            status
            cryptocurrency
            totalCoinAmount
            side
          }
        }
      }
    `,
    buyCoin: gql`
    mutation buy($price: ID!, $amount: BigDecimal!, $crypto: Cryptocurrency) {
        buy(price: $price, coin_amount: $amount, cryptocurrency: $crypto) {
            id
            cryptocurrency
            status
            totalCoinAmount
            side
        }
    }
    `,
    sellCoin: gql`
        mutation sell($price: ID!, $amount: BigDecimal!, $crypto: Cryptocurrency) {
            sell(price: $price, coin_amount: $amount, cryptocurrency: $crypto) {
                id
                cryptocurrency
                status
                totalCoinAmount
                side
            }
        }
    `,
    createNairaAccount: gql`
    mutation createDepositAccount($accountName: String!) {
        createDepositAccount(accountName: $accountName) {
        accountNumber
        accountName
        accountType
        bankName
        accountReference
        }
    }
    `
}


export default operations