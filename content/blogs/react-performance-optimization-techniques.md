---
title: "React Performance Optimization: Techniques I Use Daily"
date: "2025-01-20"
description: "Practical React performance tips including memoization, lazy loading, virtualization, and bundle optimization that I apply in production applications."
tags: ["React", "Performance", "Frontend", "JavaScript"]
readingTime: 6
featured: true
---

# React Performance Optimization: Techniques I Use Daily

After working on multiple production React applications, I've learned that performance issues usually come from a handful of common mistakes. Here are the optimization techniques I rely on most.

## 1. Memoization with `useMemo` and `useCallback`

The most common performance mistake is re-rendering components unnecessarily. Memoization helps prevent that.

```tsx
// Without optimization - recalculates on every render
const filteredUsers = users.filter(u => u.active);

// With useMemo - only recalculates when `users` changes
const filteredUsers = useMemo(
  () => users.filter(u => u.active),
  [users]
);
```

Use `useCallback` for functions passed as props:

```tsx
// This creates a new function reference every render
const handleClick = () => {
  doSomething(id);
};

// This keeps the same reference unless `id` changes
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

## 2. Code Splitting with `React.lazy`

Don't load everything upfront. Split your bundle by routes:

```tsx
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Analytics = lazy(() => import('./pages/Analytics'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Suspense>
  );
}
```

## 3. Virtualization for Long Lists

Never render thousands of DOM elements. Use a virtualization library:

```tsx
import { FixedSizeList as List } from 'react-window';

function UserList({ users }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <UserCard user={users[index]} />
    </div>
  );

  return (
    <List
      height={600}
      itemCount={users.length}
      itemSize={80}
      width="100%"
    >
      {Row}
    </List>
  );
}
```

## 4. Avoid Prop Drilling with Context

Deep prop drilling kills performance and readability. Use Context wisely:

```tsx
const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

## 5. Optimize Images

Always use `next/image` in Next.js projects:

```tsx
import Image from 'next/image';

<Image
  src="/profile.jpg"
  width={400}
  height={300}
  alt="Profile"
  priority={isAboveFold}
  placeholder="blur"
/>
```

## 6. Debounce Expensive Operations

For search inputs or resize handlers:

```tsx
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const debouncedSearch = useDebounce(searchQuery, 300);
```

## Profiling Before Optimizing

Always profile before optimizing. Use React DevTools Profiler:

1. Open React DevTools → Profiler tab
2. Click Record and interact with your app
3. Look for components with long render times
4. Optimize only what actually hurts

**Remember:** Premature optimization is the root of all evil. Measure first, optimize second.

## Summary

| Technique | When to Use |
|-----------|-------------|
| `useMemo` | Expensive calculations |
| `useCallback` | Functions passed as props |
| `React.lazy` | Heavy components/routes |
| Virtualization | Lists > 100 items |
| Debounce | Frequent user input |

These patterns have helped me significantly reduce render times and improve user experience across production applications.
