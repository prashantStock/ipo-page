import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

export default function () {
    return (
        <div>
            <img src="https://stockdaddy.in/images/logo.png"/>
            
            
            <br/>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjvRwc5QpAhZfZ5-_d-Oi15gjOdWtGXUP2g&usqp=CAU"/>
            </div>
            <div>
            <h2>Apply For IPO Here</h2>
            
            
            <p>You can now apply for new IPOs (Initial Public Offerings)</p>
            </div>
            
            <button className="btn">Apply For IPO</button>
            <div>

            <h2 className="header">Upcoming IPO</h2>
            <table>
                <tr>
                <th>Stock</th>
                <th>IPO Size</th>
                <th>Fresh issue</th>
                <th>Offer for sale</th>
                <th>Price Band</th>
                <th>Lot size</th>
                <th>Cost per lot</th>
                </tr>
                <tr>
                <td className="td">Grey Market</td>
                <td>₹619 Cr</td>
                <td>NA</td>
                <td>₹619 Cr</td>
                <td>₹443-₹453</td>
                <td>₹33</td>
                <td>₹14,949</td>
                </tr>
            </table>
            <h2 className="header">Closed IPO</h2>
            <table>
                <tr>
                <th>Stock</th>
                <th>IPO Size</th>
                <th>Fresh issue</th>
                <th>Offer for sale</th>
                <th>Price Band</th>
                <th>Lot size</th>
                <th>Cost per lot</th>
                </tr>
                <tr>
                <td className="td">Grey Market</td>
                <td>₹619 Cr</td>
                <td>NA</td>
                <td>₹619 Cr</td>
                <td>₹443-₹453</td>
                <td>₹33</td>
                <td>₹14,949</td>
                </tr>
            </table>
            </div>

        </div>
    )
}