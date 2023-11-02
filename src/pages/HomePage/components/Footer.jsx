import React from 'react'

function Footer() {
    return (
        <div className='flex justify-center items-center h-20 bg-[#BDDDF4]'>
                <p className='font-serif'>Copy right @ Bob Ross Gallery 2023</p>
        </div>
    )
}

export default Footer

// import React, { useState } from 'react';

// function Footer() {
//   const [isChatbotVisible, setChatbotVisible] = useState(false);

//   const showChatbot = () => {
//     setChatbotVisible(true);
//   };

//   const closeChatbot = () => {
//     setChatbotVisible(false);
//   };

//   return (
//     <div className='relative flex justify-center items-center h-20 bg-[#BDDDF4]'>
//       <p className='font-serif'>Copyright @ Bob Ross Gallery 2023</p>
//       {isChatbotVisible ? (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
//           <div className="w-full max-w-md p-4">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={closeChatbot}
//             >
//               Close Chatbot
//             </button>
//             <iframe
//               src="https://fxo.io/m/outdoors-focused-2061"
//               width="100%"
//               height="400px" // Adjust the height as needed
//               style={{ border: '3px solid #f9f9fb', width: '100%' }}
//               title='Chatbot'
//               allowFullScreen
//             />
//           </div>
//         </div>
//       ) : (
//         <button onClick={showChatbot}>Show Chatbot</button>
//       )}
//     </div>
//   );
// }

// export default Footer;
