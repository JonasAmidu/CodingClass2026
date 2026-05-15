(function () {
  const form = document.querySelector("#signup");
  const status = document.querySelector("#form-status");

  if (!form || !status) {
    return;
  }

  const endpoint = form.getAttribute("action") || "";
  const provider = form.dataset.formProvider || "";
  const endpointIsConfigured = endpoint && !endpoint.includes("YOUR_FORM_ID");

  function setStatus(message, type) {
    status.textContent = message;
    status.classList.remove("is-error", "is-success");

    if (type) {
      status.classList.add(type);
    }
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    setStatus("", null);

    if (!form.reportValidity()) {
      return;
    }

    if (!endpointIsConfigured) {
      setStatus("The signup form needs a configured form endpoint before it can collect responses.", "is-error");
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    const formData = new FormData(form);
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      if (provider === "google-forms") {
        await fetch(endpoint, {
          method: "POST",
          body: formData,
          mode: "no-cors"
        });
      } else {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Signup request failed");
        }
      }

      form.reset();
      setStatus("Thanks. You are on the update list.", "is-success");
    } catch (error) {
      setStatus("We could not send the form. Please try again later.", "is-error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Join the update list";
    }
  });
})();
