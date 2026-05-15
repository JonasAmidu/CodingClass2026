# GitHub Pages Deployment

## Repository Setup

1. Create a new GitHub repository.
2. Add these files to the repository root.
3. Commit and push the files.

Example:

```bash
git init
git add .
git commit -m "Add coding class signup page"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

## Enable Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`.
6. Save.

GitHub will publish the site at:

```text
https://YOUR-USER.github.io/YOUR-REPO/
```

For an organization or user site named `YOUR-USER.github.io`, GitHub publishes from:

```text
https://YOUR-USER.github.io/
```

## Custom Domain

If you want a custom domain:

1. Add the domain in **Settings > Pages > Custom domain**.
2. Create a `CNAME` file in the repository root containing only the domain name.
3. Configure DNS with your domain provider according to GitHub's Pages instructions.

## Updating Course Information

Edit `index.html` for page copy and form fields. Edit `styles.css` for layout and visual changes. Commit and push changes to `main`; GitHub Pages will redeploy automatically.
