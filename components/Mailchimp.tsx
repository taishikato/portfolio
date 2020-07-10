import React from 'react'

// const Mailchimp = () => {
//   const [email, setEmail] = React.useState('')
//   return (
//     <div className="text-center">
//       {/* Begin Mailchimp Signup Form */}
//       <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//       #mc_embed_signup{clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
//     `,
//         }}
//       />
//       <div id="mc_embed_signup">
//         <form
//           action="https://gmail.us20.list-manage.com/subscribe/post?u=0fe0b2aeb98a80bacf4afde06&amp;id=34d283ad51"
//           method="post"
//           id="mc-embedded-subscribe-form"
//           name="mc-embedded-subscribe-form"
//           className="validate"
//           target="_blank"
//           noValidate>
//           <div id="mc_embed_signup_scroll">
//             <label htmlFor="mce-EMAIL" className="text-2xl">
//               😙 Wanna know if I achieve my goal?
//             </label>
//             <input
//               type="email"
//               value={email}
//               name="EMAIL"
//               className="email"
//               id="mce-EMAIL"
//               placeholder="example@example.com"
//               required
//               onChange={e => setEmail(e.target.value)}
//             />
//             {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
//             <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
//               <input type="text" name="b_0fe0b2aeb98a80bacf4afde06_34d283ad51" tabIndex={-1} value="" />
//             </div>
//             <div className="clear">
//               <input
//                 type="submit"
//                 value="Subscribe"
//                 name="subscribe"
//                 id="mc-embedded-subscribe"
//                 className="button"
//                 readOnly
//               />
//             </div>
//           </div>
//         </form>
//         🙏 Subscribed: 80
//       </div>
//       {/* <!--End mc_embed_signup--> */}
//       <style jsx>{`
//         #mc_embed_signup label {
//           font-size: 1.5rem;
//         }
//       `}</style>
//     </div>
//   )
// }

const Mailchimp = () => (
  <>
    <label htmlFor="mce-EMAIL" className="text-2xl">
      😙 Wanna know if my journey?
    </label>
    <p>🙏 Subscribed: 82</p>
    <div className="flex justify-center">
      <iframe
        src="https://taishi.substack.com/embed"
        width="480"
        height="320"
        style={{border: '1px solid #EEE', background: 'white'}}
        frameBorder="0"
        scrolling="no"></iframe>
    </div>
    <style jsx>{`
      label {
        font-size: 1.5rem;
      }
    `}</style>
  </>
)

export default Mailchimp
