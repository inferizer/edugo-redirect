import React, { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    // Google Analytics Tracking
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX"); // Replace with your Google Analytics ID

    // ส่ง Event Tracking
    gtag("event", "qr_scan", {
      event_category: "QR Code",
      event_label: "Edugo Redirect Page",
      value: 1,
    });

    // ตั้งเวลา Redirect
    const timer = setTimeout(() => {
      window.location.href = "https://www.edugothailand.com"; // เปลี่ยน URL เป็นปลายทางจริง
    }, 3000); // 3 วินาที

    return () => clearTimeout(timer); // เคลียร์ Timeout เมื่อ Component ถูกถอด
  }, []);

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='text-center p-6 bg-white border border-gray-200 rounded-lg shadow-md max-w-sm w-full'>
        {/* Logo */}
        <div className='mb-4'>
          <img
            src='https://i.imgur.com/QOWdiPl.png'
            alt='Edugo Logo'
            className='w-24 mx-auto'
          />
        </div>

        {/* ข้อความ */}
        <h1 className='text-xl font-semibold text-gray-800 mb-2'>
          ขอบคุณที่เลือก Edugo Thailand
        </h1>
        <p className='text-sm text-gray-600 mb-4'>
          กำลังพาคุณไปยังแพลตฟอร์มของเรา...
        </p>
        {/* Loader */}
        <div className='flex justify-center items-center'>
          <div className='loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin'></div>
        </div>
      </div>
    </div>
  );
};

export default RedirectPage;
