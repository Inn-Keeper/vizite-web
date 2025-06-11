'use client';

import { useAuth } from "@/hooks/useAuth";

export default function MyAccountPage() {
  const { requireAuth } = useAuth();
  const { showAuthPrompt, content } = requireAuth();
  if (showAuthPrompt) {
    return <>{content}</>;
  }
  return <div>MyAccountPage</div>;
}