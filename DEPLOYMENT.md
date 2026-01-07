# Aphamed Prints LTD - Deployment Guide

## Pre-Deployment Checklist

### ✅ Completed
- [x] Updated website URL to https://aphamed.com
- [x] Secured admin credentials with environment variables
- [x] Removed all console.log statements
- [x] Added custom 404 page
- [x] Fixed product image fitting
- [x] Fixed OpenGraph and Twitter meta images
- [x] Added multiple image upload support

### Environment Variables Required

Create a `.env.local` file (or set in Vercel) with:

```env
NEXT_PUBLIC_ADMIN_USERNAME=your_admin_username
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
NEXT_PUBLIC_SITE_URL=https://aphamed.com
```

**Important**: Change the default credentials before deployment!

## Deployment on Vercel

1. **Push to GitHub** (if not already done)
2. **Import to Vercel**
   - Go to vercel.com
   - Click "Import Project"
   - Select your repository
3. **Configure Environment Variables**
   - Add the environment variables from `.env.local`
   - Make sure to set strong credentials
4. **Deploy**
   - Vercel will automatically build and deploy

## Important Notes

### Data Persistence
- Products are stored in `data/products.json`
- **WARNING**: This file may be lost on redeployment
- For production, consider using:
  - Vercel Blob Storage
  - Database (PostgreSQL, MongoDB, etc.)
  - Cloud storage (AWS S3, Google Cloud Storage)

### File Uploads
- Images are stored in `/public/image/`
- These will persist in deployments
- Consider using cloud storage for better scalability

### Admin Access
- Admin panel: https://aphamed.com/admin
- Login with credentials set in environment variables
- Default route `/admin` redirects to `/admin/login`

### Security Recommendations
1. Change default admin credentials immediately
2. Enable 2FA if possible
3. Use HTTPS (Vercel provides this automatically)
4. Consider implementing rate limiting for API routes
5. Add CSRF protection for production

## Post-Deployment

1. Test admin login
2. Upload a test product
3. Verify sitemap: https://aphamed.com/sitemap.xml
4. Check robots.txt: https://aphamed.com/robots.txt
5. Test 404 page with invalid URL
6. Verify all pages load correctly
7. Test responsive design on mobile

## Monitoring

- Set up Vercel Analytics
- Monitor API response times
- Check error logs regularly
- Monitor storage usage

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Documentation: https://vercel.com/docs
