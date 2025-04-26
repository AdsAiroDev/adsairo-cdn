// Banner-ads.js

(function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  const adContainer = document.createElement('div');
  adContainer.innerHTML = `
    <!-- Ad Unit -->
    <div id="customAd728x90" style="width:728px; height:90px; border:1px solid #d3d3d3; border-radius:6px; overflow:hidden; position:relative; font-family: Arial, sans-serif; background:#f9f9f9;">
      <div style="position:absolute; top:6px; right:6px; display:flex; gap:0px; align-items:center; z-index:10;">
        <div onclick="showAdFeedback()" title="Ad Info" style="cursor:pointer; width:22px; height:22px; display:flex; align-items:center; justify-content:center; background:#ffffff; border-radius:4px; box-shadow: 0 1px 2px rgba(0,0,0,0.2);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="12" height="12">
            <path fill="#1a73e8" d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"/>
          </svg>
        </div>
        <div onclick="showAdFeedback()" title="Close Ad" style="cursor:pointer; width:22px; height:22px; display:flex; align-items:center; justify-content:center; background:#ffffff; border-radius:4px; box-shadow: 0 1px 2px rgba(0,0,0,0.2); margin-left:4px;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="12" height="12">
            <path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5" stroke="#1a73e8" stroke-width="1.5" fill="none"/>
          </svg>
        </div>
      </div>
      <a href="https://www.adsairo.com" target="_blank" style="display:block; height:100%; width:100%;">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmL32rwX-S3QOwWL0v_v3NkkA1x3QZxPaXGG832oZgAnDXUB3nQ6d3PMbBx_RtXyvIhXKpUKImcUR-TFe8OiBuj0cOedY82KMCZCWuN2rjtgp0eZe66-2kzjp2eeL6wdHzF4KacR7tdND3Sk7bT_ks883dG8d2WZNcicEYF_vmeP7I6drOWoNGmPAWwI/s1600/MonetizeyourblogtodaywithAdsAiro-ezgif.com-video-to-gif-converter.gif" alt="Ad" style="width:100%; height:100%; object-fit:cover;">
      </a>
    </div>

    <!-- Feedback Box -->
    <div id="adFeedbackBox" style="display:none; width:728px; border:1px solid #d3d3d3; border-radius:6px; font-family: Arial, sans-serif; padding:10px; margin-top:8px; background:#fff; font-size:13px; color:#444; text-align:center;">
      <div id="adsByLogo" style="margin-bottom:10px; display:flex; align-items:center; justify-content:center; gap:6px; color:#000000; font-weight:bold;">
        <span>Ads by</span>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIzRgJuKvuTYOG6Q68jUzJPekP3kMeqrxN2qPnKXhES0XgBVFQeMR3hglGO9QwXoQd_CIZbmvRr6ywPfETsd9zKTejLz16z9zMiS9Slij150GzouxjHTjyfVv6uXmcbttDAPMv6maWSMOa9vyi7LppUYgmwM1BWinbXHvEj0-LMJXqwlNhoivw6UTKKnrL/s1600/PSKathait_dark.png" alt="logo" style="width:65px; height:auto;">
      </div>
      <div id="feedbackButtons" style="display:flex; justify-content:center; gap:10px; margin-bottom:15px;">
        <a href="#" onclick="showFeedbackOptions(); return false;" style="background-color:#4285f5; color:#fff; padding:6px 12px; border-radius:4px; text-decoration:none; font-weight:bold;">Send feedback</a>
        <a href="https://www.adsairo.com/p/about-this-ad.html" target="_blank" style="background-color:#fff; color:#9e9ea6; padding:6px 12px; border-radius:4px; text-decoration:none;">Why this ad?</a>
      </div>
      <div id="feedbackOptions" style="display:none; justify-content: center; align-items: center; gap:10px; padding:10px;">
        <div onclick="handleFeedbackClick()" style="cursor:pointer;">Not interested in this ad</div>
        <div onclick="handleFeedbackClick()" style="cursor:pointer;">Ad was inappropriate</div>
        <div onclick="handleFeedbackClick()" style="cursor:pointer;">Seen this ad multiple times</div>
      </div>
      <div id="feedbackThanks" style="display:none; font-size:16px; font-weight:bold;">Thanks. Feedback improves AdsAiro ads</div>
      <div id="adClosedBy" style="display:none; font-size:16px; color:#888;">Ad closed by AdsAiro</div>
    </div>
  `;
  document.body.appendChild(adContainer);

  window.showAdFeedback = function () {
    document.getElementById('customAd728x90').style.display = 'none';
    document.getElementById('adFeedbackBox').style.display = 'block';
  };

  window.showFeedbackOptions = function () {
    document.getElementById('feedbackOptions').style.display = 'flex';
    document.getElementById('feedbackButtons').style.display = 'none';
    document.getElementById('adsByLogo').style.display = 'none';
  };

  window.handleFeedbackClick = function () {
    const thanks = document.getElementById('feedbackThanks');
    const closedBy = document.getElementById('adClosedBy');
    document.getElementById('feedbackOptions').style.display = 'none';
    thanks.style.display = 'block';
    thanks.style.animation = 'slideUp 0.8s forwards';
    thanks.style.opacity = 1;
    setTimeout(() => {
      thanks.style.display = 'none';
      closedBy.style.display = 'block';
      closedBy.style.animation = 'slideUp 0.8s forwards';
      closedBy.style.opacity = 1;
    }, 1500);
    setTimeout(() => {
      document.getElementById('adFeedbackBox').style.display = 'none';
    }, 4000);
  };
})();
