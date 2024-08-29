import pawn from "./icons/Office_boy.png";
import sms from "./icons/Mail.png"
import document from "./icons/documents.png"
import employee from "./icons/employee.png"
import email from "./icons/email.png"
import att from "./icons/chair.png"
// import { IoMdExit } from "react-icons/io";
import { useState } from "react"

function Main(){
    const [regular,setRegular] = useState(1);
    const [reme,setReme] = useState(11);
    const [paid,setPaid] = useState("00");
    return(
        <>
        <div className="contain">
        <div className="na">
            <p className="manage">Student Management</p>
        </div>
        <div className="body">
            <div className="upper">
            <div className="blocko">
                <img src={pawn} alt="que" className="regular"></img>
                <div>
                    <p className="number">{regular}</p>
                    <p className="describr">Regular Students</p>
                </div>
            </div>
            <div className="blockt">
                <img src={pawn} alt="que" className="regular"></img>
                <div>
                    <p className="number">{reme}</p>
                    <p className="describr">Remedial Students</p>
                </div>
            </div>
            <div className="blockth">
                <img src={pawn} alt="que" className="regular"></img>
                <div>
                    <p className="number">{paid}</p>
                    <p className="describr">in Paid Clubs</p>
                </div>
            </div>
            </div>
            <div className="things">
                <p className="menu">Menu</p>
                <div className="grid">
                    <div className="little">
                    <img src = {pawn} alt="value" className="hari"></img>
                    <p>Regular Enrollment</p>
                    </div>
                    <div className="little">
                    <img src = {document} alt="value" className="hari"></img>
                    <p>Remedial Enrollment</p>
                    </div>
                    <div className="little">
                    <img src = {pawn} alt="value" className="hari"></img>
                    <p>Club Management</p>
                    </div>
                    <div className="little">
                    <img src = {employee} alt="value" className="hari"></img>
                    <p>Classroom Management</p>
                    </div>
                    <div className="little">
                    <img src = {email} alt="value" className="hari"></img>
                    <p>SMS/mail</p>
                    </div>
                    <div className="little">
                    <img src = {att} alt="value" className="hari"></img>
                    <p>Attendance</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Main