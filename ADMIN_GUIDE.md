# Admin Panel Documentation

## Access the Admin Panel

Visit: **http://localhost:3000/admin**

### Login Credentials:
- **Username:** `admin`
- **Password:** `aphamed2026`

## Features

### 1. Dashboard (`/admin`)
- View total products and categories
- See recent products
- Quick actions for adding products and managing content
- Overview statistics

### 2. Products Management (`/admin/products`)
- **View all products** in a grid layout
- **Search products** by name or category
- **Filter by category** (Prints, Branding, Design, Signage, Other)
- **Add new products** with the following fields:
  - Product name
  - Price
  - Category
  - Unit (e.g., "Per 50", "Per 100")
  - Description
  - Features (comma-separated)
  - Main product image (thumbnail)
  - Gallery images (multiple images)
- **Edit existing products** - click the Edit button on any product
- **Delete products** - remove products you no longer need
- **Image upload** - Upload images directly from your computer

### 3. Gallery (`/admin/images`)
- View all uploaded images
- Copy image URLs to clipboard
- Images are organized by product

### 4. Analytics (`/admin/analytics`)
- Coming soon - will show product views and popular items

## How to Add a New Product

1. Go to `/admin/products`
2. Click the **"Add Product"** button
3. Fill in the product details:
   - Enter product name, price, category, and unit
   - Upload a main product image (required)
   - Optionally upload additional gallery images
   - Add a description
   - Add features (comma-separated list)
4. Click **"Add Product"** to save
5. The product will immediately appear on your Products page

## How to Edit a Product

1. Go to `/admin/products`
2. Find the product you want to edit
3. Click the **"Edit"** button
4. Update any fields you want to change
5. Upload new images if needed
6. Click **"Update Product"** to save changes

## How to Upload Images

### Main Product Image:
- Click "Upload Image" button
- Select an image file from your computer
- The image will be automatically uploaded to `/public/image/` directory
- The image URL will be saved with the product

### Gallery Images:
- Click "Add Gallery Image" button
- Select an image file
- Repeat to add multiple images
- Images will appear as thumbnails
- Click the X button to remove any gallery image

## Data Storage

- Products are stored in `/data/products.json`
- Images are saved in `/public/image/` directory
- The data persists between server restarts

## API Endpoints

The admin panel uses these API endpoints:

- `GET /api/products` - Fetch all products
- `POST /api/products` - Create a new product
- `PUT /api/products` - Update a product
- `DELETE /api/products?id={id}` - Delete a product
- `POST /api/upload` - Upload an image file

## Security Notes

⚠️ **Important for Production:**
- Change the default admin password in `/src/app/admin/login/page.js`
- Implement proper backend authentication (currently using localStorage)
- Add server-side authentication middleware
- Use environment variables for sensitive data
- Consider using a real database instead of JSON files
- Add CSRF protection
- Implement rate limiting

## Troubleshooting

### Cannot login:
- Make sure you're using the correct credentials
- Clear your browser cache and localStorage
- Check the browser console for errors

### Images not uploading:
- Check file size (large images may take longer)
- Ensure the `/public/image/` directory exists
- Check browser console for upload errors

### Products not showing:
- Check if products exist in `/data/products.json`
- Verify the API is running correctly
- Check the browser console for fetch errors

## Future Enhancements

Potential features to add:
- Bulk product import/export
- Product categories management
- Image optimization
- Product duplication
- Inventory tracking
- Order management
- Customer reviews moderation
- Multi-user support with roles
- Activity logs
- Product analytics and insights
