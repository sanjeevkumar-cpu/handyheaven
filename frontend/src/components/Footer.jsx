import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import axios from 'axios';

const Footer = () => {

    const [email, setEmail] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/subscriber`, { email });
          enqueueSnackbar(`Subscription successful: ${response.data.email}`, { variant: 'success' });
          setEmail('');
        } catch (error) {
            console.error('Error subscribing:', error);
            enqueueSnackbar('Error subscribing: ' + error.response.data, { variant: 'error' });
        }
      };
    

  return (
<footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <h2 className='text-3xl'>Handy Heaven</h2>
    <p>Providing reliable handycrafts since 2024</p>
  </aside> 
  <nav>
  <h6 className="footer-title">Social</h6>
<div className="grid grid-flow-col gap-4">
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/SanjeevKumar2003/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.107-.895-2-2-2s-2 .893-2 2v4.5h-3v-9h3v1.353c.786-.968 2.089-1.353 3-1.353 2.209 0 4 1.791 4 4v5z"/>
    </svg>
  </a>

  {/* GitHub */}
  <a href="https://github.com/sanjeevkumar-cpu" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
      <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.521.116-3.168 0 0 1.008-.322 3.301 1.23.958-.266 1.983-.399 3.003-.404 1.02.005 2.045.138 3.004.404 2.29-1.552 3.298-1.23 3.298-1.23.653 1.647.241 2.865.118 3.168.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.104.823 2.223 0 1.604-.015 2.896-.015 3.293 0 .319.216.694.825.576 4.765-1.589 8.202-6.086 8.202-11.385 0-6.627-5.373-12-12-12z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/sanjeevdadwal00/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.318.974.974 1.256 2.241 1.318 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.318 3.608-.974.974-2.241 1.256-3.608 1.318-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.342-3.608-1.318-.974-.974-1.256-2.241-1.318-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.342-2.633 1.318-3.608.974-.974 2.241-1.256 3.608-1.318 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.545.07-2.921.354-4.002 1.434-1.081 1.081-1.365 2.457-1.434 4.002-.06 1.281-.072 1.688-.072 4.947s.012 3.667.072 4.947c.07 1.545.354 2.921 1.434 4.002 1.081 1.081 2.457 1.365 4.002 1.434 1.281.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.545-.07 2.921-.354 4.002-1.434 1.081-1.081 1.365-2.457 1.434-4.002.06-1.281.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.07-1.545-.354-2.921-1.434-4.002-1.081-1.081-2.457-1.365-4.002-1.434-1.281-.06-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.163 2.76-6.163 6.163s2.76 6.163 6.163 6.163 6.163-2.76 6.163-6.163-2.76-6.163-6.163-6.163zm0 10.163c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.442-.646-1.442-1.442s.646-1.442 1.442-1.442 1.442.646 1.442 1.442-.646 1.442-1.442 1.442z"/>
    </svg>
  </a>
</div>

  </nav>
  <nav>
    <h6 className="footer-title">Support</h6> 
    <a className="link link-hover">sk8463315@gmail.com</a>
  </nav> 
  <form onSubmit={handleSubscribe}>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input 
            type="email" 
            placeholder="username@site.com" 
            className="input input-bordered join-item"     
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required/> 
        <button type="submit" className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer