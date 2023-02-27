export const maskPhone = () => {
  const elems = document.querySelectorAll('input[type=tel]');
  const inputs = document.querySelectorAll('input[type=text]');

  const mask = function (e) {
    const keyCode = e.keyCode;
    const template = '+7 (___) ___-__-__';
    const def = template.replace(/\D/g, "");
    const val = this.value.replace(/\D/g, "");

    let i = 0;
    let newValue = template.replace(/[_\d]/g, a => i < val.length ? val.charAt(i++) || def.charAt(i) : a);

    i = newValue.indexOf("_");

    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }

    let reg = template.substr(0, this.value.length)
      .replace(/_+/g, a => "\\d{1," + a.length + "}")
      .replace(/[+()]/g, "\\$&");

    reg = new RegExp("^" + reg + "$");

    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }

    if (e.type === "blur" && this.value.length < 5) {
      this.value = "";
    }

  };

  for (const elem of elems) {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }

  inputs.forEach(elem => {
    elem.addEventListener('blur', e => {
      // e.target.value = e.target.value.replace(/[^а-я\s]+/gi, '');
      e.target.value = e.target.value.replace(/\s+/g, ' ');
      e.target.value = e.target.value.replace(/[\s\-\(\)\+]+$/g, '');
      e.target.value = e.target.value.replace(/^([а-яa-z])([a-я\s]+)/gi, (str, $1, $2) => {
        return `${$1.toUpperCase()}${$2.toLowerCase()}`;
      });
    });
  });
};