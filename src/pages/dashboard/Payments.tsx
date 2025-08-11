// ** Assets
import bankIcon from '../../assets/icons/dashboard/Payments/bankIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/payments.module.css'
// ** Components
import DashboardHeader from "../../components/dashboard/DashboardHeader";



export default function Payments() {
    return (
        <>
            <div className="dashboard_container">
                <div className={style.payments}>
                    <DashboardHeader title='Payments & Payouts' description='Manage your earnings and payouts from the platform.'/>
                    <section className={style.payments_cards}>
                        <div className={style.card}>
                            <h2>Total Earnings</h2>
                            <h3>$125,000</h3>
                        </div>
                        <div className={style.card}>
                            <h2>Pending Payout</h2>
                            <h3>$5,000</h3>
                        </div>
                        <div className={style.card}>
                            <h2>Next Payout Date</h2>
                            <h3>July 15, 2024</h3>
                        </div>
                    </section>
                    <section>
                        <h3>Payout History</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Bank/Account</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>June 15, 2024</td>
                                    <td>$10,000</td>
                                    <td>$Bank of America (...1234)</td>
                                    <td>
                                        <div>
                                            Processed
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>May 15, 2024</td>
                                    <td>$12,000</td>
                                    <td>Bank of America (...1234)</td>
                                    <td>
                                        <div>
                                            Processed
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>April 15, 2024</td>
                                    <td>$15,000</td>
                                    <td>Bank of America (...1234)</td>
                                    <td>
                                        <div>
                                            Processed
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>March 15, 2024</td>
                                    <td>$18,000</td>
                                    <td>Bank of America (...1234)</td>
                                    <td>
                                        <div>
                                            Processed
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>February 15, 2024</td>
                                    <td>$20,000</td>
                                    <td>Bank of America (...1234)</td>
                                    <td>
                                        <div>
                                            Processed
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <h3>Connected Bank Account</h3>
                        <div className={style.bank_method}>
                            <div className={style.method_img}>
                                <img src={bankIcon} alt="bank icon" />
                            </div>
                            <div className={style.method_details}>
                                <h4>Bank of America</h4>
                                <h5>...1234</h5>
                            </div>
                        </div>
                        <button>Edit Account</button>
                    </section>
                    <section>
                        <h3>Manual Payout</h3>
                        <p>Request a payout of your available funds. Please note that manual payouts may be subject to processing fees.</p>
                    </section>
                    <button className={style.paeg_btn}>Request Payout</button>
                </div>
            </div>
        </>
    )
}