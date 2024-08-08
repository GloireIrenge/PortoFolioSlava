import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-4">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
