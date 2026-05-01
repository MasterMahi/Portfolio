import { useEffect, useState } from 'react';

const Loader = () => {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFade(true), 2000);
    const timer2 = setTimeout(() => setShow(false), 2800);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  if (!show) return null;

  return (
    <div className="loader" style={{ opacity: fade ? 0 : 1, transition: 'opacity 0.8s ease' }}>
      <div className="loader-initials">MG</div>
      <div className="loader-bar"><div className="loader-progress"></div></div>
    </div>
  );
};

export default Loader;
