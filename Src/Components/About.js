import User from './User';
import UserClass from './UserClass';
const about = () => {
  return (
    <div className='min-h-screen bg-orange-50 flex items-center justify-center px-4 py-10'>
      <div className='bg-white max-w-2xl w-full p-8 rounded-xl shadow-md border border-gray-200'>
        <h1 className='text-3xl font-bold text-orange-600 mb-4 text-center'>
          About QuickBite
        </h1>
        <p className='text-gray-700 leading-relaxed mb-4 text-center'>
          <span className='font-semibold'>QuickBite</span> is your fast and
          reliable food ordering app, delivering hot and delicious meals from
          your favorite local restaurants — right to your doorstep.
        </p>
        <p className='text-gray-700 leading-relaxed text-center'>
          Whether you're craving a spicy biryani 🍛, cheesy pizza 🍕, or healthy
          salad 🥗, QuickBite brings a wide variety of cuisines at your
          fingertips. With a clean interface, real-time tracking, and secure
          payments, QuickBite ensures a smooth and satisfying food ordering
          experience.
        </p>
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-400'>
            Made with ❤️ using React & Tailwind CSS by Varsha Kadge
          </p>
          <p className='text-sm text-gray-400'>
            © 2025 QuickBite. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
