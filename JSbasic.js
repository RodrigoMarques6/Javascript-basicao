
const returnInteger1 = () => {
    const btn1Section1 = document.querySelector("#btn1-section1");
    btn1Section1.addEventListener("click", function (e) {
      transformToInteger();
      result1();
      e.preventDefault();
    });
  
    let transformToInteger = () => {
      const input1 = document.querySelector("#input1");
      let result1 = Math.round(input1.value);
      return result1;
    };
  
    let result1 = () => {
      const p1 = document.querySelector("#p1");
      p1.innerText = `O resultado é ${transformToInteger()}.`;
    };
  };
  returnInteger1();
  
  const returnInteger2 = () => {
    const btn2Section1 = document.querySelector("#btn2-section1");
    btn2Section1.addEventListener("click", (e) => {
      transformToSmall();
      result2();
      e.preventDefault();
    });
  
    let transformToSmall = () => {
      const input2 = document.querySelector("#input2");
      const number = Math.floor(input2.value);
      return number;
    };
  
    let result2 = () => {
      const p2 = document.querySelector("#p2");
      p2.innerText = `O resultado é ${transformToSmall()}.`;
    };
  };
  returnInteger2();
  
  
  const returnInteger3 = () => {
  
  const btn3Section1 = document.querySelector("#btn3-section1");
  btn3Section1.addEventListener('click', (e) => {
      transformToBig();
      result3();
      e.preventDefault();
  })
  
  const transformToBig = () => {
      const input3 = document.querySelector('#input3');
      const result3 = Math.ceil(input3.value);
      return result3
  }
  
  const result3 = () => {
      const p3 = document.querySelector('#p3');
      p3.innerText = `O resultado é ${transformToBig()}.`
  }
  };
  
  returnInteger3()