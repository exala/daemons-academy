# Daemons Academy - Cybersecurity Training Website

## Overview

This is a modern web application for Daemons Academy, a cybersecurity training institute in Pakistan. The platform serves as a marketing and information website for their offensive security and penetration testing courses. The application features a cyberpunk-themed design with matrix-style animations, glitch effects, and interactive elements to reflect the cybersecurity focus.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React with TypeScript**: The application uses React 18 with TypeScript for type safety and modern development practices. The frontend is built using Vite as the build tool for fast development and optimized production builds.

**UI Framework**: Implements shadcn/ui component library built on top of Radix UI primitives, providing accessible and customizable components. The design system uses Tailwind CSS for styling with a custom cyberpunk theme featuring green accent colors (#00ff00) and dark backgrounds.

**Routing**: Uses wouter as a lightweight client-side routing solution instead of React Router, keeping the bundle size minimal.

**State Management**: Leverages TanStack Query (React Query) for server state management, caching, and data fetching. Local state is managed with React's built-in hooks.

**Styling Approach**: Custom CSS combined with Tailwind utilities creates the cyberpunk aesthetic. Includes matrix-style background animations, glitch text effects, and terminal-inspired UI components.

### Backend Architecture

**Express.js Server**: Minimal Express.js backend setup with TypeScript support. Currently serves as a foundation for potential future API development, with routing structure in place.

**Development Setup**: Uses tsx for TypeScript execution in development and esbuild for production builds. The server includes middleware for request logging and error handling.

**Static File Serving**: Configured to serve the built React application in production while supporting Vite's development server in development mode.

### Data Storage Solutions

**Database Configuration**: Configured to use PostgreSQL with Drizzle ORM for type-safe database operations. The schema defines a basic user table structure with UUID primary keys.

**Session Management**: Includes connect-pg-simple for PostgreSQL-based session storage, though authentication features are not yet implemented.

**Migration System**: Uses Drizzle Kit for database schema migrations and management.

### Authentication and Authorization

**Prepared Infrastructure**: The codebase includes user schema and session storage setup, indicating preparation for future authentication implementation. Currently, no active authentication system is in place.

### Design System and UI Components

**Component Architecture**: Extensive use of reusable UI components following atomic design principles. Components are organized into generic UI elements and specific application components.

**Accessibility**: Built on Radix UI primitives ensuring keyboard navigation, screen reader support, and ARIA compliance.

**Responsive Design**: Mobile-first approach with responsive breakpoints defined in Tailwind configuration.

**Custom Components**: Specialized components like MatrixBackground, GlitchText, TerminalBox, and ScrollIndicator create the unique cyberpunk aesthetic.

### Performance Optimizations

**Bundle Optimization**: Vite handles code splitting and tree shaking for optimal bundle sizes. Production builds are optimized with esbuild.

**Asset Management**: Static assets are properly organized and served with appropriate caching headers.

**Query Optimization**: TanStack Query provides intelligent caching and background refetching for optimal user experience.

## External Dependencies

### Database Services
- **Neon Database**: Uses @neondatabase/serverless for PostgreSQL connectivity, indicating cloud-based database hosting
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect

### UI and Design Libraries
- **Radix UI**: Comprehensive set of accessible component primitives for building the design system
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library built on Radix UI

### Development and Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety and enhanced developer experience
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

### Communication Integration
- **WhatsApp Integration**: Direct integration for customer communication via WhatsApp links
- **Font Awesome**: Additional icon library for social media and contact icons
- **Google Fonts**: Custom typography using Inter and JetBrains Mono fonts

### Form and Interaction Libraries
- **React Hook Form**: Form state management and validation
- **TanStack Query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation and formatting utilities

### Animation and Visual Effects
- **CSS Animations**: Custom keyframe animations for matrix effects and glitch text
- **Embla Carousel**: Carousel component for potential future content display
- **Class Variance Authority**: Utility for creating component variants with consistent styling