const Contact = () => {
  return (
    <div>
      <h2 className=' m-4 p-4 text-2xl'>This is contact us page</h2>
      <form>
        <input placeholder='name' className='border-gray-700'></input>
        <input placeholder='message' className='border-gray-700'></input>
        <button className='border-gray-700 rounded-2xl m-3'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
