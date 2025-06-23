const Contact = () => {
  return (
    <div>
      <form className='flex items-center justify-center my-10'>
        <div className='bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-4 border border-gray-200'>
          <h2 className='text-2xl font-bold text-gray-800 text-center'>
            Contact Us
          </h2>

          <input
            placeholder='Your Name'
            className='w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400'
          />

          <textarea
            placeholder='Your Message'
            rows='4'
            className='w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none'
          />

          <button
            type='submit'
            className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
