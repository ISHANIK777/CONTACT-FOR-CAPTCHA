(function() {
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchavalue = "";
  
    function generateCaptcha() {
      let value = btoa(Math.random() * 1000000000);
      value = value.substr(0,5+Math.random() *5);
      captchavalue = value;
    }
  
    function setcaptcha() {
      let html = captchavalue
        .split("")
        .map((char) => {
          const rotate = -20 + Math.trunc(Math.random() * 30);
          const font = Math.trunc(Math.random() * fonts.length);
          return `<span style="transform:rotate(${rotate}deg);font-family:${fonts[font]};">${char}</span>`;
        })
        .join("");
      document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }
  
    function initCaptcha() {
      document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function() {
        generateCaptcha();
        setcaptcha();
      });
      generateCaptcha();
      setcaptcha();
    }
  
    initCaptcha();
  
    document.querySelector(".login-form #login-btn").addEventListener("click", function() {
      let inputCaptchavalue = document.querySelector(".login-form .captcha-input").value;
      if (inputCaptchavalue === captchavalue) {
        Swal("", "Logging In", "success");
      } else {
        Swal("Invalid captcha");
      }
    });
  })();
  