'use client';

import { useState, useEffect, PropsWithChildren } from 'react';

/**
 * Renders children only after hydration (client-side mount).
 * This prevents the server-rendered HTML from flashing before client
 * code (Framer Motion) takes control.
 */
export default function HydrationWrapper({ children }: PropsWithChildren<{}>) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Return nothing until hydration completes
  if (!isHydrated) return null;

  return <>{children}</>;
}
