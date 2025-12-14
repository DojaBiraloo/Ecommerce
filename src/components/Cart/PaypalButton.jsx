import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider options={{"clientId": "AVlDaQcgLyA65JLrlHfuJ3mtOoDfJCHUZmhxEWveogi3yCvQ96x8sqr3Y0y7O3mjihh9bst5RxR-TB2Y"}}>
        <PayPalButtons style={{layout:"vertical"}}
        createOrder={(data, actions) =>{
            return actions.order.create({
                purchase_units: [{amount: {value: amount}}]
            })

        }}
        onApprove={(data, actions) =>{
            return actions.order.capture().then(onSuccess)
        }}
        onError={onError} />
    </PayPalScriptProvider>
  )
}

export default PaypalButton
