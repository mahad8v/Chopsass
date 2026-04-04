multivendo/
├── prisma/
│ ├── schema.prisma # All models: User, Restaurant, Menu, Order, Transaction
│ └── migrations/ # Auto-generated migration files
│
├── public/
│ └── uploads/ # Static fallback assets
│
├── src/
│ ├── app/
│ │ │
│ │ ├── (platform)/ # Super Admin — platform-level management
│ │ │ ├── layout.tsx
│ │ │ └── dashboard/
│ │ │ ├── page.tsx # All restaurants overview
│ │ │ ├── restaurants/
│ │ │ │ ├── page.tsx # List + approve restaurants
│ │ │ │ └── [id]/
│ │ │ │ └── page.tsx
│ │ │ └── analytics/
│ │ │ └── page.tsx
│ │ │
│ │ ├── (admin)/ # Restaurant Admin Panel
│ │ │ ├── layout.tsx # Sidebar, RBAC guard
│ │ │ └── [restaurantSlug]/
│ │ │ ├── dashboard/
│ │ │ │ └── page.tsx # Revenue, orders summary
│ │ │ ├── orders/
│ │ │ │ ├── page.tsx # Live orders board
│ │ │ │ └── [orderId]/
│ │ │ │ └── page.tsx
│ │ │ ├── menu/
│ │ │ │ ├── page.tsx # Menu items list
│ │ │ │ ├── categories/
│ │ │ │ │ └── page.tsx
│ │ │ │ └── [itemId]/
│ │ │ │ └── page.tsx
│ │ │ ├── tables/
│ │ │ │ └── page.tsx # Tables + QR generator
│ │ │ ├── transactions/
│ │ │ │ └── page.tsx # Record + view transactions
│ │ │ ├── staff/
│ │ │ │ └── page.tsx # Roles: owner, manager, cashier, waiter
│ │ │ ├── settings/
│ │ │ │ ├── page.tsx # Branding: logo, colors, theme
│ │ │ │ └── branding/
│ │ │ │ └── page.tsx
│ │ │ └── reports/
│ │ │ └── page.tsx
│ │ │
│ │ ├── r/ # Customer-Facing (Public)
│ │ │ └── [restaurantSlug]/
│ │ │ ├── layout.tsx # Loads restaurant branding dynamically
│ │ │ ├── page.tsx # Restaurant home / menu listing
│ │ │ ├── table/
│ │ │ │ └── [tableId]/
│ │ │ │ ├── page.tsx # Menu for this table
│ │ │ │ ├── cart/
│ │ │ │ │ └── page.tsx # Cart review
│ │ │ │ └── order/
│ │ │ │ ├── page.tsx # Order confirmation
│ │ │ │ └── [orderId]/
│ │ │ │ └── page.tsx # Order status tracker
│ │ │ └── menu/
│ │ │ └── [categoryId]/
│ │ │ └── page.tsx
│ │ │
│ │ ├── auth/
│ │ │ ├── login/
│ │ │ │ └── page.tsx
│ │ │ └── register/
│ │ │ └── page.tsx # Restaurant registration form
│ │ │
│ │ ├── api/
│ │ │ ├── auth/
│ │ │ │ └── [...nextauth]/
│ │ │ │ └── route.ts
│ │ │ ├── restaurants/
│ │ │ │ ├── route.ts # POST: create restaurant
│ │ │ │ └── [id]/
│ │ │ │ └── route.ts # GET/PUT/DELETE
│ │ │ ├── menu/
│ │ │ │ ├── route.ts
│ │ │ │ └── [itemId]/
│ │ │ │ └── route.ts
│ │ │ ├── orders/
│ │ │ │ ├── route.ts # POST: place order
│ │ │ │ └── [orderId]/
│ │ │ │ └── route.ts # GET/PATCH status
│ │ │ ├── transactions/
│ │ │ │ └── route.ts # POST: record payment
│ │ │ ├── tables/
│ │ │ │ └── route.ts
│ │ │ └── upload/
│ │ │ └── route.ts # Logo/image upload
│ │ │
│ │ ├── layout.tsx # Root layout
│ │ ├── page.tsx # Landing page
│ │ └── globals.css
│ │
│ ├── components/
│ │ ├── admin/
│ │ │ ├── Sidebar.tsx
│ │ │ ├── OrderCard.tsx
│ │ │ ├── OrdersBoard.tsx # Kanban: pending → preparing → ready
│ │ │ ├── TransactionForm.tsx
│ │ │ ├── MenuItemForm.tsx
│ │ │ ├── StaffTable.tsx
│ │ │ └── QRCodeGenerator.tsx
│ │ ├── customer/
│ │ │ ├── MenuGrid.tsx
│ │ │ ├── MenuItemCard.tsx
│ │ │ ├── CartDrawer.tsx
│ │ │ ├── OrderStatus.tsx
│ │ │ └── BrandedHeader.tsx # Dynamic logo + colors from restaurant config
│ │ ├── platform/
│ │ │ ├── RestaurantsList.tsx
│ │ │ └── PlatformStats.tsx
│ │ └── ui/
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ ├── Modal.tsx
│ │ ├── Badge.tsx
│ │ ├── Table.tsx
│ │ └── ThemeProvider.tsx # Injects CSS vars from restaurant config
│ │
│ ├── lib/
│ │ ├── prisma.ts # Prisma client singleton
│ │ ├── auth.ts # NextAuth config + RBAC helpers
│ │ ├── qr.ts # QR URL builder
│ │ ├── theme.ts # Merge restaurant theme → CSS vars
│ │ └── validations.ts # Zod schemas
│ │
│ ├── hooks/
│ │ ├── useCart.ts
│ │ ├── useOrders.ts # Real-time order subscription
│ │ └── useRestaurantTheme.ts
│ │
│ ├── types/
│ │ └── index.ts # Shared TS types
│ │
│ └── middleware.ts # Route protection + tenant resolution
│
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
