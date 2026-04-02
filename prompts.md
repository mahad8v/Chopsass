# MultiVendo — Multi-Tenant Restaurant Management System

## Build Guide: Folder Structure + Step-by-Step AI Prompts

---

## Tech Stack

| Layer               | Technology                |
| ------------------- | ------------------------- |
| Framework           | Next.js 14 (App Router)   |
| Database            | PostgreSQL                |
| ORM                 | Prisma                    |
| Auth                | NextAuth.js v5            |
| Styling             | Tailwind CSS              |
| Real-time           | Pusher or Socket.io       |
| QR Codes            | qrcode.react              |
| File Uploads        | Cloudinary or UploadThing |
| Payments (optional) | Stripe                    |
| Deployment          | Vercel + Neon             |

---

## Folder Structure

```
multivendo/
├── prisma/
│   ├── schema.prisma               # All models: User, Restaurant, Menu, Order, Transaction
│   └── migrations/                 # Auto-generated migration files
│
├── public/
│   └── uploads/                    # Static fallback assets
│
├── src/
│   ├── app/
│   │   │
│   │   ├── (platform)/             # Super Admin — platform-level management
│   │   │   ├── layout.tsx
│   │   │   └── dashboard/
│   │   │       ├── page.tsx        # All restaurants overview
│   │   │       ├── restaurants/
│   │   │       │   ├── page.tsx    # List + approve restaurants
│   │   │       │   └── [id]/
│   │   │       │       └── page.tsx
│   │   │       └── analytics/
│   │   │           └── page.tsx
│   │   │
│   │   ├── (admin)/                # Restaurant Admin Panel
│   │   │   ├── layout.tsx          # Sidebar, RBAC guard
│   │   │   └── [restaurantSlug]/
│   │   │       ├── dashboard/
│   │   │       │   └── page.tsx    # Revenue, orders summary
│   │   │       ├── orders/
│   │   │       │   ├── page.tsx    # Live orders board
│   │   │       │   └── [orderId]/
│   │   │       │       └── page.tsx
│   │   │       ├── menu/
│   │   │       │   ├── page.tsx    # Menu items list
│   │   │       │   ├── categories/
│   │   │       │   │   └── page.tsx
│   │   │       │   └── [itemId]/
│   │   │       │       └── page.tsx
│   │   │       ├── tables/
│   │   │       │   └── page.tsx    # Tables + QR generator
│   │   │       ├── transactions/
│   │   │       │   └── page.tsx    # Record + view transactions
│   │   │       ├── staff/
│   │   │       │   └── page.tsx    # Roles: owner, manager, cashier, waiter
│   │   │       ├── settings/
│   │   │       │   ├── page.tsx    # Branding: logo, colors, theme
│   │   │       │   └── branding/
│   │   │       │       └── page.tsx
│   │   │       └── reports/
│   │   │           └── page.tsx
│   │   │
│   │   ├── r/                      # Customer-Facing (Public)
│   │   │   └── [restaurantSlug]/
│   │   │       ├── layout.tsx      # Loads restaurant branding dynamically
│   │   │       ├── page.tsx        # Restaurant home / menu listing
│   │   │       ├── table/
│   │   │       │   └── [tableId]/
│   │   │       │       ├── page.tsx       # Menu for this table
│   │   │       │       ├── cart/
│   │   │       │       │   └── page.tsx   # Cart review
│   │   │       │       └── order/
│   │   │       │           ├── page.tsx   # Order confirmation
│   │   │       │           └── [orderId]/
│   │   │       │               └── page.tsx # Order status tracker
│   │   │       └── menu/
│   │   │           └── [categoryId]/
│   │   │               └── page.tsx
│   │   │
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx        # Restaurant registration form
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts
│   │   │   ├── restaurants/
│   │   │   │   ├── route.ts        # POST: create restaurant
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts    # GET/PUT/DELETE
│   │   │   ├── menu/
│   │   │   │   ├── route.ts
│   │   │   │   └── [itemId]/
│   │   │   │       └── route.ts
│   │   │   ├── orders/
│   │   │   │   ├── route.ts        # POST: place order
│   │   │   │   └── [orderId]/
│   │   │   │       └── route.ts    # GET/PATCH status
│   │   │   ├── transactions/
│   │   │   │   └── route.ts        # POST: record payment
│   │   │   ├── tables/
│   │   │   │   └── route.ts
│   │   │   └── upload/
│   │   │       └── route.ts        # Logo/image upload
│   │   │
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Landing page
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── admin/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── OrderCard.tsx
│   │   │   ├── OrdersBoard.tsx     # Kanban: pending → preparing → ready
│   │   │   ├── TransactionForm.tsx
│   │   │   ├── MenuItemForm.tsx
│   │   │   ├── StaffTable.tsx
│   │   │   └── QRCodeGenerator.tsx
│   │   ├── customer/
│   │   │   ├── MenuGrid.tsx
│   │   │   ├── MenuItemCard.tsx
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── OrderStatus.tsx
│   │   │   └── BrandedHeader.tsx   # Dynamic logo + colors from restaurant config
│   │   ├── platform/
│   │   │   ├── RestaurantsList.tsx
│   │   │   └── PlatformStats.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── Badge.tsx
│   │       ├── Table.tsx
│   │       └── ThemeProvider.tsx   # Injects CSS vars from restaurant config
│   │
│   ├── lib/
│   │   ├── prisma.ts               # Prisma client singleton
│   │   ├── auth.ts                 # NextAuth config + RBAC helpers
│   │   ├── qr.ts                   # QR URL builder
│   │   ├── theme.ts                # Merge restaurant theme → CSS vars
│   │   └── validations.ts          # Zod schemas
│   │
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useOrders.ts            # Real-time order subscription
│   │   └── useRestaurantTheme.ts
│   │
│   ├── types/
│   │   └── index.ts                # Shared TS types
│   │
│   └── middleware.ts               # Route protection + tenant resolution
│
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Prisma Schema (Core Models)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  PLATFORM_OWNER
  RESTAURANT_OWNER
  MANAGER
  CASHIER
  WAITER
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PREPARING
  READY
  DELIVERED
  CANCELLED
}

enum PaymentMethod {
  CASH
  CARD
  MOBILE_MONEY
  ONLINE
}

model User {
  id           String       @id @default(cuid())
  name         String
  email        String       @unique
  password     String
  role         Role         @default(WAITER)
  restaurantId String?
  restaurant   Restaurant?  @relation(fields: [restaurantId], references: [id])
  transactions Transaction[]
  createdAt    DateTime     @default(now())
}

model Restaurant {
  id           String        @id @default(cuid())
  name         String
  slug         String        @unique  // used in URLs: /r/[slug]
  logo         String?
  primaryColor String        @default("#e85d24")
  accentColor  String        @default("#1a1a1a")
  fontFamily   String        @default("Inter")
  layout       String        @default("grid") // grid | list | minimal
  address      String?
  phone        String?
  isActive     Boolean       @default(true)
  staff        User[]
  tables       Table[]
  categories   MenuCategory[]
  orders       Order[]
  transactions Transaction[]
  createdAt    DateTime      @default(now())
}

model Table {
  id           String     @id @default(cuid())
  number       Int
  label        String?    // e.g. "Window Seat 3"
  restaurantId String
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
  orders       Order[]
  qrCode       String?    // stored QR URL
  isActive     Boolean    @default(true)
}

model MenuCategory {
  id           String     @id @default(cuid())
  name         String
  sortOrder    Int        @default(0)
  restaurantId String
  restaurant   Restaurant @relation(fields: [restaurantId], references: [id])
  items        MenuItem[]
}

model MenuItem {
  id           String       @id @default(cuid())
  name         String
  description  String?
  price        Decimal
  image        String?
  isAvailable  Boolean      @default(true)
  categoryId   String
  category     MenuCategory @relation(fields: [categoryId], references: [id])
  orderItems   OrderItem[]
}

model Order {
  id           String      @id @default(cuid())
  orderNumber  Int         @default(autoincrement())
  status       OrderStatus @default(PENDING)
  tableId      String
  table        Table       @relation(fields: [tableId], references: [id])
  restaurantId String
  restaurant   Restaurant  @relation(fields: [restaurantId], references: [id])
  items        OrderItem[]
  total        Decimal
  notes        String?
  transaction  Transaction?
  createdAt    DateTime    @default(now())
  updatedAt    DateTime    @updatedAt
}

model OrderItem {
  id         String   @id @default(cuid())
  quantity   Int
  price      Decimal  // snapshot of price at order time
  notes      String?
  orderId    String
  order      Order    @relation(fields: [orderId], references: [id])
  menuItemId String
  menuItem   MenuItem @relation(fields: [menuItemId], references: [id])
}

model Transaction {
  id           String        @id @default(cuid())
  amount       Decimal
  method       PaymentMethod
  reference    String?       // receipt / ref number
  notes        String?
  orderId      String        @unique
  order        Order         @relation(fields: [orderId], references: [id])
  restaurantId String
  restaurant   Restaurant    @relation(fields: [restaurantId], references: [id])
  recordedById String
  recordedBy   User          @relation(fields: [recordedById], references: [id])
  createdAt    DateTime      @default(now())
}
```

---

## Step-by-Step AI Prompts

Use these prompts one by one with Claude or any AI coding assistant. Each prompt builds on the previous.

---

### PHASE 1 — Project Foundation

**Prompt 1: Project Setup**

```
Create a new Next.js 14 project called "multivendo" using the App Router and TypeScript.
Configure Tailwind CSS, install and initialize Prisma with PostgreSQL, and install these
packages: @prisma/client, next-auth@beta, zod, bcryptjs, @types/bcryptjs.

Create a .env.example with: DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, NEXT_PUBLIC_APP_URL.

Show me the complete package.json and initial project structure.
```

**Prompt 2: Prisma Schema**

```
Create the full Prisma schema for a multi-tenant restaurant SaaS. Include these models:
User (with Role enum: PLATFORM_OWNER, RESTAURANT_OWNER, MANAGER, CASHIER, WAITER),
Restaurant (with slug, branding fields: logo, primaryColor, accentColor, fontFamily, layout),
Table (with restaurantId, number, label, qrCode),
MenuCategory, MenuItem (with price as Decimal, isAvailable),
Order (with OrderStatus enum: PENDING, CONFIRMED, PREPARING, READY, DELIVERED, CANCELLED),
OrderItem (price snapshot),
Transaction (with PaymentMethod enum: CASH, CARD, MOBILE_MONEY, ONLINE, recordedById).

Every model should have a Restaurant relation for tenant isolation. Show full schema.prisma.
```

**Prompt 3: Auth Setup**

```
Set up NextAuth.js v5 with Credentials provider for this multi-tenant restaurant system.
- Hash passwords with bcryptjs
- Store sessions in JWT
- Include the user's role and restaurantId in the session token
- Create src/lib/auth.ts with the config
- Create src/lib/prisma.ts as a Prisma client singleton
- Create the API route at app/api/auth/[...nextauth]/route.ts
- Create a middleware.ts that protects /admin, /platform routes and redirects unauthenticated users to /auth/login
```

---

### PHASE 2 — Restaurant Admin Panel

**Prompt 4: Admin Layout + Sidebar**

```
Build the restaurant admin layout at app/(admin)/[restaurantSlug]/layout.tsx.
- Fetch the restaurant by slug and verify the logged-in user belongs to it
- Create a Sidebar component with navigation links: Dashboard, Orders, Menu, Tables, Staff, Transactions, Settings
- The sidebar should show the restaurant name and logo
- Wrap with a role guard: RESTAURANT_OWNER and MANAGER can see all links; CASHIER/WAITER only see Orders and Transactions
- Use Tailwind CSS for a clean, minimal dark sidebar
```

**Prompt 5: Live Orders Board**

```
Build the Orders Board page at app/(admin)/[restaurantSlug]/orders/page.tsx.
- Show orders in a Kanban layout: Pending | Preparing | Ready | Delivered
- Each OrderCard shows: order number, table label, items list, total, time elapsed
- Add buttons to move order status forward
- Use polling every 5 seconds (or Pusher if available) to refresh orders
- Orders are filtered by restaurantId from the session
- Create a PATCH /api/orders/[orderId] endpoint that updates the status (role check: only MANAGER+ or WAITER who owns the table)
```

**Prompt 6: Menu Management**

```
Build the full menu management section:

1. GET/POST /api/menu/categories — list and create categories for a restaurant
2. GET/POST /api/menu/items — list and create items (with image URL, price, description, categoryId)
3. PATCH/DELETE /api/menu/items/[itemId] — update or toggle availability

Build the page at app/(admin)/[restaurantSlug]/menu/page.tsx:
- List categories as tabs
- Under each tab show menu items in a grid with edit/delete/toggle controls
- Add a modal form to create/edit items
- Role guard: only RESTAURANT_OWNER and MANAGER can create/edit/delete
```

**Prompt 7: Table & QR Management**

```
Build the Tables management page at app/(admin)/[restaurantSlug]/tables/page.tsx.

1. Show all tables for the restaurant in a grid
2. Each table card shows: number, label, status, and a QR Code (use qrcode.react)
3. The QR URL format: https://[NEXT_PUBLIC_APP_URL]/r/[restaurantSlug]/table/[tableId]
4. Add ability to create new tables, edit label, deactivate
5. Add a "Download QR" button that exports the QR as PNG

Create POST /api/tables and PATCH /api/tables/[id] endpoints.
```

**Prompt 8: Transactions**

```
Build the Transaction recording system.

1. Page: app/(admin)/[restaurantSlug]/transactions/page.tsx
   - Show a table of all transactions with: order#, amount, method, recorded by, date
   - Allow filtering by date range and payment method
   - Show totals at the bottom

2. Component: TransactionForm.tsx
   - Modal that opens when admin marks an order as paid
   - Fields: payment method (CASH/CARD/MOBILE_MONEY/ONLINE), amount, reference number, notes
   - On submit: POST /api/transactions, update order status to DELIVERED

3. API: POST /api/transactions
   - Record transaction linked to orderId and restaurantId
   - Only CASHIER, MANAGER, RESTAURANT_OWNER can record transactions
```

**Prompt 9: Staff & Role Management**

```
Build the Staff management page at app/(admin)/[restaurantSlug]/staff/page.tsx.

1. List all users that belong to this restaurant
2. Show their name, email, role, and join date
3. Add "Invite Staff" form: name, email, password, role (MANAGER/CASHIER/WAITER)
   - RESTAURANT_OWNER can assign any role except PLATFORM_OWNER
   - MANAGER can only invite CASHIER/WAITER
4. Allow changing a staff member's role (OWNER only)
5. Allow deactivating a staff account

Create POST /api/staff endpoint with role validation.
```

**Prompt 10: Branding & Settings**

```
Build the restaurant settings/branding page at app/(admin)/[restaurantSlug]/settings/page.tsx.

Allow the restaurant owner to customize:
- Restaurant name, address, phone
- Logo upload (upload to Cloudinary or UploadThing, store URL)
- Primary color (color picker)
- Accent color (color picker)
- Font family (select: Inter, Poppins, Playfair Display, Roboto)
- Layout style (select: grid | list | minimal)

Create a live preview panel that shows how the customer storefront will look with current settings.
Create PATCH /api/restaurants/[id] to save changes.
Only RESTAURANT_OWNER can access this page.
```

---

### PHASE 3 — Customer-Facing Storefront

**Prompt 11: Dynamic Branded Layout**

```
Build the customer-facing layout at app/r/[restaurantSlug]/layout.tsx.

1. Fetch the restaurant config by slug (name, logo, primaryColor, accentColor, fontFamily, layout)
2. Inject the branding as CSS custom properties on the <html> element:
   --brand-primary, --brand-accent, --brand-font
3. Create a ThemeProvider component that applies these vars
4. Create a BrandedHeader component showing: restaurant logo, name, and table number
5. If the restaurant is inactive or not found, show a friendly "not available" page
6. This layout must work for: /r/[slug], /r/[slug]/table/[tableId], all nested routes
```

**Prompt 12: Menu Browsing Page**

```
Build the customer menu page at app/r/[restaurantSlug]/table/[tableId]/page.tsx.

1. Verify the tableId belongs to the restaurantSlug
2. Load all menu categories and their available items
3. Show categories as a sticky horizontal scroll tab bar
4. Items render based on restaurant layout setting:
   - "grid": 2-column card grid with image, name, price, add button
   - "list": full-width rows with image left, details right
   - "minimal": text-only compact list
5. Each item has an "Add to Cart" button
6. Cart state lives in localStorage keyed by tableId
7. Show a floating cart button with item count
```

**Prompt 13: Cart & Order Placement**

```
Build the cart and checkout flow.

1. CartDrawer.tsx — slide-in drawer showing:
   - Items list with quantity +/- controls
   - Remove item button
   - Special instructions text field per item
   - Order notes field
   - Total amount
   - "Place Order" button

2. POST /api/orders — place order endpoint:
   - Accepts: tableId, restaurantId, items[], notes
   - Creates Order + OrderItems in DB
   - Returns orderId
   - No auth required (public endpoint, but validate tableId belongs to restaurant)

3. After successful order: redirect to /r/[slug]/table/[tableId]/order/[orderId]
```

**Prompt 14: Order Status Tracker**

```
Build the order status page at app/r/[restaurantSlug]/table/[tableId]/order/[orderId]/page.tsx.

Show a visual order tracker with these steps:
Order Received → Being Prepared → Ready → Delivered

- Poll GET /api/orders/[orderId] every 5 seconds
- Highlight current step visually
- Show order summary: items, total, table number
- When status = READY, show a celebration animation and "Your order is ready!" message
- When status = DELIVERED, show a thank you screen with option to place another order
- Use the restaurant's brand colors for the progress indicators
```

---

### PHASE 4 — Platform Super Admin

**Prompt 15: Super Admin Dashboard**

```
Build the platform super admin section at app/(platform)/dashboard/.

1. Protect the entire section: only users with role PLATFORM_OWNER can access
2. Dashboard page shows:
   - Total restaurants (active/inactive)
   - Total orders today across all restaurants
   - Total revenue today
   - A list of recently registered restaurants

3. Restaurants page: paginated table of all restaurants with:
   - Name, slug, owner email, status, created date
   - Toggle active/inactive
   - View details button

4. Create GET /api/platform/stats and GET /api/platform/restaurants endpoints
   restricted to PLATFORM_OWNER role.
```

---

### PHASE 5 — Polish & Deploy

**Prompt 16: Restaurant Registration Flow**

```
Build the public restaurant registration page at app/auth/register/page.tsx.

Multi-step form:
Step 1 — Account: name, email, password, confirm password
Step 2 — Restaurant: restaurant name, slug (auto-generated, editable), address, phone
Step 3 — Branding: logo upload, primary color, accent color

On submit:
- Create User with role RESTAURANT_OWNER
- Create Restaurant linked to that user
- Set restaurant isActive = false (pending platform approval) OR true for instant activation
- Redirect to /admin/[slug]/dashboard

Create POST /api/auth/register endpoint.
```

**Prompt 17: Reports & Analytics**

```
Build a reports page at app/(admin)/[restaurantSlug]/reports/page.tsx.

Show:
1. Revenue chart — daily revenue for the last 30 days (line chart using recharts)
2. Top selling items — bar chart of most ordered items
3. Orders by status breakdown — pie chart
4. Peak hours heatmap — orders by hour of day
5. Payment method breakdown — pie chart
6. Export to CSV button for transactions

All data scoped to the restaurant. Use recharts for all charts.
```

**Prompt 18: Real-time Orders with Pusher**

```
Add real-time order notifications to the admin orders board.

1. Install and configure Pusher (or use Server-Sent Events as a free alternative)
2. When a customer places a new order (POST /api/orders), trigger a Pusher event
   on channel "restaurant-[restaurantId]", event "new-order"
3. In the admin orders board, subscribe to this channel and append new orders
   to the PENDING column without a page refresh
4. Add a sound notification (a subtle chime) when a new order arrives
5. Show a toast notification: "New order #42 from Table 5"
```

**Prompt 19: Deployment Setup**

```
Prepare this Next.js + PostgreSQL + Prisma project for production deployment.

1. Create a production-ready next.config.js with image domains for Cloudinary
2. Create a Dockerfile for containerized deployment
3. Write a deployment checklist covering:
   - Setting up Neon or Supabase PostgreSQL in production
   - Running prisma migrate deploy
   - All required environment variables
   - Vercel deployment config (vercel.json)
4. Add a database seed script at prisma/seed.ts that creates:
   - One PLATFORM_OWNER user
   - One demo restaurant with sample menu, 5 tables, and sample orders
5. Add the seed script to package.json
```

---

## Environment Variables Reference

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/multivendo"

# Auth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# File Uploads (pick one)
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Real-time (optional)
PUSHER_APP_ID=""
PUSHER_KEY=""
PUSHER_SECRET=""
PUSHER_CLUSTER=""
NEXT_PUBLIC_PUSHER_KEY=""
NEXT_PUBLIC_PUSHER_CLUSTER=""
```

---

## QR Code URL Pattern

```
https://yourdomain.com/r/[restaurantSlug]/table/[tableId]

Example:
https://yourdomain.com/r/the-burger-joint/table/clx92jd3k0000abc123
```

The customer storefront reads the `restaurantSlug` to load branding and menu, and uses `tableId` to attach the order to the correct table.

---

## RBAC Permission Matrix

| Feature                      | PLATFORM_OWNER | RESTAURANT_OWNER | MANAGER | CASHIER | WAITER |
| ---------------------------- | :------------: | :--------------: | :-----: | :-----: | :----: |
| Manage all restaurants       |       ✅       |        ❌        |   ❌    |   ❌    |   ❌   |
| Restaurant settings/branding |       ❌       |        ✅        |   ❌    |   ❌    |   ❌   |
| Manage staff                 |       ❌       |        ✅        |  ✅\*   |   ❌    |   ❌   |
| Create/edit menu             |       ❌       |        ✅        |   ✅    |   ❌    |   ❌   |
| View orders                  |       ❌       |        ✅        |   ✅    |   ✅    |   ✅   |
| Update order status          |       ❌       |        ✅        |   ✅    |   ✅    |   ✅   |
| Record transactions          |       ❌       |        ✅        |   ✅    |   ✅    |   ❌   |
| View reports                 |       ❌       |        ✅        |   ✅    |   ❌    |   ❌   |
| Manage tables/QR             |       ❌       |        ✅        |   ✅    |   ❌    |   ❌   |

\*MANAGER can only invite CASHIER/WAITER roles
