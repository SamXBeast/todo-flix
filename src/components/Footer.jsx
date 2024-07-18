import React from 'react';

function Footer() {
  return (
    <footer className="bg-netflixGray text-netflixWhite p-4 -mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          {' | '}
          <a href="#" className="hover:underline">Privacy Policy</a>
          {' | '}
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="mb-4">
          <a href="#" className="hover:underline">Facebook</a>
          {' | '}
          <a href="#" className="hover:underline">Twitter</a>
          {' | '}
          <a href="#" className="hover:underline">Instagram</a>
        </div>
        <div className="text-sm">&copy; 2024 To-Do Flix. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
