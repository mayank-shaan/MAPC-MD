# Clerk Authentication Setup Guide

This guide will help you complete the Clerk authentication setup for the MAPC Study Portal.

## ✅ What's Already Done (Code Implementation)

The following files have been created and configured:

1. **`package.json`** - Clerk dependency added (`@clerk/react`)
2. **`src/theme/Root.js`** - Clerk provider wrapper
3. **`src/components/AuthGate.js`** - Login screen and content protection
4. **`src/components/UserButton.js`** - User profile button for navbar
5. **`src/theme/Layout/index.js`** - Wraps all pages with auth protection
6. **`src/theme/Navbar/Content/index.js`** - Adds user button to navbar
7. **`.env.example`** - Template for environment variables
8. **`.gitignore`** - Already configured to exclude `.env.local`

## 🚀 What You Need To Do

### Step 1: Create Clerk Account (5 minutes)

1. Go to [https://clerk.com](https://clerk.com)
2. Sign up for a free account (10,000 monthly active users free)
3. Create a new application:
   - **Application name**: `MAPC Study Portal`
   - **Authentication methods**: Select **Email** (recommended)
   - Optional: Add **Google** or **GitHub** for social login

### Step 2: Get Your API Keys (2 minutes)

1. In Clerk Dashboard, go to **API Keys** section
2. Copy your **Publishable Key** (starts with `pk_test_...`)
3. Keep this tab open - you'll need it for the next steps

### Step 3: Configure Local Environment (2 minutes)

1. Create a file named `.env.local` in the project root:

```bash
# In the project root directory
touch .env.local
```

2. Add your Clerk key to `.env.local`:

```env
CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

⚠️ **Important**: Replace `pk_test_your_actual_key_here` with your actual key from Step 2

### Step 4: Configure Clerk Dashboard (3 minutes)

In your Clerk Dashboard, configure the allowed URLs:

1. Go to **Settings** → **Domains**
2. Add these URLs to **Allowed redirect URLs**:
   - `http://localhost:3000`
   - `https://your-vercel-domain.vercel.app` (add after deployment)

3. Add these URLs to **Allowed origins**:
   - `http://localhost:3000`
   - `https://your-vercel-domain.vercel.app` (add after deployment)

### Step 5: Test Locally (5 minutes)

```bash
# Start the development server
npm run start
```

**Expected behavior:**
- Site loads and shows Clerk login screen
- You can sign up with email
- After login, you see the full site with user button in navbar
- Clicking user button shows profile/logout options

### Step 6: Configure Vercel (5 minutes)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add new environment variable:
   - **Name**: `CLERK_PUBLISHABLE_KEY`
   - **Value**: Your publishable key from Step 2
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**

### Step 7: Deploy to Vercel (2 minutes)

```bash
# Commit and push your changes
git add .
git commit -m "Add Clerk authentication"
git push origin feature/clerk-auth
```

Then merge to your main branch or create a pull request.

Vercel will automatically deploy with the new authentication.

### Step 8: Update Clerk Dashboard with Production URL (2 minutes)

After Vercel deployment completes:

1. Copy your Vercel production URL (e.g., `https://mapc-msd.vercel.app`)
2. Go back to Clerk Dashboard → **Settings** → **Domains**
3. Add your production URL to:
   - **Allowed redirect URLs**
   - **Allowed origins**
4. Save changes

## 🎉 You're Done!

Your site now has authentication. Users must sign in to access content.

## 👥 Managing Users

### Add Users Manually

1. Go to Clerk Dashboard → **Users**
2. Click **Create User**
3. Enter email and send invitation

### View Active Users

- Dashboard shows all registered users
- See login activity, last active time
- Can manually verify emails or delete users

### User Limits

- **Free tier**: 10,000 monthly active users
- **Pricing**: Free tier is very generous for educational use

## 🔧 Troubleshooting

### Issue: "Configuration Error" message

**Solution**: Check that `CLERK_PUBLISHABLE_KEY` is set correctly in:
- `.env.local` (for local development)
- Vercel environment variables (for production)

### Issue: Redirect errors after login

**Solution**: Ensure your domain is added to Clerk's allowed URLs:
- Clerk Dashboard → Settings → Domains
- Add both `http://localhost:3000` and your Vercel URL

### Issue: Build fails on Vercel

**Solution**: 
1. Check that environment variable is set in Vercel
2. Ensure the variable name is exactly `CLERK_PUBLISHABLE_KEY`
3. Redeploy after adding the variable

### Issue: Login screen doesn't appear

**Solution**:
1. Clear browser cache
2. Check browser console for errors
3. Verify Clerk key is valid (starts with `pk_test_` or `pk_live_`)

## 🔐 Security Notes

- ✅ `.env.local` is already in `.gitignore` - your keys won't be committed
- ✅ Only use `pk_test_` keys for development
- ✅ Clerk handles all password security, encryption, and session management
- ✅ Users' passwords are never stored in your database

## 📚 Additional Features (Optional)

### Enable Social Login

1. Clerk Dashboard → **User & Authentication** → **Social Connections**
2. Enable Google, GitHub, or other providers
3. Follow provider-specific setup instructions

### Customize Login Screen

Edit `src/components/AuthGate.js` to customize:
- Colors and styling
- Welcome message
- Logo placement

### Add User Roles

Clerk supports roles and permissions:
- Dashboard → **Organizations** → Enable organizations
- Assign roles to users
- Check roles in your code with `user.organizationMemberships`

## 📞 Support

- **Clerk Documentation**: [https://clerk.com/docs](https://clerk.com/docs)
- **Clerk Discord**: [https://clerk.com/discord](https://clerk.com/discord)
- **Docusaurus + Clerk**: [https://clerk.com/docs/quickstarts/docusaurus](https://clerk.com/docs/quickstarts/docusaurus)

---

## Quick Reference

### Environment Variables

| Variable | Where to Set | Value |
|----------|-------------|-------|
| `CLERK_PUBLISHABLE_KEY` | `.env.local` (local) | `pk_test_...` |
| `CLERK_PUBLISHABLE_KEY` | Vercel Dashboard | `pk_test_...` |

### Important URLs

| Purpose | URL |
|---------|-----|
| Clerk Dashboard | https://dashboard.clerk.com |
| Vercel Dashboard | https://vercel.com/dashboard |
| Local Dev Server | http://localhost:3000 |

### Git Flow Commands

```bash
# You're currently on: feature/clerk-auth

# When ready to merge:
git flow feature finish clerk-auth

# This will merge to develop, then:
git checkout main
git merge develop
git push origin main
```

---

**Created**: March 12, 2026  
**Last Updated**: March 12, 2026  
**Status**: Ready for deployment
