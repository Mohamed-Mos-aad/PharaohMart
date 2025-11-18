// ** Style
import style from '../../style/components/ui/messagePop.module.css'
// ** Assets
import faildIcon from '../../assets/icons/ui/faildIcon.svg'
import successIcon from '../../assets/icons/ui/successIcon.svg'
// ** Hooks && Tools
import { useAppDispatch } from '../../app/hooks';
import { useEffect } from 'react';
import { hideMessage } from '../../app/features/messagePop/messagePopSlice';
// ** Interfaces
import type { IMessagePop } from '../../interfaces';



export default function MessagePop({id, message, show, success}:IMessagePop) {
    // ** Defaults
    const dispatch = useAppDispatch();




    // ** UseEffect
    useEffect(()=>{
        if (show) {
            const t = setTimeout(() => {
            dispatch(hideMessage({id}));
            }, 3000);
            return () => clearTimeout(t);
        }
    },[show, dispatch, id])



    if (!show) return null;
    return (
        <> 
            <div className={`${style.message_pop} ${success? style.success : style.faild}`}>
                <img src={success? successIcon : faildIcon} alt="state" />
                <p>{message}</p>
            </div>
        </>
    )
}
