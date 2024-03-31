function collectData() {
    const form = document.forms[0].elements;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
  
    const user = {
      firstName,
      lastName,
      age

    };
    return user;
  }