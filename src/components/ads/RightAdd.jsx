// import React, { useEffect } from 'react';
// import '../../App.css';
// const RightAd = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5285546768035104';
//     script.async = true;
//     script.crossOrigin = 'anonymous';
//     document.body.appendChild(script);

//     script.onload = () => {
//       try {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       } catch (e) {
//         console.error('AdSense error:', e);
//       }
//     };
//   }, []);

//   return (
//     <div className="hidden lg:block w-1/5 min-w-[320px]">
//       <ins className="adsbygoogle ad-container"
//            style={{ display: 'block', width: '100%', height: 'auto' }}
//            data-ad-client="ca-pub-5285546768035104"
//            data-ad-slot="4846997957"
//            data-ad-format="auto"
//            data-full-width-responsive="true"
//            data-adtest="on"></ins>
//     </div>
//   );
// };

// export default RightAd;
//new-->

import React, { useEffect } from 'react';

function RightAdd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5285546768035104";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "inline-block", width: "300px", height: "600px" }}
         data-ad-client="ca-pub-5285546768035104"
         data-ad-slot="4846997957"
         >
    </ins>
  );
}

export default RightAdd;

//data-adtest="on"







// const RightAdd = () => (
//   <div className="w-full h-full border-2 border-dashed border-gray-300 flex items-center justify-center">
//     <span>Ad Placeholder (Right)</span>
//   </div>
// );

// export default RightAdd;
