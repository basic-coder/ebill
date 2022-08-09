import React from 'react'
import './home.css'
import 'bulma/css/bulma.min.css';
import { } from 'react-bulma-components';

const Home = () => {
    return (
        <div className='home-table'>
            <table class="table">
                <thead >
                    <tr>
                        <th>No. </th>
                        <th>Bill Date</th>
                        <th>paid Date</th>
                        <th>Amount</th>
                        <th>Units Consumed</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th>1</th>
                        <td></td>
                        <td $table-cell-padding>38</td>
                        <td>23</td>

                        <td></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td></td>
                        <td>38</td>
                        <td>20</td>

                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Home