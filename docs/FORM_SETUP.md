# Signup Form Setup

GitHub Pages serves static files only. It does not provide a database, email inbox, or backend route for form submissions. The signup page is prepared for a static form provider.

## Current Provider: Google Forms

The page is currently wired to send submissions to this Google Form:

```text
https://docs.google.com/forms/d/e/1FAIpQLSfQNXoYiZ1TPqBWebAptgL6gOyPOyhypXeD_MbU9huzwJLOcw/viewform
```

The form submits to this endpoint in `index.html`:

```html
action="https://docs.google.com/forms/d/e/1FAIpQLSfQNXoYiZ1TPqBWebAptgL6gOyPOyhypXeD_MbU9huzwJLOcw/formResponse"
```

Each site field uses the matching Google Forms `entry.xxxxx` name:

- Name: `entry.1673829281`
- Email: `entry.345364862`
- Phone: `entry.1366279668`
- Coding experience: `entry.706403187`
- Main interest: `entry.386113149`
- Anything we should know?: `entry.94015354`
- Consent: `entry.284385496`

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
