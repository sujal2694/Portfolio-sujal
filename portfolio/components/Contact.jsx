import React from 'react'

const Contact = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto] ' id='contact'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-ovo'>Get In Touch</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Feel free to reach out to me if you have any questions or would like to discuss potential opportunities!</p>

            <form>
                <div>
                    <input type="text" placeholder='Enter your name' required />
                    <input type="email" placeholder='Enter your email' required />
                </div>
                <textarea rows={6} placeholder='Enter your message' required></textarea>

                <button type='submit'>Submit now</button>
            </form>
        </div>
    )
}

export default Contact
