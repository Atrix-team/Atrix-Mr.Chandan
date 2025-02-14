import React, { useEffect, useState } from 'react';
import './Cardcon.css';

const Cardcon = () => {
  const count = [
    {
      number: 28,
      text: 'designers and developers',
  
    },
    {
      number: 328,
      text: 'awards for digital innovation',

    },
    {
      number: 2999,
      text: 'happy customers',

    },
    {
      number: 105,
      text: 'projects delivered',
    }
  ];

  const [counts, setCounts] = useState(count.map(item => ({ ...item, current: 0 })));

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map(item => {
          if (item.current < item.number) {
            return { ...item, current: item.current + Math.ceil(item.number / 50) };
          }
          return item;
        })
      );
    }, 50);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="count-section">
      <div className="count-section-inner">
        {counts.map((item, index) => (
          <div
            key={index}
            className={`count-item ${item.bgClass} ${item.colorclass}`}
          >
            <div className={`count-item-content ${item.width}`}>
              <span className="count-item-number">{item.current}+ </span>
              <h2 className="count-item-text">{item.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardcon;
