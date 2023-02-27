export function placehold() {
  const formBlock = document.forms.main;

  const inputFirstName = formBlock.firstName;
  const inputLastName = formBlock.lastName;
  const inputEMail = formBlock.eMail;
  const inputPhone = formBlock.phone;
  const inputTextArea = formBlock.textArea;

  for (const item of formBlock) {
    const placeInput = item.placeholder;
    item.addEventListener("focus", () => {
      item.placeholder = "";
      if (item.nextElementSibling) {
        item.nextElementSibling.remove();
        item.classList.remove('input-err');
      }
    });
    item.addEventListener("blur", () => {
      item.placeholder = placeInput;
    });
  }

  formBlock.addEventListener("submit", async e => {
    e.preventDefault();
    let error = 0;
    for (const item of formBlock) {
      const nameField = item.placeholder;
      if (item.value.trim() === '') {
        if (item.nextElementSibling) {
          item.nextElementSibling.remove();
        }
        if (item === inputTextArea) {
          item.insertAdjacentHTML("afterEnd", `
          <div class="err">
          Enter ${nameField.toLowerCase()}
          </div>`);
          item.classList.add('input-err');
          error++;
        } else {
          item.insertAdjacentHTML("afterEnd", `
          <div class="err">
          Enter your ${nameField}!
          </div>`);
          item.classList.add('input-err');
          error++;
        }

      } else if (item === inputFirstName || item === inputLastName) {
        if (!(/^[a-zA-Zа-яА-Я]*$/.test(item.value))) {
          if (item.nextElementSibling) {
            item.nextElementSibling.remove();
          }
          item.insertAdjacentHTML("afterEnd", `
          <div class="err">
            Your ${nameField} must contain only letters!
          </div>`);
          item.classList.add('input-err');
          error++;
        }
      } else if (item === inputEMail) {
        if ((!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(item.value))) {
          if (item.nextElementSibling) {
            item.nextElementSibling.remove();
          }
          item.insertAdjacentHTML("afterEnd", `
          <div class="err">
            Your ${nameField} is entered incorrectly!
          </div>`);
          item.classList.add('input-err');
          error++;
        }
      } else if (item === inputPhone) {
        if (!(/^(\+[1-9]|[1-9])?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(item.value))) {
          if (item.nextElementSibling) {
            item.nextElementSibling.remove();
          }
          item.insertAdjacentHTML("afterEnd", `
          <div class="err">
            Your ${nameField} is entered incorrectly!
          </div>`);
          item.classList.add('input-err');
          error++;
        }
      }
    }

    if (error === 0) {
      const formData = new FormData(formBlock);

      // Отправка формы на почту через AJAX (fetch)
      const response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        formBlock.reset();
      } else {
        alert('Ошибки');
      }
    }
  });
}