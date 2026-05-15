# Signup Form Setup

GitHub Pages serves static files only. It does not provide a database, email inbox, or backend route for form submissions. The signup page is prepared for a static form provider.

## Current Provider: Google Forms

The page is currently wired to send submissions to this Google Form:

```text
https://docs.google.com/forms/d/e/1FAIpQLSfBW6PbQ4bjX3fIwpBFON_7slNjkX-4NISdPamFdMulN8kinA/viewform
```

The form submits to this endpoint in `index.html`:

```html
action="https://docs.google.com/forms/d/e/1FAIpQLSfBW6PbQ4bjX3fIwpBFON_7slNjkX-4NISdPamFdMulN8kinA/formResponse"
```

Each site field uses the matching Google Forms `entry.xxxxx` name:

- Name: `entry.1954248626`
- Email: `entry.2145477866`
- Phone: `entry.1790911027`
- Coding experience: `entry.49111606`
- Main interest: `entry.485069914`
- Anything we should know?: `entry.1605881171`
- Consent: `entry.1979101395`

If the Google Form questions are deleted and recreated, Google may assign new `entry.xxxxx` IDs. Update `index.html` if that happens.

## Data Collected

The current form asks for:

- Name
- Email
- Optional phone number
- Coding experience
- Main area of interest
- Optional message
- Consent to receive course updates

Only collect details you intend to use. If you change the fields, update your privacy wording and form provider settings.

## Other Provider Options

The same HTML form pattern can be changed to work with other providers:

- Formspree
- Basin
- Getform
- Netlify Forms, if hosted on Netlify instead of GitHub Pages
- A Google Form, if you prefer Google Sheets as the response store

For providers that require different field names or hidden values, update the form inputs in `index.html` and retest the published site.

## Google Forms Quick Setup

To create a matching Google Form quickly:

1. Open <https://script.google.com/>.
2. Create a new Apps Script project.
3. Paste the contents of `docs/create-google-form.gs`.
4. Run `createCodingClassSignupForm`.
5. Approve the Google permissions.
6. Open **Executions** or **Logs** and copy the generated **Prefilled URL**.

Send that prefilled URL back to the site maintainer. It contains the unique `entry.xxxxx` field IDs needed to connect this static page to the Google Form.

## Privacy Notes

Before sharing the page publicly, add any privacy notice required for your location and audience. At minimum, tell visitors who is collecting the data, why it is collected, how long it will be kept, and how they can ask to be removed from the update list.
