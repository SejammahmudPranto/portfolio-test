import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.css';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
      // console.log({data});
    });
  }, []);

  return (
    <>
      <h2 className="head-text head-text-2">We all know <span>Good Website</span> <br />means  <span>Good Business</span></h2>
      <h2 className="head-text head-text-2" style={ {marginTop: "5rem"} }>Who am <span>I?</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <div style={{padding : "0 0.5rem"}}>
              <h2 className="bold-text" style={{ marginTop: 20 , minHeight : "2.5rem"}}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
