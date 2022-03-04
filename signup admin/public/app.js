
   
"use strict";
// login validations

let display = () => {
  let uname = document.querySelector("#uname");
  let pass = document.querySelector("#pass");
  let alertbox = document.querySelector("#alert-login-box");
  let close = document.querySelector("#close-login-popup");
  let albel = document.querySelector("#unamelabel");
  if (uname.value == "" || uname.value == null) {
    alertbox.classList.remove("d-none");
    uname.style.border = "2px solid red";
    albel.classList.remove("mt-3");
    close.addEventListener("click", () => {
      alertbox.classList.add("d-none");
      uname.style.border = "";
      albel.classList.add("mt-3");
    });
  }
  if (pass.value == "" || pass.value == null) {
    alertbox.classList.remove("d-none");
    pass.style.border = "2px solid red";
    albel.classList.remove("mt-3");
    close.addEventListener("click", () => {
      alertbox.classList.add("d-none");
      pass.style.border = "";
      albel.classList.add("mt-3");
    });
  }

  if (!uname.value == "" && !pass.value == "") {
    let condition1,condition2;
    let unamealert = document.querySelector("#uname-regex-error");
    let passalert = document.querySelector("#pass-regex-error");
    let unamedata = JSON.parse(localStorage.getItem("alldata"));
    if (!unamedata) {
      alert("local storage is empty please sign up first <3");
      location.reload();
    } else {
      for (let i = 0; i < unamedata.length; i++) {
        if (uname.value == unamedata[i][0] && pass.value==unamedata[i][5]) 
        {
          condition1 = true;
          condition2 = true;
          break;
        }
        else if (uname.value == unamedata[i][0] && pass.value!=unamedata[i][5])  
        {
          condition1=true;
          pass.style.border = "1px solid red";
          passalert.style.display = "block";
        }
        else if (uname.value != unamedata[i][0] && pass.value==unamedata[i][5]) 
        {
          condition2 = true;
          uname.style.border = "1px solid red";
          unamealert.style.display = "block";
          break;
        }
      }
      if(condition1==true && condition2==true){
        let success = document.querySelector("#login-success");
        success.classList.remove("d-none");
        setTimeout(()=>{
          uname.value="";
          pass.value="";
          success.classList.add("d-none");
          },2000)
          uname.style.border = "";
          unamealert.style.display = "none";
          pass.style.border = "";
          passalert.style.display = "none";
      }
    }
  }
};
// let uname = document.querySelector("#uname");
// let uname_regex = /^([a-zA-z]+\s+[a-zA-z]{1,})$/;

// uname.onkeyup = () => {
//   let unamealert = document.querySelector("#uname-regex-error");
//   if (!uname.value == "") {
//     if (uname.value.match(uname_regex) == null) {
//       unamealert.style.display = "block";
//     } else if (uname.value.match(uname_regex)) {
//       unamealert.style.display = "none";
//     }
//   } else {
//     unamealert.style.display = "none";
//   }
// };
// let pass = document.querySelector("#pass");
// pass.onkeyup = () => {
//   let pass_regex = /^([1-zA-Z0-1@.\s]{5,255})$/;
//   //   Password matching expression. Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.
//   let passalert = document.querySelector("#pass-regex-error");
//   if (!pass.value == "") {
//     if (pass.value.match(pass_regex) == null) {
//       passalert.style.display = "block";
//     } else if (pass.value.match(uname_regex)) {
//       passalert.style.display = "none";
//     }
//   } else {
//     passalert.style.display = "none";
//   }
// };

// signup validations
let show = () => {
  let inputs = document.querySelectorAll(".input-check");
  let gendermale = document.querySelector("#male");
  let genderfemale = document.querySelector("#female");
  let country = document.querySelector("#country");
  let password = document.querySelector("#password");
  let confirm_password = document.querySelector("#confirm-password");
  let agree = document.querySelector("#agree");
  for (let i = 0; i < inputs.length; i++) {
    let alert = document.querySelectorAll("#empty-error");
    // var ipvalue = inputs[i].value;
    if (inputs[i].value == "" || inputs[i].value == null) {
      for (let j = 0; j < alert.length; j++) {
        inputs[i].style.border = "2px solid red";
        let alert = document.querySelector("#alert-box");
        let margin = document.querySelector("#remove-margin");
        alert.classList.remove("d-none");
        margin.classList.remove("mt-3");
        let close = document.querySelector("#close-popup");
        close.addEventListener("click", () => {
          alert.classList.add("d-none");
          margin.classList.add("mt-3");
          inputs[i].style.border = "";
        });
      }
    }
    if (country.selectedIndex == 0) {
      let countryalert = document.querySelector("#country-empty-error");
      countryalert.style.display = "block";
      country.style.border = "2px solid red";
      let alert = document.querySelector("#alert-box");
      let margin = document.querySelector("#remove-margin");
      alert.classList.remove("d-none");
      margin.classList.remove("mt-3");
      let close = document.querySelector("#close-popup");
      close.addEventListener("click", () => {
        alert.classList.add("d-none");
        margin.classList.add("mt-3");
        countryalert.style.display = "none";
        country.style.border = "";
      });
    }

    if (!genderfemale.checked && !gendermale.checked) {
      let genderalert = document.querySelector("#gender-empty-error");
      genderalert.style.display = "block";
      let alert = document.querySelector("#alert-box");
      let margin = document.querySelector("#remove-margin");
      alert.classList.remove("d-none");
      margin.classList.remove("mt-3");
      let close = document.querySelector("#close-popup");
      close.addEventListener("click", () => {
        alert.classList.add("d-none");
        margin.classList.add("mt-3");
        genderalert.style.display = "none";
      });
    }
    if(password.value=="" || confirm_password.value=="")
    {
      let passwordalert = document.querySelector("#password-regex-error");  
      let confirmpasswordalert = document.querySelector("#confirm-password-regex-error");  
      passwordalert.style.display = "block";
      confirmpasswordalert.style.display = "block";
      let alert = document.querySelector("#alert-box");
      let margin = document.querySelector("#remove-margin");
      alert.classList.remove("d-none");
      margin.classList.remove("mt-3");
      let close = document.querySelector("#close-popup");
      close.addEventListener("click", () => {
        alert.classList.add("d-none");
        margin.classList.add("mt-3");
        passwordalert.style.display = "none";
        confirmpasswordalert.style.display = "none";});
    }
    // if(password.value != confirmpassword.value){
    //   let passwordalert = document.querySelector("#password-regex-error");  
    //   let confirmpasswordalert = document.querySelector("#confirm-password-regex-error");  
    //   passwordalert.style.display = "block";
    //   passwordalert.textContent = "password is not amtching.";
    //   confirmpasswordalert.style.display = "block";
    //   confirmpasswordalert.textContent= "password is not matching.";
    //   let alert = document.querySelector("#alert-box");
    //   let margin = document.querySelector("#remove-margin");
    //   alert.classList.remove("d-none");
    //   margin.classList.remove("mt-3");
    //   let close = document.querySelector("#close-popup");
    //   close.addEventListener("click", () => {
    //     alert.classList.add("d-none");
    //     margin.classList.add("mt-3");
    //     passwordalert.style.display = "none";
    //     confirmpasswordalert.style.display = "none";});
    // }
    if (!agree.checked) {
      let agreealert = document.querySelector("#agree-empty-error");
      agreealert.style.display = "block";
      let alert = document.querySelector("#alert-box");
      let margin = document.querySelector("#remove-margin");
      alert.classList.remove("d-none");
      margin.classList.remove("mt-3");
      let close = document.querySelector("#close-popup");
      close.addEventListener("click", () => {
        alert.classList.add("d-none");
        margin.classList.add("mt-3");
        agreealert.style.display = "none";
      });
    }
    
  }
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let phone = document.querySelector("#phone").value;
  let email = document.querySelector("#email").value;
  let password1 = document.querySelector("#password").value;
  let a = JSON.parse(localStorage.getItem("alldata")) || [];
  let gender;
  if (
    fname.match(/^([a-zA-zs]){3,}$/) &&
    lname.match(/^([a-zA-zs]){3,}$/) &&
    phone.match(/(^[6-9]{1})([0-9]{9})+$/) &&
    email.match(/^[^0-9][a-zA-Z0-9+_.-]+@[a-zA-Z.-]+$/) &&

    password1.match(/([^a-z])([\w]{6,})/)
  ) {
    let gendermale = document.querySelector("#male");
    // let genderfemale = document.querySelector("#female");
    let country = document.querySelector("#country").value;
    if (gendermale.checked) {
      gender = "male";
    } else {
      gender = "female";
    }
    let d = [
      `${fname} ${lname}`,
      `${phone}`,
      `${email}`,
      `${gender}`,
      `${country}`,
      `${password1}`
    ];
    a.push(d);
    localStorage.setItem("alldata", JSON.stringify(a));
    alert("signup successfull");
    location.reload();
    // location.href = "userinfo.html"
  }
};

let fname = document.querySelector("#fname");
let fname_regex = /^([a-zA-zs]){1,}$/;

// oninput="this.value = this.value.replace(/[^A-Za-z .]/g, '');"
fname.oninput = () => {
  // oninput="this.value = this.value.replace(/[^A-Za-z .]/g, '');"
  let fnamealertt = document.querySelector("#name-regex-error");

  fname.value = fname.value.replace(/[^A-Za-z .]/g, "");
  if (fname.value) {
    fnamealertt.style.display = "none";
  } else {
    fnamealertt.style.display = "block";
    fnamealertt.textContent = "only characters are allowed";
  }
};
fname.onkeyup = () => {
  let fnamealert = document.querySelector("#name-regex-error");
  if (!fname.value == "") {
    if (fname.value.match(fname_regex) == null) {
      fnamealert.style.display = "block";
      fnamealert.textContent =
        "First name must contain only characters and no symbols or numbers.";
      document.querySelector("#signup").setAttribute("disabled", "true");
    } else if (fname.value.match(fname_regex)) {
      fnamealert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    } else {
      fnamealert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    }
  } else {
    fnamealert.style.display = "none";
    document.querySelector("#signup").removeAttribute("disabled", "true");
  }
};

let lname = document.querySelector("#lname");
let lname_regex = /^([a-zA-zs]){1,}$/;

lname.onkeyup = () => {
  let lnamealert = document.querySelector("#name-regex-error");
  if (!lname.value == "") {
    if (lname.value.match(lname_regex) == null) {
      lnamealert.style.display = "block";
      lnamealert.textContent =
        "Last name must contain only characters and no number or symbols.";
      document.querySelector("#signup").setAttribute("disabled", "true");
    } else if (lname.value.match(lname_regex)) {
      lnamealert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    } else {
      lnamealert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    }
  } else {
    lnamealert.style.display = "none";
    document.querySelector("#signup").removeAttribute("disabled", "true");
  }
};
lname.oninput = () => {
  // oninput="this.value = this.value.replace(/[^A-Za-z .]/g, '');"
  let lnamealertt = document.querySelector("#name-regex-error");

  lname.value = lname.value.replace(/[^A-Za-z .]/g, "");
  if (lname.value) {
    lnamealertt.style.display = "none";
  } else {
    lnamealertt.style.display = "block";
    lnamealertt.textContent = "only characters are allowed";
  }
};

let phone = document.querySelector("#phone");
let phone_regex = /(^[6-9]{1})([0-9]{9})+$/;
phone.onkeyup = () => {
  let phonealert = document.querySelector("#phone-regex-error");
  if (!phone.value == "") {
    if (phone.value.match(phone_regex) == null) {
      phonealert.style.display = "block";
      document.querySelector("#signup").setAttribute("disabled", "true");
    } else if (phone.value.match(phone_regex)) {
      phonealert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    } else {
      phonealert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    }
  } else {
    phonealert.style.display = "none";
    document.querySelector("#signup").removeAttribute("disabled", "true");
  }
};
phone.oninput = () => {
  // oninput="this.value = this.value.replace(/[^A-Za-z .]/g, '');"
  let phonealertt = document.querySelector("#phone-regex-error");
  phone.value = phone.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
  if (phone.value) {
    phonealertt.style.display = "none";
  } else {
    phonealertt.style.display = "block";
    phonealertt.textContent = "only numbers are allowed";
  }
};

let email = document.querySelector("#email");
let email_regex = /^[^0-9][a-zA-Z0-9+_.-]+@[a-zA-Z.-]+$/;
email.onkeyup = () => {
  let emailalert = document.querySelector("#email-regex-error");
  if (!email.value == "") {
    if (email.value.match(email_regex) == null) {
      emailalert.style.display = "block";
      document.querySelector("#signup").setAttribute("disabled", "true");
    } else if (email.value.match(email_regex)) {
      emailalert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    }
  } else {
    emailalert.style.display = "none";
    document.querySelector("#signup").removeAttribute("disabled", "true");
  }
};


// let passwordalert = document.querySelector("#password-regex-error");  
let password = document.querySelector("#password");  

let password_regex = /([^a-z])([\w]{6,})/;



password.onkeyup = () =>{
  let passwordalert = document.querySelector("#password-regex-error");
  if (!password.value == "") {
    if (password.value.match(password_regex) == null) {
      passwordalert.style.display = "block";
      passwordalert.textContent = "enter valid passowrd ps. password must contain minimun 6 character with one numeric, capital and small letter"
      document.querySelector("#signup").setAttribute("disabled", "true");
    } else if (password.value.match(password_regex)) {
      passwordalert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    }
  } else {
    passwordalert.style.display = "none";
    document.querySelector("#signup").removeAttribute("disabled", "true");
  } 
}

let confirmpassword = document.querySelector("#confirm-password");  

confirmpassword.onkeyup = () =>{
  let confirmpasswordalert = document.querySelector("#confirm-password-regex-error");
  let password = document.querySelector("#password");  
  if (!confirmpassword.value == "") {
    if (confirmpassword.value!=password.value) 
    {
      confirmpasswordalert.style.display = "block";
      confirmpasswordalert.textContent = "password is not matching."
      document.querySelector("#signup").setAttribute("disabled", "true");
    } else if (confirmpassword.value.match(password_regex)) {
      confirmpasswordalert.style.display = "none";
      document.querySelector("#signup").removeAttribute("disabled", "true");
    }
  } else {
    confirmpasswordalert.style.display = "block";
    document.querySelector("#signup").removeAttribute("disabled", "true");
  } 
}
