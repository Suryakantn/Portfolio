import React from 'react';

function Extra() {
  return (
    <div className="personal-note reveal">
      <div>
        <p className="eyebrow">A bit more about me</p>
        <h2>Good work.<br /><span>Good people.</span><br />Good music.</h2>
      </div>
      <div className="personal-details">
        <div>
          <h3>Languages</h3>
          <p>English <span>·</span> Hindi <span>·</span> Marathi</p>
        </div>
        <div>
          <h3>When I’m away from code</h3>
          <p>Music <span>·</span> Dance <span>·</span> Cricket <span>·</span> Sci-fi</p>
        </div>
      </div>
      <span className="note-spark" aria-hidden="true">✳</span>
    </div>
  );
}

export default Extra;
