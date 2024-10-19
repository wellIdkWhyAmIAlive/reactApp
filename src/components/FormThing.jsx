import React from 'react'
import './FormThing.css'
import Swal from 'sweetalert2'

function FormThing() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b67133bd-505f-46b8-9723-d5f7ef9e4e8a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank you rashi",
        text: "Chal abb message karke bhi bta kaisi lagi website",
        icon: "success"
      });
    }
  };

  return (
    <section className="contact w-full min-h-screen p-20">
        <form onSubmit={onSubmit}  className="w-1/2">
            <h1 className='heading'>Your <span className='text-[#CDEA68]'>Thoughts</span></h1>
            <div className="input-box">
                <label>Email Address</label>
                <input type="email" className='field' placeholder='apna email daal be' name='email' required />
            </div>
            <div className="input-box">
                <label>Your Message</label>
                <textarea name='message' className='field message' placeholder='kya lagta hai kaisa lag rha hai ye sab' required></textarea>
            </div>
            <button type='submit'>Send Message </button>
        </form>
        <div className='w-1/2 p-20 text-[1.4vw]'>
          bhai hopefully ye website acchi lagi hogi tujhe :) isme almost 10 din lag gye the banane ko but anyways agar tujhe pasand hai to its worth that much time.
          aur agar pasand aayi hi hai to taarif to kar hi degi tu hehehe
        </div>
    </section>
  )
}

export default FormThing