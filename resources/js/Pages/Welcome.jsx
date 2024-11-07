import axios from "axios";
import React, { useState } from "react";

export default function Welcome() {
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const res = await axios.post('https://7ffb-102-210-221-2.ngrok-free.app/mpesa/pay', {phone, amount});
            console.log('Form submitted successfully', res.data)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Phone number:</label>
                <input type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label>Amount:</label>
                <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <button type="submit" className="border p-2 text-green-600">Pay</button>
            </form>
        </>
    )
}
