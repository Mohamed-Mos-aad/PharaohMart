// ** Style
import { useEffect, useState } from 'react';
import style from '../../style/pages/auth/otp.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router'



export default function Otp() {
    // ** Default
    const navigate = useNavigate();



    // ** States
    const [userOtpCode,setUserOtpCode] = useState<string[]>(Array(6).fill(''));
    const [timer,setTimer] = useState<{minutes: number,seconds: number}>({
        minutes: 2,
        seconds: 0
    })
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);



    // ** Handlers
    const otpCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { id, value } = e.currentTarget;
        if (!/^\d?$/.test(value)) return;
        const index = parseInt(id);
        const updatedOtp = [...userOtpCode];
        updatedOtp[index] = value;
        setUserOtpCode(updatedOtp);

        if (value && index < 5) {
            const nextInput = document.getElementById((index + 1).toString());
            nextInput?.focus();
        }
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        const { id, value } = e.currentTarget;
        const index = parseInt(id);
        if (key === 'Backspace' && !value) {
            if (index > 0) {
                const previousInput = document.getElementById((index - 1).toString());
                previousInput?.focus();
            }
        }
    }
    const successPageHandler = ()=>{
        console.log(userOtpCode);
        navigate('/u/success')
    }
    const sendOtpHandler = () => {
        console.log("OTP sent to email!");

        setIsOtpSent(true);
        setIsTimerActive(true);
        setTimer({ minutes: 2, seconds: 0 });
    };



    // ** UseEffect
    useEffect(()=>{
        if (!isTimerActive) return;

        const startInterval = setInterval(()=>{
            setTimer(prev =>{
                let newMinutes = prev.minutes;
                let newSeconds = prev.seconds - 1;

                if(newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes = newMinutes > 0 ? newMinutes - 1 : 0;
                }

                if(newMinutes === 0 && newSeconds === 0){
                    clearInterval(startInterval);
                }

                return {minutes : newMinutes , seconds: newSeconds}
            })
        },1000)

        return ()=> clearInterval(startInterval);
    },[isTimerActive])



    return (
        <>
            <div className="global_container">
                <div className={style.auth_form}>
                    <h1>Verify your identity</h1>
                    <p>We sent a 6-digit verification code to your email address. Please enter it below to continue.</p>
                    <div className={style.otp_code}>
                        <input type="text" id='0' maxLength={1} inputMode="numeric" value={userOtpCode[0]} pattern="[0-9]*" onChange={(e)=>{otpCodeChangeHandler(e)}} onKeyDown={handleKeyDown}/>
                        <input type="text" id='1' maxLength={1} inputMode="numeric" value={userOtpCode[1]} pattern="[0-9]*" onChange={(e)=>{otpCodeChangeHandler(e)}} onKeyDown={handleKeyDown}/>
                        <input type="text" id='2' maxLength={1} inputMode="numeric" value={userOtpCode[2]} pattern="[0-9]*" onChange={(e)=>{otpCodeChangeHandler(e)}} onKeyDown={handleKeyDown}/>
                        <input type="text" id='3' maxLength={1} inputMode="numeric" value={userOtpCode[3]} pattern="[0-9]*" onChange={(e)=>{otpCodeChangeHandler(e)}} onKeyDown={handleKeyDown}/>
                        <input type="text" id='4' maxLength={1} inputMode="numeric" value={userOtpCode[4]} pattern="[0-9]*" onChange={(e)=>{otpCodeChangeHandler(e)}} onKeyDown={handleKeyDown}/>
                        <input type="text" id='5' maxLength={1} inputMode="numeric" value={userOtpCode[5]} pattern="[0-9]*" onChange={(e)=>{otpCodeChangeHandler(e)}} onKeyDown={handleKeyDown}/>
                    </div>
                    <h2>{timer.minutes < 10 ? '0' + timer.minutes : timer.minutes}:{timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}</h2>
                    {
                        isOtpSent ?
                            <button onClick={successPageHandler} disabled>Continue</button>
                            :
                            <button onClick={sendOtpHandler}>Send Code</button>
                    }
                </div>
            </div>
        </>
    )
}