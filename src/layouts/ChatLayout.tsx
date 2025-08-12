// ** Assets
import searchIcon from '../assets/icons/dashboard/products/searchIcon.svg'
import userPhoto from '../assets/images/test/chat imgs/userPhoto.png'
// ** Style
import style from '../style/layouts/chatLayout.module.css'



export default function ChatLayout() {
    return (
        <>
            <div className={style.chat_layout}>
                <div className={style.messages_list}>
                    <h2>Messages</h2>
                    <div className={style.search_element}>
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder='Search messages'/>
                    </div>
                    <ul>
                        <li>
                            <div className={style.user_photo}>
                                <img src={userPhoto} alt="user Photo" />
                            </div>
                            <div className={style.user_data}>
                                <h3>Sarah Miller</h3>
                                <p>Hi there, I'm interested in your product. Can you provide more details?</p>
                            </div>
                        </li>
                        <li>
                            <div className={style.user_photo}>
                                <img src={userPhoto} alt="user Photo" />
                            </div>
                            <div className={style.user_data}>
                                <h3>David Lee</h3>
                                <p>I received the package, but it seems to be damaged. What should I do?</p>
                            </div>
                        </li>
                        <li>
                            <div className={style.user_photo}>
                                <img src={userPhoto} alt="user Photo" />
                            </div>
                            <div className={style.user_data}>
                                <h3>Emily Chen</h3>
                                <p>I'm looking for a specific item, but I can't find it in your store. Can you help?</p>
                            </div>
                        </li>
                        <li>
                            <div className={style.user_photo}>
                                <img src={userPhoto} alt="user Photo" />
                            </div>
                            <div className={style.user_data}>
                                <h3>Robert Green</h3>
                                <p>I have a question about the shipping policy. Can you clarify?</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.chat_container}>
                    <div className={style.chat_header}>
                        <h1>Sarah Miller</h1>
                        <h2>Order #123456789</h2>
                    </div>
                    <div className={style.chat_messages}>
                        <div className={style.message}>
                            <div className={style.user_photo}>
                                <img src={userPhoto} alt="user Photo" />
                            </div>
                            <div className={style.message_content}>
                                <span>Sarah Miller</span>
                                <p>Hi  there,  I'm  interested  in  your  product.  Can  you  provide  more  details?</p>
                            </div>
                        </div>
                        <div className={`${style.message} ${style.seller}`}>
                            <div className={style.user_photo}>
                                <img src={userPhoto} alt="seller Photo" />
                            </div>
                            <div className={style.message_content}>
                                <span>Seller</span>
                                <p>Hello  Sarah,  thank  you  for  your  interest!  Could  you  please  specify  which  product  you're  interested  in  so  I  can  provide  you  with  the  relevant  details?</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.chat_footer}>
                        <input type="text" placeholder='Type  a message...'/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}