# Replit.md

## Overview

This is a full-stack web application for a fastening solutions company called BPF (Comprehensive Fastening Solutions). The application serves as a product catalog and informational website for industrial fasteners including bolts, screws, nuts, washers, and related hardware. It provides product browsing, standards reference, technical documentation, and blog content for the fastening industry.

## System Architecture

The application follows a modern full-stack TypeScript architecture with:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript  
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

## Key Components

### Frontend Architecture
- **Component Library**: Uses shadcn/ui for consistent, accessible UI components
- **Routing**: Client-side routing with Wouter for lightweight navigation
- **Data Fetching**: TanStack Query provides caching, background updates, and error handling
- **Forms**: React Hook Form with Zod schemas for type-safe form validation
- **Responsive Design**: Mobile-first approach using Tailwind CSS breakpoints

### Backend Architecture
- **API Layer**: RESTful API endpoints for products, categories, standards, blog posts, and datasheets
- **Data Storage**: Currently uses in-memory storage with JSON files, designed to easily migrate to PostgreSQL
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Hot reloading with Vite integration in development mode

### Database Schema
The application defines the following main entities:
- **Products**: Industrial fasteners with specifications, materials, and standards
- **Categories**: Product categorization (Bolts, Screws, Nuts, Washers)
- **Standards**: Technical standards (DIN, ISO, ASME, etc.) with dimensions and equivalents
- **Blog Posts**: Technical articles and industry content
- **Datasheets**: Technical documentation files

## Data Flow

1. **Client Requests**: React components use TanStack Query hooks to fetch data
2. **API Layer**: Express routes handle HTTP requests and validate inputs
3. **Storage Layer**: Currently serves data from JSON files via MemStorage class
4. **Response Processing**: TanStack Query caches responses and handles loading/error states
5. **UI Updates**: Components reactively update based on query state changes

## External Dependencies

### Core Framework Dependencies
- **React 18**: UI library with hooks and functional components
- **Express.js**: Node.js web framework for API server
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema validation
- **Vite**: Build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

### Database and Validation
- **PostgreSQL**: Primary database (configured but not yet used)
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Zod**: Runtime type validation and schema definition

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development**: `npm run dev` runs both frontend and backend with hot reloading
- **Production Build**: `npm run build` creates optimized production bundles
- **Database**: PostgreSQL module configured for production database
- **Static Assets**: Frontend builds to `dist/public` for production serving

### Environment Configuration
- Uses Replit's built-in PostgreSQL for production database
- Environment variables configured via `.replit` file
- Auto-scaling deployment target configured

### Build Process
1. Frontend builds with Vite to `dist/public`
2. Backend builds with esbuild to `dist/index.js`
3. Production server serves static files and API routes

## Changelog
- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.