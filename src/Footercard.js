import React from"react";
import pt from "./pt.png";
import gt from "./gt.png";
import ty from "./ty.png";
import ph from "./ph.png";
const Footercard=(p)=>{

    return(
<>
<div class="footer1">
    <img src={pt} alt="pty"/>
    <h3>100% secure Payment</h3>
    <p>Moving you card detail to a much more secured place</p>
</div>
<div class="footer1">
    <img src={gt} alt="pty"/>
    <h3>Trustpay</h3>
    <p>100% Payment Protection. Easy</p>
</div>

<div class="footer1">
    <img src={ty} alt="pty"/>
    <h3>Help center</h3>
    <p>Got a question? Look no further.</p>
</div>

<div class="footer1">
    <img src={ph} alt="pty"/>
    <h3>Shop On The Go</h3>
    <p>Download the app and get exciting app only offers at your fingertips</p>
</div>

</>


    )
}
export default Footercard;