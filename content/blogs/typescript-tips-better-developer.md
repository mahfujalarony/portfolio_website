---
title: "TypeScript Tips That Made Me a Better Developer"
date: "2024-11-10"
description: "Practical TypeScript patterns and tricks I've picked up from real-world projects — from utility types to strict typing strategies that catch bugs before runtime."
tags: ["TypeScript", "JavaScript", "Best Practices", "Web Dev"]
readingTime: 5
featured: true
---

# TypeScript Tips That Made Me a Better Developer

TypeScript has fundamentally changed how I write JavaScript. Here are the patterns and tips I've found most valuable in real production code.

## 1. Use Utility Types Instead of Redefining

TypeScript has powerful built-in utility types. Stop rewriting them:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Partial — all fields optional
type UserUpdate = Partial<User>;

// Pick — select specific fields
type UserPublic = Pick<User, 'id' | 'name' | 'email'>;

// Omit — exclude specific fields
type UserWithoutPassword = Omit<User, 'password'>;

// Required — all fields required
type UserComplete = Required<User>;

// Record — typed key-value map
type UserMap = Record<string, User>;
```

## 2. Discriminated Unions for State Management

This pattern eliminates impossible states:

```typescript
type ApiState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

// TypeScript knows exactly what's available in each case
function renderState(state: ApiState<User[]>) {
  switch (state.status) {
    case 'loading':
      return <Spinner />;
    case 'success':
      return <UserList users={state.data} />; // data is typed!
    case 'error':
      return <Error message={state.error} />; // error is typed!
    default:
      return null;
  }
}
```

## 3. Generics for Reusable Functions

```typescript
// Without generics — loses type information
function first(arr: any[]): any {
  return arr[0];
}

// With generics — preserves types
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Usage — TypeScript infers the type
const user = first(users); // typed as User | undefined
const num = first([1, 2, 3]); // typed as number | undefined
```

## 4. Type Guards

Narrow types safely at runtime:

```typescript
// Custom type guard
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'email' in obj
  );
}

// Using the type guard
const data: unknown = await fetchUser();
if (isUser(data)) {
  console.log(data.email); // TypeScript knows it's a User here
}
```

## 5. `as const` for Immutable Values

```typescript
// Without as const — typed as string[]
const ROLES = ['admin', 'user', 'moderator'];

// With as const — typed as readonly tuple with literal types
const ROLES = ['admin', 'user', 'moderator'] as const;
type Role = typeof ROLES[number]; // 'admin' | 'user' | 'moderator'

// Great for API enums
const STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;

type Status = typeof STATUS[keyof typeof STATUS];
```

## 6. Strict Mode is Worth It

Enable strict mode in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

Yes, it will break existing code. Fix it. It'll catch real bugs.

## 7. Template Literal Types

```typescript
type EventName = 'click' | 'focus' | 'blur';
type HandlerName = `on${Capitalize<EventName>}`;
// Result: 'onClick' | 'onFocus' | 'onBlur'

type CSSProperty = 'margin' | 'padding';
type CSSDirection = 'Top' | 'Right' | 'Bottom' | 'Left';
type CSSLonghand = `${CSSProperty}${CSSDirection}`;
// 'marginTop' | 'marginRight' | ... | 'paddingLeft'
```

## Key Takeaway

TypeScript's type system is incredibly powerful. The more you lean into it — with utility types, generics, and discriminated unions — the fewer runtime errors you'll encounter and the more confident you'll be refactoring code.

Start with strict mode, use utility types aggressively, and reach for discriminated unions whenever you're modeling state.
