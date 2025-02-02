import React from 'react';
import star from '../assets/images/Star.png';

export default function Stay() {
  return (
    <div className="gap-5 pb-20 sm:pb-5 sm:pl-40 md:pl-20 bg-gradient-to-b from-black to-[#120226] min-h-screen max-h-max flex flex-col p-5 items-center">
      <img src={star} className="w-7 sm:w-10" alt="Star Icon" />
      <p className="font-header text-title text-2xl sm:text-4xl text-center">
        Rules & Regulations
      </p>

      <div className="mt-5 max-w-4xl font-exo text-white text-lg sm:text-2xl space-y-4">
        <p>1. The visitors who want to participate must fill out the Google Form.</p>
        <p>2. Accommodation is available for only Non-Local Students.</p>
        <p>3. Spot registration for hostel accommodation may or may not be accepted based on room availability.</p>
        <p>4. Room allotment will be done on a first-come, first-serve basis as there are only a few rooms available.</p>
        <p>5. After registering for their stay on campus, students will be provided with a registration slip, which they need to submit when visiting the campus to receive their visiting ID cards.</p>
        <p>6. Accommodation will be provided with one iron cot, mattress, and one cupboard based on availability.</p>
        <p>7. Registration will begin on February 1, 2025, and the registration portal will close when all the rooms are filled.</p>
        <p>8. Visitors should carry their college ID Card and any government ID Card (such as an Aadhaar card, driving license, PAN Card, etc.)—both original and photocopy—and two passport-size photographs.</p>
        <p>9. The registration fee for staying on campus is ₹150 per day excluding food, and the payment can be done through cash/UPI.</p>
        <p>10. Visitors are responsible for their own valuables and must bring their own lock & keys.</p>
        <p>11. Visitors are not allowed to carry any electrical gadgets like an iron box, electric kettle, immersion rod, etc.</p>
        <p>12. The room will be on a sharing basis.</p>
        <p>13. No visitors will be allowed to stay after 10:00 AM on February 9, 2025.</p>
        <p>
          14. All the guests have to strictly adhere to the institute's rules, regulations, and guidelines.{' '}
          <a target="blank" href="https://nitandhra.ac.in/main/Announcements/2023/security%20guideline%20for%20students%20(1)%20(1)%20(1).pdf" className="text-title underline">
            Institute Guidelines
          </a>
        </p>
        <p>
          15. Those who successfully got accommodation are allowed to stay in the event after 17:00, and those who failed to get accommodation are permitted to stay in the fest only till 17:00.
        </p>
      </div>

      {/* Buttons for Accommodation and Visitors */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="https://forms.gle/12nAMaZhJhc3Vn1R9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-title hover:bg-title/90 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center text-lg"
        >
          Register for Accommodation
        </a>
        <a
          href="https://forms.gle/u5YioDBZNfFZEBjW8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-title hover:bg-title/90  text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 text-lg text-center"
        >
          Register as a Visitor
        </a>
      </div>
    </div>
  );
}
