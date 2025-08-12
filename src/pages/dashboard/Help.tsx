// ** Style
import style from '../../style/pages/dashboard/help.module.css'
// ** components
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import UploadPhotos from '../../components/form/UploadPhotos';
import DropTextElement from '../../components/form/DropTextElement';
import TextAreaInputElement from '../../components/form/TextAreaInputElement';
import InputElement from '../../components/form/InputElement';



export default function Help() {
    return (
        <>
            <div className="dashboard_container">
                <div className={style.help}>
                    <DashboardHeader title="Help Center" description="Frequently Asked Questions"/>
                    <section>
                        <h2>Frequently Asked Questions</h2>
                        <DropTextElement title='How do I list an item for sale?' description="To list an item, go to your seller dashboard and click 'Add New Listing'. Fill in all the required details, including item description, price, and shipping information. You can also add photos and videos to showcase your product. "/>
                        <DropTextElement title='What are the fees for selling on Crafty?' description="We operate with a clear and transparent fee structure. A percentage fee of [percentage, e.g., 10%] of the sale price is charged on each transaction, plus a fixed fee of [amount, e.g., $2] per sale. Additional fees may apply for premium services or promotions. You can find detailed information about our fees in the Seller Dashboard under the Fees section. Our aim is to offer an affordable platform that helps you maximize your profits. "/>
                        <DropTextElement title='How do I handle returns and refunds?' description="We prioritize customer satisfaction by making the return and refund process simple. If a customer wishes to return a service or product, please have them contact our support team within [specified timeframe, e.g., 14 days from receipt]. The item should be returned in its original condition with all necessary documentation or details. Once we receive and inspect the return, we will process the refund or exchange accordingly. Our goal is to provide fast and transparent service to ensure customer happiness. "/>
                    </section>
                    <section>
                        <h2>Contact Support</h2>
                        <InputElement id='userSubject' label='Subject' name='userSubject' placeholder='Enter  the subject of your issue' type='' onChange={()=>{}}/>
                        <TextAreaInputElement id='userMessage' label='Message' name='userMessage' placeholder='Enter the Message' onChange={()=>{}}/>
                        <UploadPhotos title='File Upload' description='' quantity={5}/>
                        <button>Submit Ticket</button>
                    </section>
                    <section>
                        <h2>Previous Tickets</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>Subject</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#12345</td>
                                    <td>Issue with payment processing</td>
                                    <td>
                                        <div>
                                            Open
                                        </div>
                                    </td>
                                    <td>2024-01-15</td>
                                </tr>
                                <tr>
                                    <td>#67890</td>
                                    <td>Shipping label not working</td>
                                    <td>
                                        <div>
                                            Closed
                                        </div>
                                    </td>
                                    <td>2024-02-20</td>
                                </tr>
                                <tr>
                                    <td>#11223</td>
                                    <td>Product listing error</td>
                                    <td>
                                        <div>
                                            Resolved
                                        </div>
                                    </td>
                                    <td>2024-03-05</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </>
    )
}
