import React, { useState } from "react";

const Contact = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[address, setAddress] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[grillOrder,setGrillOrder] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && lastName && address && phoneNumber){
            const singleOrder = {id: new Date().getTime().toString(), firstName,lastName,address,phoneNumber };
            // console.log(singleOrder);
            setGrillOrder(() => {
                return [...grillOrder,singleOrder];
            });
            setFirstName("");
            setLastName("");
            setAddress("");
            setPhoneNumber("");
           alert("Your ORDER IS SUCCESSFUL")
        }else{
            alert(" A Detail is empty")
            console.log("empty detail")
        }
        // console.log(firstName,lastName,address,phoneNumber);
    }



    return ( 
     <article>
        <form className="form"  onSubmit={handleSubmit} 
        action="#">
            {/* name */}
            <div className="formGrid ">
                <div className="input-field">
                     <input type="text" id="firstName" 
                     placeholder="Christian" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                     />
                     <label htmlFor="firstName" className="active"> First Name</label>
                </div>
                <div className="input-field">
                    <input type="text" id="lastName" placeholder="Okwu" 
                    className="validate"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="lastName" className="active">Last Name</label>
                </div>
            </div>
            {/* address */}
            <div className="formContinue">
                 <div className="input-field">
                    <input type="text" id="address" 
                    placeholder="No 2 Ikota Estate hs 34" 
                    className="validate"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />
                    <label htmlFor="address" className="active">Residential Address</label>
                 </div>
            </div>
            {/* phone number */}
             <div className="formContinue">
                 <div className="input-field">
                    <input type="tel" id="telephone" placeholder="08000034456" 
                    className="validate"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <label htmlFor="telephone" className="active">Phone Number</label>
                 </div>
            </div>
              {/* Submit btn */}
              <button className="btn waves-effect waves-light right" type="submit" name="action" >Submit
                <i className="material-icons right">send</i>
            </button>
        </form>
            {grillOrder.map((singleOrder,index) => {
                // console.log(grillOrder);
                 const{id,firstName,lastName,address,phoneNumber} = singleOrder;
                  console.log(singleOrder);
                return(
                   <div key={id} className="grillMsg">
                       <h5>{firstName} {lastName}</h5>
                        <h5>{address}</h5>
                       <h4>{phoneNumber}</h4>
                   </div>
                )
            })}
            
     </article>
     );
}
 
export default Contact;